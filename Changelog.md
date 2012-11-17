# Echo JS SDK CHANGELOG:

## v3.0.3 - Nov 13, 2012

- We employed the Bootstrap Modal dialog to display popups. The previously used jQuery Fancybox
was removed from the code base, since it's no longer required. If you use the $.fancybox calls
in your code, please update them employing the $.echoModal library. Example of the library usage
can be found in the Echo.IdentityServer.Control.Auth and Echo.StreamServer.Controls.Submit applications.

- The Bootstrap libraries assembling procedure was updated. Now the Bootstrap lib is represented
as one JS file instead of 2-3 JS and CSS files. The CSS code and extra JS wrappers were packaged
into a single JS file. The CSS rules required for the Bootstrap component are inserted into the page
using the standard Echo.Utils.addCSS function. It helped to reduce the amount of resources required
to load the SDK which reduces the SDK loading time. Please check the "dependencies" section of your App,
Control and Plugin manifests and remove the Bootstrap CSS files usage required for Echo Bootstrap components.

- The interface of the Echo.StreamServer.Controls.Stream.onDataReceive event was updated. Now the "onDataReceive"
handlers are called with the new parameter "type" instead of "initial". This parameter specifies
the origin of data request and provides the ability to identify event producers more precise. More information
about the event and its new interface can be found in our docs center:
http://echoappsteam.github.com/js-sdk/docs/#!/api/Echo.StreamServer.Controls.Stream-event-onDataReceive

- The contract of the Echo.Utils.loadImage was updated. Now the function accepts one argument with
the object type. The "onload" and "onerror" callbacks were added as well to provide better flexibility
for the function users. More information about the function and its new contract can be found in our docs center:
http://echoappsteam.github.com/js-sdk/docs/#!/api/Echo.Utils-static-method-loadImage

- The Echo.Utils.parseURL function contract was slightly updated. Now an empty string is returned as a value
for the keys which represent the part which was not found in the URL, the "undefined" value was returned
previously in such cases. If you use this function in your code, please make check it and update accordingly.
More information about the Echo.Utils.parseURL function can be found in our docs center:
http://echoappsteam.github.com/js-sdk/docs/#!/api/Echo.Utils-static-method-parseURL

- The Twitter Bootstrap UI framework was upgraded from 2.1.1 to 2.2.1 version.

- A new "title" configuration parameter was added for the Echo.IdentityServer.Controls.Auth control
to provide an ability to set the auth modal dialog title. More information about the new parameter
can be found in our docs center:
http://echoappsteam.github.com/js-sdk/docs/#!/api/Echo.IdentityServer.Controls.Auth-cfg-identityManager

- The "destroy" method called for the dependent control (i.e. when it was initialized within another control)
didn't clean up the target element, the target was cleared only in case the "destroy" was called for the top
level control. Now the target is cleared properly for the dependent controls when the "destroy" method is being called.

- Now the "templates.main" field in the Control or App manifest might be either a string or a function which generates
the template. It provides more flexibility for the templates generation based on the required conditions.

- The empty stream message was displayed incorrectly in case the PinboardVisualization plugin was enabled for the Stream
control. Now the PinboardVisualization plugin doesn't affect the info messages displayed in the Stream control.

- A new "removePersonalItemsAllowed" configuration parameter was added for the Moderation plugin to provide users
with the ability to delete their own items. More information about the new parameter can be found in our docs center:
http://echoappsteam.github.com/js-sdk/docs/#!/api/Echo.StreamServer.Controls.Stream.Item.Plugins.Moderation-cfg-removePersonalItemsAllowed

- The Echo.Utils.htmlize and Echo.Utils.stripTags functions logic was slightly updated. Now the functions process
the argument value only if it's a string type argument and return incoming argument value as is otherwise.

- The Echo.Utils.set function logic was optimized to work with plain keys, i.e. keys without nesting levels
(example of the plain keys: "key1", "key2"; example of the keys with the nesting levels: "key1.key2", "key3.key4.key5").
If the plain key is passed into the function, the part of machinery is not activated to speed up and simplify the process.

