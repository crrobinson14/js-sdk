# How to develop an application

Echo JS SDK allows to create complex applications based on Echo.App class. This page will guide you through the process of custom Application creation.

## Introduction

*Application* (or *App*) is an object with the predefined structure which incapsulates a certain business logic and allows to work with the set of Echo Controls and Echo Plugins as with the single component.

Let's imagine that we want to create the application for posting and viewing comments on a website. For this purpose we'll use the [Stream](#!/api/Echo.StreamServer.Controls.Stream), the [Submit](#!/api/Echo.StreamServer.Controls.Submit) and the [Auth](#!/api/Echo.IdentityServer.Controls.Auth) controls and assemble them in one logical unit using the Echo Application approach.

## Creating the Application skeleton

First of all, let's prepare the JavaScript closure to allocate a separate namespace for our applications's code. This step is common for all plugins, controls and apps built on top of the JS SDK. You can find the detailed information on how to create the JS closure in the ["Terminology and dev tips" guide](#!/guide/terminology-section-3). So we have the following code as a starting point:

	@example
	(function(jQuery) {
	"use strict";

	var $ = jQuery;

	// component code goes here

	})(Echo.jQuery);

Now let's add the application definition. Echo JS SDK contains a special Echo.App class to facilitate the application creation, we'll use some functions to add the application definition:

	@example
	(function(jQuery) {
	"use strict";

	var $ = jQuery;

	var Comments = Echo.App.manifest("Echo.Apps.CommentsSample");

	if (Echo.App.isDefined("Echo.Apps.CommentsSample")) return;

	Echo.App.create(Comments);

	})(Echo.jQuery);

We've called the "Echo.App.manifest" function and passed the name of the application as an argument. We checked whether the application was already initialized or not, to avoid multiple application re-definitions in case the application script was included into the application source several times. After that we passed the manifest into the Echo.App.create function to generate the application JS class out of the static declaration.

At that point we can consider the application skeleton ready and start adding the business logic into it.

## Application configuration

Let's assume that we need a configuration parameter for our application to define the position of the submit form (before or after the Stream control). Also we want to define a default value of the parameter in case it is omitted in the application configuration while installing it into a website. In order to do it we add the "config" object to the application manifest with the name of the config field as a key and a default as its value, so the code of the application will look like:

	@example
	(function(jQuery) {
	"use strict";

	var $ = jQuery;

	var Comments = Echo.App.manifest("Echo.Apps.CommentsSample");

	if (Echo.App.isDefined("Echo.Apps.CommentsSample")) return;

	Comments.config = {
		"submitFormPosition": "top" // top | bottom
	};

	Echo.App.create(Comments);

	})(Echo.jQuery);

If we need more options in future, they can be appended as additional fields into the "config" hash.

Now everywhere in the application's code we'll be able to use the following call:

	@example
	this.config.get("submitFormPosition"); // assuming that "this" points to the application instance

to get the value of the "submitFormPosition" config parameter defined during the plugin installation or to access the default value otherwise. Note: the "this" var should point to the application instance.

## Application template

Ok, now it's time to create the application UI.

The first steps is to prepare a template to represent the application UI. Due to the fact that the template of our application depends on the configuration of the application, we'll create two templates and will dynamically choose which one to use. The templates might look like:

	@example
	Comments.templates.topSubmitFormPosition =
		'<div class="{class:container}">' +
			'<div class="{class:auth}"></div>' +
			'<div class="{class:submit}"></div>' +
			'<div class="{class:stream}"></div>' +
		'</div>';

	Comments.templates.bottomSubmitFormPosition =
		'<div class="{class:container}">' +
			'<div class="{class:auth}"></div>' +
			'<div class="{class:stream}"></div>' +
			'<div class="{class:submit}"></div>' +
		'</div>';

	Comments.methods.template = function() {
		return this.templates[
			this.config.get("submitFormPosition") + "SubmitFormPosition"
		];
	};

Important note: as you can see, the templates contains the placeholders such as: "{class:container}", "{class:auth}" etc. These placeholders will be processed by the templating engine before the template is inserted into a page. You can find the general description of the rendering engine in the ["Terminology and dev tips" guide](#!/guide/terminology).

If your application requires only one template, you can define it as "main" in the "templates" object as shown below:

	@example
	Comments.templates.main = '<div class="{class:container}"></div>';

Note: the template might be also represented by the function. In this case the function will be called within the application context (i.e. "this" will point to the current application instance).

## Adding renderers

Now we have placeholders for our Auth, Submit and Stream controls and we need the logic to init the necessary applications in the right places and we'll employ renderers here. Application manifest specifies the location for the renderers, it's the "renderers" hash. This hash should contain the renderers for the elements added within the app templates. The set of renderers to initialize the controls may look like:

	@example
	Comments.renderers.auth = function(element) {
		this.initComponent({
			"id": "Auth",
			"name": "Echo.IdentityServer.Controls.Auth",
			"config": {
				"appkey": null,
				"target": element,
				"identityManager": "{config:identityManager}"
			}
		});
		return element;
	};

	Comments.renderers.stream = function(element) {
		this.initComponent({
			"id": "Stream",
			"name": "Echo.StreamServer.Controls.Stream",
			"config": {
				"target": element
			}
		});
		return element;
	};

	Comments.renderers.submit = function(element) {
		this.initComponent({
			"id": "Submit",
			"name": "Echo.StreamServer.Controls.Submit",
			"config": {
				"target": element,
				"infoMessages": {"enabled": false}
			}
		});
		return element;
	};

Important note: to proxy the configuration settings from the application to the child controls we can use placeholders, like the ones we used in the application templates. In our application we proxythe "identityManager" as a param of the Echo.IdentityServer.Controls.Auth control config by defining the "{config:identityManager}" placeholder.

## CSS rules

To make the UI look nice, we should add some CSS rules. There is a special placeholder for the CSS rules in the application definition. The field is called "css". The value of this field is a CSS string. Here are CSS rules for our application:

	@example
	Comments.css = ".{class:container} > div { margin-bottom: 7px; }";

## Dependencies

If the application depends on some other external component/library (including other Echo components), it's possible to define the dependencies list for the application. In this case the SDK engine will download the dependencies first and launch the application after that. The dependency is an object with the "url" and the "loaded" fields. The "url" field contains the resource URL and the "loaded" field should be defined as a function which returns 'true' or 'false' and indicate whether the resource should be downloaded or not. Example:

	@example
	Comments.dependencies = [
		{"loaded": function() {
			return Echo.Control.isDefined("Echo.StreamServer.Controls.Submit") &&
				Echo.Control.isDefined("Echo.StreamServer.Controls.Stream");
		}, "url": "{sdk}/streamserver.pack.js"},

		{"loaded": function() {
			return Echo.Control.isDefined("Echo.IdentityServer.Controls.Auth");
		}, "url": "{sdk}/identityserver.pack.js"}
	];

## Events

Another important aspect is events.

Each Echo component is an independent part of the system and can communicate with each other on subscribe-publish basis. One application can subscribe to the expected event and the other application can publish it and the event data will be delivered to the subscribed applications. This model is very similar to the DOM events model when you can add event listener and perform some actions when a certain event is fired. All the events are powered by the [Echo.Events library](#!/api/Echo.Events).

There are lots of events going on during the application and control life. The list of the events for each component can be found on the respective page in the documentation. The application definition structure provides the interface to subscribe to the necessary events. The events subscriptions should be defined inside the "events" hash using the event name as a key and the event handler as a value, for example:

	@example
	Comments.events = {
		"Echo.StreamServer.Controls.Stream.onDataReceive": function(topic, args) {
			// ... some actions ...
		}
	};

## Application installation

In order to install the application into a page, the following steps should be taken:

- the application script should be delivered to the client side (for example, using the &lt;script&gt; tag inclusion)

- the application should be added into the page, for example as shown below:

&nbsp;
	@example
	new Echo.Apps.CommentsSample({
		"target": document.getElementById("comments-sample"),
		"appkey": "test.aboutecho.com",
		"components": {
			"Stream": {
				"query": "childrenof:http://echosandbox.com/test/comments-sampler-test children:0 itemsPerPage:10",
				"plugins": [{
					"name": "Edit"
				}, {
					"name": "Like"
				}, {
					"name": "Moderation"
				}, {
					"name": "StreamSortingSelector"
				}]
			},
			"Submit": {
				"targetURL": "http://echosandbox.com/test/comments-sampler-test"
			}
		},
		"identityManager": {
			"login": {
				"width": 400,
						"height": 250,
						"url": "https://echo.rpxnow.com/openid/embed?flags=stay_in_window,no_immediate&token_url=http%3A%2F%2Fjs-kit.com%2Fapps%2Fjanrain%2Fwaiting.html&bp_channel="
			},
			"signup": {
				"width": 400,
						"height": 250,
						"url": "https://echo.rpxnow.com/openid/embed?flags=stay_in_window,no_immediate&token_url=http%3A%2F%2Fjs-kit.com%2Fapps%2Fjanrain%2Fwaiting.html&bp_channel="
			}
	   },
	   "submitFormPosition": "bottom"
	});

Note: in order to configure internal Echo Controls and Plugins used in the application, the "components" field (with the JS object as a value) can be added into the application config. The keys of the "components" field value are the internal names of the controls, in our case: "Stream" and "Submit". These names are assigned within the application definition while the "initComponent" function is called.  Also we set the "submitFormPosition" and the ["identityManager"](#!/api/Echo.IdentityServer.Controls.Auth-cfg-identityManager) keys to defined the location of the Submit form and the configuration of the identity manager feature.

## Complete application source code

	@example
	(function(jQuery) {
	"use strict";

	var $ = jQuery;

	var Comments = Echo.App.manifest("Echo.Apps.CommentsSample");

	if (Echo.App.isDefined("Echo.Apps.CommentsSample")) return;

	Comments.dependencies = [
		{"loaded": function() {
			return Echo.Control.isDefined("Echo.StreamServer.Controls.Submit") &&
				Echo.Control.isDefined("Echo.StreamServer.Controls.Stream");
		}, "url": "{sdk}/streamserver.pack.js"},

		{"loaded": function() {
			return Echo.Control.isDefined("Echo.IdentityServer.Controls.Auth");
		}, "url": "{sdk}/identityserver.pack.js"}
	];

	Comments.config = {
		"submitFormPosition": "top" // top | bottom
	};

	Comments.templates.topSubmitFormPosition =
		'<div class="{class:container}">' +
			'<div class="{class:auth}"></div>' +
			'<div class="{class:submit}"></div>' +
			'<div class="{class:stream}"></div>' +
		'</div>';

	Comments.templates.bottomSubmitFormPosition =
		'<div class="{class:container}">' +
			'<div class="{class:auth}"></div>' +
			'<div class="{class:stream}"></div>' +
			'<div class="{class:submit}"></div>' +
		'</div>';

	Comments.methods.template = function() {
		return this.templates[
			this.config.get("submitFormPosition") + "SubmitFormPosition"
		];
	};

	Comments.renderers.auth = function(element) {
		this.initComponent({
			"id": "Auth",
			"name": "Echo.IdentityServer.Controls.Auth",
			"config": {
				"appkey": null,
				"target": element,
				"identityManager": "{config:identityManager}"
			}
		});
		return element;
	};

	Comments.renderers.stream = function(element) {
		this.initComponent({
			"id": "Stream",
			"name": "Echo.StreamServer.Controls.Stream",
			"config": {
				"target": element
			}
		});
		return element;
	};

	Comments.renderers.submit = function(element) {
		this.initComponent({
			"id": "Submit",
			"name": "Echo.StreamServer.Controls.Submit",
			"config": {
				"target": element,
				"infoMessages": {"enabled": false}
			}
		});
		return element;
	};

	Comments.css = ".{class:container} > div { margin-bottom: 7px; }";

	Echo.App.create(Comments);

	})(Echo.jQuery);