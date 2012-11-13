Ext.data.JsonP.Echo_StreamServer_Controls_FacePile({
  "tagname": "class",
  "name": "Echo.StreamServer.Controls.FacePile",
  "extends": "Echo.Control",
  "mixins": [

  ],
  "alternateClassNames": [

  ],
  "aliases": {
  },
  "singleton": false,
  "requires": [

  ],
  "uses": [

  ],
  "enum": null,
  "override": null,
  "inheritable": null,
  "inheritdoc": null,
  "meta": {
  },
  "private": null,
  "id": "class-Echo.StreamServer.Controls.FacePile",
  "members": {
    "cfg": [
      {
        "name": "apiBaseURL",
        "tagname": "cfg",
        "owner": "Echo.Control",
        "meta": {
        },
        "id": "cfg-apiBaseURL"
      },
      {
        "name": "appkey",
        "tagname": "cfg",
        "owner": "Echo.Control",
        "meta": {
          "required": true
        },
        "id": "cfg-appkey"
      },
      {
        "name": "cdnBaseURL",
        "tagname": "cfg",
        "owner": "Echo.Control",
        "meta": {
        },
        "id": "cfg-cdnBaseURL"
      },
      {
        "name": "data",
        "tagname": "cfg",
        "owner": "Echo.StreamServer.Controls.FacePile",
        "meta": {
        },
        "id": "cfg-data"
      },
      {
        "name": "defaultAvatar",
        "tagname": "cfg",
        "owner": "Echo.Control",
        "meta": {
        },
        "id": "cfg-defaultAvatar"
      },
      {
        "name": "infoMessages",
        "tagname": "cfg",
        "owner": "Echo.StreamServer.Controls.FacePile",
        "meta": {
        },
        "id": "cfg-infoMessages"
      },
      {
        "name": "initialUsersCount",
        "tagname": "cfg",
        "owner": "Echo.StreamServer.Controls.FacePile",
        "meta": {
        },
        "id": "cfg-initialUsersCount"
      },
      {
        "name": "item",
        "tagname": "cfg",
        "owner": "Echo.StreamServer.Controls.FacePile",
        "meta": {
        },
        "id": "cfg-item"
      },
      {
        "name": "labels",
        "tagname": "cfg",
        "owner": "Echo.Control",
        "meta": {
        },
        "id": "cfg-labels"
      },
      {
        "name": "submissionProxyURL",
        "tagname": "cfg",
        "owner": "Echo.Control",
        "meta": {
        },
        "id": "cfg-submissionProxyURL"
      },
      {
        "name": "suffixText",
        "tagname": "cfg",
        "owner": "Echo.StreamServer.Controls.FacePile",
        "meta": {
        },
        "id": "cfg-suffixText"
      },
      {
        "name": "target",
        "tagname": "cfg",
        "owner": "Echo.Control",
        "meta": {
          "required": true
        },
        "id": "cfg-target"
      },
      {
        "name": "totalUsersCount",
        "tagname": "cfg",
        "owner": "Echo.StreamServer.Controls.FacePile",
        "meta": {
        },
        "id": "cfg-totalUsersCount"
      }
    ],
    "property": [
      {
        "name": "and",
        "tagname": "property",
        "owner": "Echo.StreamServer.Controls.FacePile",
        "meta": {
          "echo_label": true
        },
        "id": "property-and"
      },
      {
        "name": "error_busy",
        "tagname": "property",
        "owner": "Echo.Control",
        "meta": {
          "echo_label": true
        },
        "id": "property-error_busy"
      },
      {
        "name": "error_incorrect_appkey",
        "tagname": "property",
        "owner": "Echo.Control",
        "meta": {
          "echo_label": true
        },
        "id": "property-error_incorrect_appkey"
      },
      {
        "name": "error_incorrect_user_id",
        "tagname": "property",
        "owner": "Echo.Control",
        "meta": {
          "echo_label": true
        },
        "id": "property-error_incorrect_user_id"
      },
      {
        "name": "error_internal_error",
        "tagname": "property",
        "owner": "Echo.Control",
        "meta": {
          "echo_label": true
        },
        "id": "property-error_internal_error"
      },
      {
        "name": "error_quota_exceeded",
        "tagname": "property",
        "owner": "Echo.Control",
        "meta": {
          "echo_label": true
        },
        "id": "property-error_quota_exceeded"
      },
      {
        "name": "error_result_too_large",
        "tagname": "property",
        "owner": "Echo.Control",
        "meta": {
          "echo_label": true
        },
        "id": "property-error_result_too_large"
      },
      {
        "name": "error_timeout",
        "tagname": "property",
        "owner": "Echo.Control",
        "meta": {
          "echo_label": true
        },
        "id": "property-error_timeout"
      },
      {
        "name": "error_unknown",
        "tagname": "property",
        "owner": "Echo.Control",
        "meta": {
          "echo_label": true
        },
        "id": "property-error_unknown"
      },
      {
        "name": "error_view_limit",
        "tagname": "property",
        "owner": "Echo.Control",
        "meta": {
          "echo_label": true
        },
        "id": "property-error_view_limit"
      },
      {
        "name": "error_view_update_capacity_exceeded",
        "tagname": "property",
        "owner": "Echo.Control",
        "meta": {
          "echo_label": true
        },
        "id": "property-error_view_update_capacity_exceeded"
      },
      {
        "name": "error_waiting",
        "tagname": "property",
        "owner": "Echo.Control",
        "meta": {
          "echo_label": true
        },
        "id": "property-error_waiting"
      },
      {
        "name": "error_wrong_query",
        "tagname": "property",
        "owner": "Echo.Control",
        "meta": {
          "echo_label": true
        },
        "id": "property-error_wrong_query"
      },
      {
        "name": "loading",
        "tagname": "property",
        "owner": "Echo.Control",
        "meta": {
          "echo_label": true
        },
        "id": "property-loading"
      },
      {
        "name": "more",
        "tagname": "property",
        "owner": "Echo.StreamServer.Controls.FacePile",
        "meta": {
          "echo_label": true
        },
        "id": "property-more"
      },
      {
        "name": "retrying",
        "tagname": "property",
        "owner": "Echo.Control",
        "meta": {
          "echo_label": true
        },
        "id": "property-retrying"
      }
    ],
    "method": [
      {
        "name": "constructor",
        "tagname": "method",
        "owner": "Echo.StreamServer.Controls.FacePile",
        "meta": {
        },
        "id": "method-constructor"
      },
      {
        "name": "actors",
        "tagname": "method",
        "owner": "Echo.StreamServer.Controls.FacePile",
        "meta": {
          "echo_renderer": true
        },
        "id": "method-actors"
      },
      {
        "name": "dependent",
        "tagname": "method",
        "owner": "Echo.Control",
        "meta": {
        },
        "id": "method-dependent"
      },
      {
        "name": "destroy",
        "tagname": "method",
        "owner": "Echo.Control",
        "meta": {
        },
        "id": "method-destroy"
      },
      {
        "name": "extendTemplate",
        "tagname": "method",
        "owner": "Echo.Control",
        "meta": {
        },
        "id": "method-extendTemplate"
      },
      {
        "name": "get",
        "tagname": "method",
        "owner": "Echo.Control",
        "meta": {
        },
        "id": "method-get"
      },
      {
        "name": "getPlugin",
        "tagname": "method",
        "owner": "Echo.Control",
        "meta": {
        },
        "id": "method-getPlugin"
      },
      {
        "name": "getVisibleUsersCount",
        "tagname": "method",
        "owner": "Echo.StreamServer.Controls.FacePile",
        "meta": {
        },
        "id": "method-getVisibleUsersCount"
      },
      {
        "name": "invoke",
        "tagname": "method",
        "owner": "Echo.Control",
        "meta": {
        },
        "id": "method-invoke"
      },
      {
        "name": "log",
        "tagname": "method",
        "owner": "Echo.Control",
        "meta": {
        },
        "id": "method-log"
      },
      {
        "name": "more",
        "tagname": "method",
        "owner": "Echo.StreamServer.Controls.FacePile",
        "meta": {
          "echo_renderer": true
        },
        "id": "method-more"
      },
      {
        "name": "parentRenderer",
        "tagname": "method",
        "owner": "Echo.Control",
        "meta": {
        },
        "id": "method-parentRenderer"
      },
      {
        "name": "ready",
        "tagname": "method",
        "owner": "Echo.Control",
        "meta": {
        },
        "id": "method-ready"
      },
      {
        "name": "refresh",
        "tagname": "method",
        "owner": "Echo.Control",
        "meta": {
        },
        "id": "method-refresh"
      },
      {
        "name": "remove",
        "tagname": "method",
        "owner": "Echo.Control",
        "meta": {
        },
        "id": "method-remove"
      },
      {
        "name": "render",
        "tagname": "method",
        "owner": "Echo.Control",
        "meta": {
        },
        "id": "method-render"
      },
      {
        "name": "set",
        "tagname": "method",
        "owner": "Echo.Control",
        "meta": {
        },
        "id": "method-set"
      },
      {
        "name": "showError",
        "tagname": "method",
        "owner": "Echo.Control",
        "meta": {
        },
        "id": "method-showError"
      },
      {
        "name": "showMessage",
        "tagname": "method",
        "owner": "Echo.Control",
        "meta": {
        },
        "id": "method-showMessage"
      },
      {
        "name": "substitute",
        "tagname": "method",
        "owner": "Echo.Control",
        "meta": {
        },
        "id": "method-substitute"
      },
      {
        "name": "suffixText",
        "tagname": "method",
        "owner": "Echo.StreamServer.Controls.FacePile",
        "meta": {
          "echo_renderer": true
        },
        "id": "method-suffixText"
      },
      {
        "name": "template",
        "tagname": "method",
        "owner": "Echo.Control",
        "meta": {
        },
        "id": "method-template"
      }
    ],
    "event": [

    ],
    "css_var": [

    ],
    "css_mixin": [

    ]
  },
  "linenr": 6,
  "files": [
    {
      "filename": "facepile.js",
      "href": "facepile.html#Echo-StreamServer-Controls-FacePile"
    }
  ],
  "html_meta": {
  },
  "statics": {
    "cfg": [

    ],
    "property": [

    ],
    "method": [

    ],
    "event": [

    ],
    "css_var": [

    ],
    "css_mixin": [

    ]
  },
  "component": false,
  "superclasses": [
    "Echo.Control"
  ],
  "subclasses": [

  ],
  "mixedInto": [

  ],
  "parentMixins": [

  ],
  "html": "<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/Echo.Control' rel='Echo.Control' class='docClass'>Echo.Control</a><div class='subclass '><strong>Echo.StreamServer.Controls.FacePile</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/facepile.html#Echo-StreamServer-Controls-FacePile' target='_blank'>facepile.js</a></div></pre><div class='doc-contents'><p>Echo FacePile control displays users (actors) returned in any activity stream.\nIt is either a static list formed by a predefined data set or live updated list constructed using the Echo Query Language.</p>\n\n<pre><code>new <a href=\"#!/api/Echo.StreamServer.Controls.FacePile\" rel=\"Echo.StreamServer.Controls.FacePile\" class=\"docClass\">Echo.StreamServer.Controls.FacePile</a>({\n    \"target\": document.getElementById(\"echo-facepile\"),\n    \"appkey\": \"test.aboutecho.com\",\n    \"query\": \"childrenof:http://example.com/* itemsPerPage:2 children:0\",\n    \"suffixText\": \" commented on aboutecho.com\",\n    \"item\": {\"avatar\": true, \"text\": true}\n});\n</code></pre>\n</div><div class='members'><div class='members-section'><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Required Config options</h3><div id='cfg-appkey' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Echo.Control' rel='Echo.Control' class='defined-in docClass'>Echo.Control</a><br/><a href='source/control.html#Echo-Control-cfg-appkey' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Echo.Control-cfg-appkey' class='name expandable'>appkey</a><span> : String</span><strong class='required signature' >required</strong></div><div class='description'><div class='short'>Specifies the customer application key. ...</div><div class='long'><p>Specifies the customer application key. You can use the \"test.echoenabled.com\"\nappkey for testing purposes.</p>\n<p>Defaults to: <code>&quot;&quot;</code></p></div></div></div><div id='cfg-target' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Echo.Control' rel='Echo.Control' class='defined-in docClass'>Echo.Control</a><br/><a href='source/control.html#Echo-Control-cfg-target' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Echo.Control-cfg-target' class='name not-expandable'>target</a><span> : String</span><strong class='required signature' >required</strong></div><div class='description'><div class='short'><p>Specifies the DOM element where the control will be displayed.</p>\n</div><div class='long'><p>Specifies the DOM element where the control will be displayed.</p>\n</div></div></div></div><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Optional Config options</h3><div id='cfg-apiBaseURL' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Echo.Control' rel='Echo.Control' class='defined-in docClass'>Echo.Control</a><br/><a href='source/control.html#Echo-Control-cfg-apiBaseURL' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Echo.Control-cfg-apiBaseURL' class='name expandable'>apiBaseURL</a><span> : String</span></div><div class='description'><div class='short'>URL prefix for all API requests ...</div><div class='long'><p>URL prefix for all API requests</p>\n<p>Defaults to: <code>&quot;api.echoenabled.com/v1/&quot;</code></p></div></div></div><div id='cfg-cdnBaseURL' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Echo.Control' rel='Echo.Control' class='defined-in docClass'>Echo.Control</a><br/><a href='source/control.html#Echo-Control-cfg-cdnBaseURL' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Echo.Control-cfg-cdnBaseURL' class='name expandable'>cdnBaseURL</a><span> : Object</span></div><div class='description'><div class='short'>A set of the key/value pairs to define CDN base URLs for different components. ...</div><div class='long'><p>A set of the key/value pairs to define CDN base URLs for different components.\nThe values are used as the URL prefixes for all static files, such as scripts,\nstylesheets, images etc. You can add your own CDN base URL and use it anywhere\nwhen the configuration object is available.</p>\n<ul><li><span class='pre'>sdk</span> : String (optional)<div class='sub-desc'><p>Base URL of the SDK CDN location used for the main SDK resources.</p>\n</div></li><li><span class='pre'>apps</span> : String (optional)<div class='sub-desc'><p>Base URL of the Echo apps built on top of the JS SDK.</p>\n</div></li></ul></div></div></div><div id='cfg-data' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Echo.StreamServer.Controls.FacePile'>Echo.StreamServer.Controls.FacePile</span><br/><a href='source/facepile.html#Echo-StreamServer-Controls-FacePile-cfg-data' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Echo.StreamServer.Controls.FacePile-cfg-data' class='name expandable'>data</a><span> : Object</span></div><div class='description'><div class='short'>Specifies static data for the list. ...</div><div class='long'><p>Specifies static data for the list. It has the same format as returned\nby the search API endpoint. If the <code>data</code> parameter is provided then the\n<code>query</code> parameter should be omitted. If <code>data</code> and <code>query</code> parameters are both\nprovided <code>query</code> takes precedence over <code>data</code>.</p>\n</div></div></div><div id='cfg-defaultAvatar' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Echo.Control' rel='Echo.Control' class='defined-in docClass'>Echo.Control</a><br/><a href='source/control.html#Echo-Control-cfg-defaultAvatar' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Echo.Control-cfg-defaultAvatar' class='name expandable'>defaultAvatar</a><span> : String</span></div><div class='description'><div class='short'>Default avatar URL which will be used for the user in\ncase there is no avatar information defined in the user\nprofile. ...</div><div class='long'><p>Default avatar URL which will be used for the user in\ncase there is no avatar information defined in the user\nprofile. Also used for anonymous users.</p>\n</div></div></div><div id='cfg-infoMessages' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Echo.StreamServer.Controls.FacePile'>Echo.StreamServer.Controls.FacePile</span><br/><a href='source/facepile.html#Echo-StreamServer-Controls-FacePile-cfg-infoMessages' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Echo.StreamServer.Controls.FacePile-cfg-infoMessages' class='name expandable'>infoMessages</a><span> : String</span></div><div class='description'><div class='short'>Customizes the look and feel of info messages, for example \"loading\" and \"error\". ...</div><div class='long'><p>Customizes the look and feel of info messages, for example \"loading\" and \"error\".</p>\n<p>Defaults to: <code>{&quot;layout&quot;: &quot;compact&quot;}</code></p><p>Overrides: <a href='#!/api/Echo.Control-cfg-infoMessages' rel='Echo.Control-cfg-infoMessages' class='docClass'>Echo.Control.infoMessages</a></p></div></div></div><div id='cfg-initialUsersCount' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Echo.StreamServer.Controls.FacePile'>Echo.StreamServer.Controls.FacePile</span><br/><a href='source/facepile.html#Echo-StreamServer-Controls-FacePile-cfg-initialUsersCount' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Echo.StreamServer.Controls.FacePile-cfg-initialUsersCount' class='name expandable'>initialUsersCount</a><span> : String</span></div><div class='description'><div class='short'>The number of users which will be shown when the FacePile is displayed\nfor the first time. ...</div><div class='long'><p>The number of users which will be shown when the FacePile is displayed\nfor the first time. Default value is the value of <code>data.itemsPerPage</code>\nparameter. Note that the parameter is actual only for the list created\nusing <code>data</code>.</p>\n</div></div></div><div id='cfg-item' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Echo.StreamServer.Controls.FacePile'>Echo.StreamServer.Controls.FacePile</span><br/><a href='source/facepile.html#Echo-StreamServer-Controls-FacePile-cfg-item' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Echo.StreamServer.Controls.FacePile-cfg-item' class='name expandable'>item</a><span> : Object</span></div><div class='description'><div class='short'>Customizes the FacePile item ...</div><div class='long'><p>Customizes the FacePile item</p>\n<p>Defaults to: <code>{&quot;avatar&quot;: true, &quot;text&quot;: true}</code></p><ul><li><span class='pre'>avatar</span> : Boolean<div class='sub-desc'><p>Specifies if user avatar should be rendered within the FacePile item.</p>\n</div></li><li><span class='pre'>text</span> : Boolean<div class='sub-desc'><p>Specifies if user name should be rendered within the FacePile item.</p>\n</div></li></ul></div></div></div><div id='cfg-labels' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Echo.Control' rel='Echo.Control' class='defined-in docClass'>Echo.Control</a><br/><a href='source/control.html#Echo-Control-cfg-labels' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Echo.Control-cfg-labels' class='name expandable'>labels</a><span> : Object</span></div><div class='description'><div class='short'>Specifies the set of language variables defined for this particular control. ...</div><div class='long'><p>Specifies the set of language variables defined for this particular control.</p>\n<p>Defaults to: <code>{}</code></p></div></div></div><div id='cfg-submissionProxyURL' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Echo.Control' rel='Echo.Control' class='defined-in docClass'>Echo.Control</a><br/><a href='source/control.html#Echo-Control-cfg-submissionProxyURL' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Echo.Control-cfg-submissionProxyURL' class='name expandable'>submissionProxyURL</a><span> : String</span></div><div class='description'><div class='short'>URL prefix for requests to Echo Submission Proxy ...</div><div class='long'><p>URL prefix for requests to Echo Submission Proxy</p>\n<p>Defaults to: <code>&quot;apps.echoenabled.com/v2/esp/activity/&quot;</code></p></div></div></div><div id='cfg-suffixText' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Echo.StreamServer.Controls.FacePile'>Echo.StreamServer.Controls.FacePile</span><br/><a href='source/facepile.html#Echo-StreamServer-Controls-FacePile-cfg-suffixText' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Echo.StreamServer.Controls.FacePile-cfg-suffixText' class='name expandable'>suffixText</a><span> : String</span></div><div class='description'><div class='short'>Specifies the text being appended to the end of Face Pile user's list. ...</div><div class='long'><p>Specifies the text being appended to the end of Face Pile user's list.</p>\n<p>Defaults to: <code>&quot;&quot;</code></p></div></div></div><div id='cfg-totalUsersCount' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Echo.StreamServer.Controls.FacePile'>Echo.StreamServer.Controls.FacePile</span><br/><a href='source/facepile.html#Echo-StreamServer-Controls-FacePile-cfg-totalUsersCount' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Echo.StreamServer.Controls.FacePile-cfg-totalUsersCount' class='name expandable'>totalUsersCount</a><span> : String</span></div><div class='description'><div class='short'>The total number of users for the FacePile. ...</div><div class='long'><p>The total number of users for the FacePile. If it's not defined it defaults to\nthe length of the provided data.entries field. Note that the parameter is actual\nonly for the list created using <code>data</code>.</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-and' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Echo.StreamServer.Controls.FacePile'>Echo.StreamServer.Controls.FacePile</span><br/><a href='source/facepile.html#Echo-StreamServer-Controls-FacePile-property-and' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Echo.StreamServer.Controls.FacePile-property-and' class='name expandable'>and</a><span> : String</span><strong class='echo_label signature' >localization label</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>&quot;and&quot;</code></p></div></div></div><div id='property-error_busy' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Echo.Control' rel='Echo.Control' class='defined-in docClass'>Echo.Control</a><br/><a href='source/control.html#Echo-Control-property-error_busy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Echo.Control-property-error_busy' class='name expandable'>error_busy</a><span> : String</span><strong class='echo_label signature' >localization label</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>&quot;Loading. Please wait...&quot;</code></p></div></div></div><div id='property-error_incorrect_appkey' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Echo.Control' rel='Echo.Control' class='defined-in docClass'>Echo.Control</a><br/><a href='source/control.html#Echo-Control-property-error_incorrect_appkey' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Echo.Control-property-error_incorrect_appkey' class='name expandable'>error_incorrect_appkey</a><span> : String</span><strong class='echo_label signature' >localization label</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>&quot;(incorrect_appkey) Incorrect or missing appkey.&quot;</code></p></div></div></div><div id='property-error_incorrect_user_id' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Echo.Control' rel='Echo.Control' class='defined-in docClass'>Echo.Control</a><br/><a href='source/control.html#Echo-Control-property-error_incorrect_user_id' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Echo.Control-property-error_incorrect_user_id' class='name expandable'>error_incorrect_user_id</a><span> : String</span><strong class='echo_label signature' >localization label</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>&quot;(incorrect_user_id) Incorrect user specified in User ID predicate.&quot;</code></p></div></div></div><div id='property-error_internal_error' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Echo.Control' rel='Echo.Control' class='defined-in docClass'>Echo.Control</a><br/><a href='source/control.html#Echo-Control-property-error_internal_error' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Echo.Control-property-error_internal_error' class='name expandable'>error_internal_error</a><span> : String</span><strong class='echo_label signature' >localization label</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>&quot;(internal_error) Unknown server error.&quot;</code></p></div></div></div><div id='property-error_quota_exceeded' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Echo.Control' rel='Echo.Control' class='defined-in docClass'>Echo.Control</a><br/><a href='source/control.html#Echo-Control-property-error_quota_exceeded' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Echo.Control-property-error_quota_exceeded' class='name expandable'>error_quota_exceeded</a><span> : String</span><strong class='echo_label signature' >localization label</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>&quot;(quota_exceeded) Required more quota than is available.&quot;</code></p></div></div></div><div id='property-error_result_too_large' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Echo.Control' rel='Echo.Control' class='defined-in docClass'>Echo.Control</a><br/><a href='source/control.html#Echo-Control-property-error_result_too_large' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Echo.Control-property-error_result_too_large' class='name expandable'>error_result_too_large</a><span> : String</span><strong class='echo_label signature' >localization label</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>&quot;(result_too_large) The search result is too large.&quot;</code></p></div></div></div><div id='property-error_timeout' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Echo.Control' rel='Echo.Control' class='defined-in docClass'>Echo.Control</a><br/><a href='source/control.html#Echo-Control-property-error_timeout' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Echo.Control-property-error_timeout' class='name expandable'>error_timeout</a><span> : String</span><strong class='echo_label signature' >localization label</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>&quot;Loading. Please wait...&quot;</code></p></div></div></div><div id='property-error_unknown' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Echo.Control' rel='Echo.Control' class='defined-in docClass'>Echo.Control</a><br/><a href='source/control.html#Echo-Control-property-error_unknown' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Echo.Control-property-error_unknown' class='name expandable'>error_unknown</a><span> : String</span><strong class='echo_label signature' >localization label</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>&quot;(unknown) Unknown error.&quot;</code></p></div></div></div><div id='property-error_view_limit' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Echo.Control' rel='Echo.Control' class='defined-in docClass'>Echo.Control</a><br/><a href='source/control.html#Echo-Control-property-error_view_limit' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Echo.Control-property-error_view_limit' class='name expandable'>error_view_limit</a><span> : String</span><strong class='echo_label signature' >localization label</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>&quot;View creation rate limit has been exceeded. Retrying in {seconds} seconds...&quot;</code></p></div></div></div><div id='property-error_view_update_capacity_exceeded' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Echo.Control' rel='Echo.Control' class='defined-in docClass'>Echo.Control</a><br/><a href='source/control.html#Echo-Control-property-error_view_update_capacity_exceeded' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Echo.Control-property-error_view_update_capacity_exceeded' class='name expandable'>error_view_update_capacity_exceeded</a><span> : String</span><strong class='echo_label signature' >localization label</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>&quot;This stream is momentarily unavailable due to unusually high activity. Retrying in {seconds} seconds...&quot;</code></p></div></div></div><div id='property-error_waiting' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Echo.Control' rel='Echo.Control' class='defined-in docClass'>Echo.Control</a><br/><a href='source/control.html#Echo-Control-property-error_waiting' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Echo.Control-property-error_waiting' class='name expandable'>error_waiting</a><span> : String</span><strong class='echo_label signature' >localization label</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>&quot;Loading. Please wait...&quot;</code></p></div></div></div><div id='property-error_wrong_query' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Echo.Control' rel='Echo.Control' class='defined-in docClass'>Echo.Control</a><br/><a href='source/control.html#Echo-Control-property-error_wrong_query' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Echo.Control-property-error_wrong_query' class='name expandable'>error_wrong_query</a><span> : String</span><strong class='echo_label signature' >localization label</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>&quot;(wrong_query) Incorrect or missing query parameter.&quot;</code></p></div></div></div><div id='property-loading' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Echo.Control' rel='Echo.Control' class='defined-in docClass'>Echo.Control</a><br/><a href='source/control.html#Echo-Control-property-loading' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Echo.Control-property-loading' class='name expandable'>loading</a><span> : String</span><strong class='echo_label signature' >localization label</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>&quot;Loading...&quot;</code></p></div></div></div><div id='property-more' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Echo.StreamServer.Controls.FacePile'>Echo.StreamServer.Controls.FacePile</span><br/><a href='source/facepile.html#Echo-StreamServer-Controls-FacePile-property-more' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Echo.StreamServer.Controls.FacePile-property-more' class='name expandable'>more</a><span> : String</span><strong class='echo_label signature' >localization label</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>&quot;more&quot;</code></p></div></div></div><div id='property-retrying' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Echo.Control' rel='Echo.Control' class='defined-in docClass'>Echo.Control</a><br/><a href='source/control.html#Echo-Control-property-retrying' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Echo.Control-property-retrying' class='name expandable'>retrying</a><span> : String</span><strong class='echo_label signature' >localization label</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>&quot;Retrying...&quot;</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Echo.StreamServer.Controls.FacePile'>Echo.StreamServer.Controls.FacePile</span><br/><a href='source/facepile.html#Echo-StreamServer-Controls-FacePile-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Echo.StreamServer.Controls.FacePile-method-constructor' class='name expandable'>Echo.StreamServer.Controls.FacePile</a>( <span class='pre'>config</span> ) : <a href=\"#!/api/Echo.StreamServer.Controls.FacePile\" rel=\"Echo.StreamServer.Controls.FacePile\" class=\"docClass\">Echo.StreamServer.Controls.FacePile</a></div><div class='description'><div class='short'>FacePile constructor initializing Echo.StreamServer.Controls.FacePile class ...</div><div class='long'><p>FacePile constructor initializing <a href=\"#!/api/Echo.StreamServer.Controls.FacePile\" rel=\"Echo.StreamServer.Controls.FacePile\" class=\"docClass\">Echo.StreamServer.Controls.FacePile</a> class</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : Object<div class='sub-desc'><p>Configuration options</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Echo.StreamServer.Controls.FacePile\" rel=\"Echo.StreamServer.Controls.FacePile\" class=\"docClass\">Echo.StreamServer.Controls.FacePile</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-actors' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Echo.StreamServer.Controls.FacePile'>Echo.StreamServer.Controls.FacePile</span><br/><a href='source/facepile.html#Echo-StreamServer-Controls-FacePile-method-actors' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Echo.StreamServer.Controls.FacePile-method-actors' class='name expandable'>actors</a>( <span class='pre'>element</span> )<strong class='echo_renderer signature' >renderer</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>element</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-dependent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Echo.Control' rel='Echo.Control' class='defined-in docClass'>Echo.Control</a><br/><a href='source/control.html#Echo-Control-method-dependent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Echo.Control-method-dependent' class='name expandable'>dependent</a>( <span class='pre'></span> ) : Boolean</div><div class='description'><div class='short'>Method checks if control was initialized from another control. ...</div><div class='long'><p>Method checks if control was initialized from another control.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-destroy' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Echo.Control' rel='Echo.Control' class='defined-in docClass'>Echo.Control</a><br/><a href='source/control.html#Echo-Control-method-destroy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Echo.Control-method-destroy' class='name expandable'>destroy</a>( <span class='pre'>config</span> )</div><div class='description'><div class='short'>Unified method to destroy control. ...</div><div class='long'><p>Unified method to destroy control.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-extendTemplate' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Echo.Control' rel='Echo.Control' class='defined-in docClass'>Echo.Control</a><br/><a href='source/control.html#Echo-Control-method-extendTemplate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Echo.Control-method-extendTemplate' class='name expandable'>extendTemplate</a>( <span class='pre'>action, anchor, [html]</span> )</div><div class='description'><div class='short'>Method to extend the template of particular control. ...</div><div class='long'><p>Method to extend the template of particular control.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>action</span> : String<div class='sub-desc'><p>One of the following actions:</p>\n\n<ul>\n<li>\"insertBefore\"</li>\n<li>\"insertAfter\"</li>\n<li>\"insertAsFirstChild\"</li>\n<li>\"insertAsLastChild\"</li>\n<li>\"replace\"</li>\n<li>\"remove\"</li>\n</ul>\n\n</div></li><li><span class='pre'>anchor</span> : String<div class='sub-desc'><p>Element name which is a subject of a transformation application.</p>\n</div></li><li><span class='pre'>html</span> : String (optional)<div class='sub-desc'><p>The content of a transformation to be applied.\nThis param is required for all actions except \"remove\".</p>\n</div></li></ul></div></div></div><div id='method-get' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Echo.Control' rel='Echo.Control' class='defined-in docClass'>Echo.Control</a><br/><a href='source/control.html#Echo-Control-method-get' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Echo.Control-method-get' class='name expandable'>get</a>( <span class='pre'>key, [defaults]</span> ) : Mixed</div><div class='description'><div class='short'>Accessor method to get specific field. ...</div><div class='long'><p>Accessor method to get specific field.</p>\n\n<p>This function returns the corresponding value of the given key\nor the default value if specified in the second argument.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>key</span> : String<div class='sub-desc'><p>Defines the key for data extraction.</p>\n</div></li><li><span class='pre'>defaults</span> : Object (optional)<div class='sub-desc'><p>Default value if no corresponding key was found in the config.\nNote: only the 'undefined' JS statement triggers the default value usage.\nThe false, null, 0, [] are considered as a proper value.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Mixed</span><div class='sub-desc'><p>The corresponding value found in the object.</p>\n</div></li></ul></div></div></div><div id='method-getPlugin' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Echo.Control' rel='Echo.Control' class='defined-in docClass'>Echo.Control</a><br/><a href='source/control.html#Echo-Control-method-getPlugin' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Echo.Control-method-getPlugin' class='name expandable'>getPlugin</a>( <span class='pre'>name</span> ) : Object</div><div class='description'><div class='short'>Accessor function allowing to obtain the plugin by its name. ...</div><div class='long'><p>Accessor function allowing to obtain the plugin by its name.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String<div class='sub-desc'><p>Specifies plugin name.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>Instance of the corresponding plugin.</p>\n</div></li></ul></div></div></div><div id='method-getVisibleUsersCount' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Echo.StreamServer.Controls.FacePile'>Echo.StreamServer.Controls.FacePile</span><br/><a href='source/facepile.html#Echo-StreamServer-Controls-FacePile-method-getVisibleUsersCount' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Echo.StreamServer.Controls.FacePile-method-getVisibleUsersCount' class='name expandable'>getVisibleUsersCount</a>( <span class='pre'></span> ) : Number</div><div class='description'><div class='short'>Method to get the visible users count ...</div><div class='long'><p>Method to get the visible users count</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'><p>visible users count</p>\n</div></li></ul></div></div></div><div id='method-invoke' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Echo.Control' rel='Echo.Control' class='defined-in docClass'>Echo.Control</a><br/><a href='source/control.html#Echo-Control-method-invoke' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Echo.Control-method-invoke' class='name expandable'>invoke</a>( <span class='pre'>mixed, context</span> ) : Mixed</div><div class='description'><div class='short'>Function which checks if the value passed as a first argument is a function and executes\nit in given context. ...</div><div class='long'><p>Function which checks if the value passed as a first argument is a function and executes\nit in given context. If the first argument has different type, it's returned as is.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>mixed</span> : Mixed<div class='sub-desc'><p>The value which should be checked and executed in case of a function type.</p>\n\n</div></li><li><span class='pre'>context</span> : Object<div class='sub-desc'><p>Context in which the function should be executed.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Mixed</span><div class='sub-desc'><p>The result of the function call in case the first argument is a function\nor the first argument as is otherwise.</p>\n\n</div></li></ul></div></div></div><div id='method-log' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Echo.Control' rel='Echo.Control' class='defined-in docClass'>Echo.Control</a><br/><a href='source/control.html#Echo-Control-method-log' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Echo.Control-method-log' class='name expandable'>log</a>( <span class='pre'>data</span> )</div><div class='description'><div class='short'>Function to log info/error message to the browser console in a unified format ...</div><div class='long'><p>Function to log info/error message to the browser console in a unified format</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>data</span> : Object<div class='sub-desc'><p>Defines the properties of the message which should be displayed.</p>\n\n<ul><li><span class='pre'>message</span> : String<div class='sub-desc'><p>Text description of the message which should be logged.</p>\n\n</div></li><li><span class='pre'>component</span> : String (optional)<div class='sub-desc'><p>Name of the component which produced the message.</p>\n\n<p>Defaults to: <code>&quot;Echo SDK&quot;</code></p></div></li><li><span class='pre'>type</span> : String (optional)<div class='sub-desc'><p>Type/severity of the message.</p>\n\n<p>Defaults to: <code>&quot;info&quot;</code></p></div></li><li><span class='pre'>args</span> : String (optional)<div class='sub-desc'><p>Extra arguments to log.</p>\n\n</div></li></ul></div></li></ul></div></div></div><div id='method-more' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Echo.StreamServer.Controls.FacePile'>Echo.StreamServer.Controls.FacePile</span><br/><a href='source/facepile.html#Echo-StreamServer-Controls-FacePile-method-more' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Echo.StreamServer.Controls.FacePile-method-more' class='name expandable'>more</a>( <span class='pre'>element</span> )<strong class='echo_renderer signature' >renderer</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>element</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-parentRenderer' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Echo.Control' rel='Echo.Control' class='defined-in docClass'>Echo.Control</a><br/><a href='source/control.html#Echo-Control-method-parentRenderer' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Echo.Control-method-parentRenderer' class='name expandable'>parentRenderer</a>( <span class='pre'>name, args</span> ) : HTMLElement</div><div class='description'><div class='short'>Method to call parent renderer function, which was extended using\nEcho.Control.extendRenderer function. ...</div><div class='long'><p>Method to call parent renderer function, which was extended using\nEcho.Control.extendRenderer function.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String<div class='sub-desc'><p>Renderer name.</p>\n</div></li><li><span class='pre'>args</span> : Object<div class='sub-desc'><p>Arguments to be proxied to the parent renderer from the overriden one.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>HTMLElement</span><div class='sub-desc'><p>Result of parent renderer function call.</p>\n</div></li></ul></div></div></div><div id='method-ready' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Echo.Control' rel='Echo.Control' class='defined-in docClass'>Echo.Control</a><br/><a href='source/control.html#Echo-Control-method-ready' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Echo.Control-method-ready' class='name expandable'>ready</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Should be called in the \"init\" function of the control manifest to\nshow that the control was initialized. ...</div><div class='long'><p>Should be called in the \"init\" function of the control manifest to\nshow that the control was initialized. Basically it is the indicator\nof the control to be ready and operable.</p>\n</div></div></div><div id='method-refresh' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Echo.Control' rel='Echo.Control' class='defined-in docClass'>Echo.Control</a><br/><a href='source/control.html#Echo-Control-method-refresh' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Echo.Control-method-refresh' class='name expandable'>refresh</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Basic method to reinitialize control. ...</div><div class='long'><p>Basic method to reinitialize control.</p>\n\n<p>Function can be overriden by class descendants implying specific logic.</p>\n</div></div></div><div id='method-remove' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Echo.Control' rel='Echo.Control' class='defined-in docClass'>Echo.Control</a><br/><a href='source/control.html#Echo-Control-method-remove' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Echo.Control-method-remove' class='name expandable'>remove</a>( <span class='pre'>key</span> ) : Boolean</div><div class='description'><div class='short'>Method to remove specific object field. ...</div><div class='long'><p>Method to remove specific object field.</p>\n\n<p>This function allows to remove the value associated with the given key.\nIf the key contains a complex structure (such as objects or arrays),\nit will be removed as well.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>key</span> : String<div class='sub-desc'><p>Specifies the key which should be removed from the object.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>The boolean value which indicates that value by key exists and removed.</p>\n</div></li></ul></div></div></div><div id='method-render' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Echo.Control' rel='Echo.Control' class='defined-in docClass'>Echo.Control</a><br/><a href='source/control.html#Echo-Control-method-render' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Echo.Control-method-render' class='name expandable'>render</a>( <span class='pre'></span> ) : Object</div><div class='description'><div class='short'>Rendering function which prepares the DOM representation of the control\nand appends it to the control target element. ...</div><div class='long'><p>Rendering function which prepares the DOM representation of the control\nand appends it to the control target element. This function also used to\nre-render the control.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>Control DOM representation</p>\n</div></li></ul></div></div></div><div id='method-set' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Echo.Control' rel='Echo.Control' class='defined-in docClass'>Echo.Control</a><br/><a href='source/control.html#Echo-Control-method-set' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Echo.Control-method-set' class='name expandable'>set</a>( <span class='pre'>key, value</span> )</div><div class='description'><div class='short'>Setter method to define specific object value. ...</div><div class='long'><p>Setter method to define specific object value.</p>\n\n<p>This function allows to define the value for the corresponding object field.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>key</span> : String<div class='sub-desc'><p>Defines the key where the given data should be stored.</p>\n</div></li><li><span class='pre'>value</span> : Mixed<div class='sub-desc'><p>The corresponding value which should be defined for the key.</p>\n</div></li></ul></div></div></div><div id='method-showError' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Echo.Control' rel='Echo.Control' class='defined-in docClass'>Echo.Control</a><br/><a href='source/control.html#Echo-Control-method-showError' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Echo.Control-method-showError' class='name expandable'>showError</a>( <span class='pre'>data, options</span> )</div><div class='description'><div class='short'>Renders error message in the target container. ...</div><div class='long'><p>Renders error message in the target container.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>data</span> : Object<div class='sub-desc'><p>Object containing error message information.</p>\n</div></li><li><span class='pre'>options</span> : Object<div class='sub-desc'><p>Object containing display options.</p>\n</div></li></ul></div></div></div><div id='method-showMessage' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Echo.Control' rel='Echo.Control' class='defined-in docClass'>Echo.Control</a><br/><a href='source/control.html#Echo-Control-method-showMessage' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Echo.Control-method-showMessage' class='name expandable'>showMessage</a>( <span class='pre'>data</span> )</div><div class='description'><div class='short'>Renders info message in the target container. ...</div><div class='long'><p>Renders info message in the target container.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>data</span> : Object<div class='sub-desc'><p>Object containing info message information.</p>\n<ul><li><span class='pre'>layout</span> : String (optional)<div class='sub-desc'><p>Specifies the type of message layout. Can be set to \"compact\" or \"full\".</p>\n</div></li><li><span class='pre'>target</span> : HTMLElement (optional)<div class='sub-desc'><p>Specifies the target container.</p>\n</div></li></ul></div></li></ul></div></div></div><div id='method-substitute' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Echo.Control' rel='Echo.Control' class='defined-in docClass'>Echo.Control</a><br/><a href='source/control.html#Echo-Control-method-substitute' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Echo.Control-method-substitute' class='name expandable'>substitute</a>( <span class='pre'>args</span> ) : String</div><div class='description'><div class='short'>Templater function which compiles given template using the provided data. ...</div><div class='long'><p>Templater function which compiles given template using the provided data.</p>\n\n<p>Function can be used widely for html templates processing or any other action\nrequiring string interspersion.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>args</span> : Object<div class='sub-desc'><p>Specifies substitution process and parameters.</p>\n\n<ul><li><span class='pre'>template</span> : String<div class='sub-desc'><p>Template containing placeholders used for data interspersion.</p>\n\n</div></li><li><span class='pre'>data</span> : Object (optional)<div class='sub-desc'><p>Data used in the template compilation.</p>\n\n</div></li><li><span class='pre'>strict</span> : Boolean (optional)<div class='sub-desc'><p>Specifies whether the template should be replaced with the corresponding value,\npreserving replacement value type.</p>\n\n</div></li><li><span class='pre'>instructions</span> : Object (optional)<div class='sub-desc'><p>Object containing the list of extra instructions to be applied during template compilation.</p>\n\n</div></li></ul></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>Compiled string value.</p>\n\n</div></li></ul></div></div></div><div id='method-suffixText' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Echo.StreamServer.Controls.FacePile'>Echo.StreamServer.Controls.FacePile</span><br/><a href='source/facepile.html#Echo-StreamServer-Controls-FacePile-method-suffixText' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Echo.StreamServer.Controls.FacePile-method-suffixText' class='name expandable'>suffixText</a>( <span class='pre'>element</span> )<strong class='echo_renderer signature' >renderer</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>element</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-template' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Echo.Control' rel='Echo.Control' class='defined-in docClass'>Echo.Control</a><br/><a href='source/control.html#Echo-Control-method-template' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Echo.Control-method-template' class='name expandable'>template</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Method to get the control template during rendering procedure. ...</div><div class='long'><p>Method to get the control template during rendering procedure. Can be overriden.</p>\n</div></div></div></div></div></div></div>"
});