- The Echo.API lib and the respective StreamServer, IdentityServer, etc libs were improved by adding the condition
into the JS closure to exit the function in case the given class was already defined on the page.

- The logic of the Echo.API lib was updated to provide an ability to make cross domain AJAX requests using
the POST method. The HTTP method can be defined using the "method" parameter of the Echo.API object instance
creation. More information about the Echo.API lib can be found in our docs center:
http://echoappsteam.github.com/js-sdk/docs/#!/api/Echo.API.Request-cfg-method

- A new "settings" configuration parameter was added for the Echo.API library to provide an access to transport
object configuration. More information about the new configuration parameter can be found in our docs center:
http://echoappsteam.github.com/js-sdk/docs/#!/api/Echo.API.Request-cfg-settings

- A new "cdnBaseURL" configuration parameter was added for all Apps and Controls. The intention is to collect
different CDN base URLs used in the products built on top of the JS SDK in one single place for consistency purposes.
In addition to the new configuration parameter we updated the dependencies management mechanisms and provided
the ability to use the configuration parameters in the resource URLs. Now the "{config:someKey}" is available
for the URLs defined in the "dependencies" object of the App, Control or Plugin manifest. The idea is to use
the newly added "cdnBaseURL" configuration parameter values in the URLs to give more flexibility for the publishers
and developers to define the location of the resources and avoid the need to update the code itself in case
the base URL is changed. More information about the "cdnBaseURL" parameter can be found in our docs center:
http://echoappsteam.github.com/js-sdk/docs/#!/api/Echo.Control-cfg-cdnBaseURL

- The internal machinery of the Echo.Utils.htmlTextTruncate function was updated to cache the generated
list of tags used inside the function to prevent the same set of tags generation each time the function is being called.

- The Echo.Utils.log function calls were added into several places where the function execution is stopped
due to the wrong incoming parameters. This should be very useful while developing the applications built on top
of the SDK v3. We will add more annotations like this as we move forward.

- The jQuery Easing plugin which was a dependency for the FancyBox plugin was removed, since it's no longer required
(since the FancyBox was replaced with the Bootstrap Modal).

## v3.0.2 - Oct 11, 2012

- the "Echo.StreamServer.Controls.Stream.Item.onReceive" event fired within
the Stream control, was renamed to the "Echo.StreamServer.Controls.Stream.onItemReceive".
Please rename the event if you use it somewhere in the code.

- the "liveUpdates" and "liveUpdatesTimeout" Stream control config options were
moved into the "liveUpdates" hash and became the "enabled" and "timeout" keys
respectively. The "liveUpdatesTimeoutMin" option was removed. More information
about the "liveUpdates" configuration option is available in our docs center:
http://echoappsteam.github.com/js-sdk/docs/#!/api/Echo.StreamServer.Controls.Stream-cfg-liveUpdates

- the "streamStateLabel" and "streamStateToggleBy" Stream control configuration
options were moved into the "state" hash and became the "label" and "toggleBy"
keys respectively. Documentation for the "state" option is available in our docs
center: http://echoappsteam.github.com/js-sdk/docs/#!/api/Echo.StreamServer.Controls.Stream-cfg-state

- the "Echo.Loader.download" function interface was updated. Now the function
accepts 3 arguments: resources to download, callback and the config. Previously
these arguments were specified as keys of the single object argument. Please update the "Echo.Loader.download"
function calls in your code. Updated information about the function is available in our docs center:
http://echoappsteam.github.com/js-sdk/docs/#!/api/Echo.Loader-static-method-download

- the "More" button of the Stream control is now included into the Live/Pause
trigger area, if the "state.toggleBy" config option is defined as "mouseover"
(which is also a default value)

- a new "state.layout" configuration option was added into the Stream configuration.
If the "layout" is defined as "full" - the "apply update" button appears above the
Stream items list when the new item reaches the Stream as a live update. The user
can click on the button to reveal updates. Documentation for the "state.layout"option
is available in ours docs center: http://echoappsteam.github.com/js-sdk/docs/#!/api/Echo.StreamServer.Controls.Stream-cfg-state

- the animation of the new items (received as live updates in the Stream control) was
changed. Now the whole item container and its contents slide in together from the top
as a whole/complete thing

- now the publisher-defined and default configs are merged recursively to let the config
object contain the whole set of controls with the actual values

- the useless "whoami" request calls (when Backplane was not initialized on the page) within
the UserSession object are prevented

- the docs center was also updated. The "High-level overview", "Terminology and dev tips",
"How to develop a control", "How to develop a plugin" and the "How to develop an app" guides
were added. We’ll be working on ongoing basis to put more content into the guides

- now all entries (which represent Echo items) will be normalized before
the "Echo.StreamServer.Controls.Stream.onDataReceive" event publishing from
within the Stream control. Also it is now published for each live update in addititon
to initial data loading and "more" data loading

- new "itemsComparator" configuration parameter was added for the Stream control to provide
an ability to sort the items in a custom order. More information about the configuration
parameter can be found in our docs center:
http://echoappsteam.github.com/js-sdk/docs/#!/api/Echo.StreamServer.Controls.Stream-cfg-itemsComparator


## v3.0.1 - Sep 26, 2012

- the "Echo.Product" class was renamed to "Echo.App".

- the "empty" type used inside the "Echo.Control.showMessage" function
argument was renamed to "info" to be control-agnostic.

- the "Echo.Utils.objectToQuery" function was removed from the public
interface and became the Echo.API library internal facility.

- the "Echo.App.isDefined" and the "Echo.Control.isDefined" functions
were added to check if the app or the control class was defined. These
functions replaced the "Echo.Utils.isComponentDefined" calls in the
control and app scripts.

- the "Echo.Utils.getNestedValue", "Echo.Utils.setNestedValue" and the
"Echo.Utils.removeNestedValue" functions were renamed to the
"Echo.Utils.get", "Echo.Utils.set" and the "Echo.Utils.remove"
respectively.

- the "errorPopup" configuration parameter was added to the
Echo.StreamServer.Controls.Submit control to provide an ability to
define the necessary dimensions for the error message popup raised by
the Submit form in case of error. Documentation for the "errorPopup"
option is available in our docs center:
http://echoappsteam.github.com/js-sdk/docs/#!/api/Echo.StreamServer.Controls.Submit-cfg-errorPopup.

- jQuery library was upgraded from 1.8.1 to 1.8.2 version.

- QUnit library powering the tests infrastructure was upgraded from
1.3.0 to 1.10.0 version.

- the controls are now disabled correctly after the tests were
finished. Previously the controls on the page were producing useless
live update requests.

- new "Echo.Utils.remove" function added to remove a given field in a
given object at any nested level.

- missing dependencies added to the "CommunityFlag", "Edit", "Reply"
and "Like" plugins.

- fixed the race-condition issue in the "TwitterIntents" plugin (IE 7
and 8 were affected).

- implemented CORS support on the transport layer for IE 7 and 8.

- "connection_failure" error is now handled correctly during API
recurring requests.

- fixed the issue which prevents the values like false, null,
undefined, 0 or "" from being defined as the Echo.UserSession instance
field value.

- the "defaultAvatar" option was added to the Stream, Submit, Auth and
FacePile controls. Now you can define the avatar URL to be used as a
default one in the control UI. Documentation for the "defaultAvatar"
option is available in our docs center:
http://echoappsteam.github.com/js-sdk/docs/#!/api/Echo.StreamServer.Controls.Stream-cfg-defaultAvatar

- the "getComponent" function was added to the "Echo.App" class to
provide the ability to access the component by its internal (for the
given App) name.

- fixed the CSS dependencies loading logic used in the Echo.Loader class.

## v3.0.0 - Sep 12, 2012

- Initial SDK release