Ext.data.JsonP.ExtJSCodeSample_delegate_mock_SessionDelegate({"tagname":"class","files":[{"filename":"SessionDelegate.js","href":"SessionDelegate.html#ExtJSCodeSample-delegate-mock-SessionDelegate"}],"aliases":{},"alternateClassNames":[],"members":[{"name":"failure","tagname":"property","owner":"ExtJSCodeSample.delegate.mock.SessionDelegate","id":"property-failure","meta":{"private":true}},{"name":"scope","tagname":"property","owner":"ExtJSCodeSample.delegate.mock.SessionDelegate","id":"property-scope","meta":{"private":true}},{"name":"success","tagname":"property","owner":"ExtJSCodeSample.delegate.mock.SessionDelegate","id":"property-success","meta":{"private":true}},{"name":"constructor","tagname":"method","owner":"ExtJSCodeSample.delegate.mock.SessionDelegate","id":"method-constructor","meta":{}},{"name":"login","tagname":"method","owner":"ExtJSCodeSample.delegate.mock.SessionDelegate","id":"method-login","meta":{}}],"extends":"Ext.Base","name":"ExtJSCodeSample.delegate.mock.SessionDelegate","mixins":[],"requires":["Ext.Ajax","ExtJSCodeSample.model.dto.UserDTO"],"uses":[],"code_type":"ext_define","id":"class-ExtJSCodeSample.delegate.mock.SessionDelegate","component":false,"superclasses":["Ext.Base"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.Base<div class='subclass '><strong>ExtJSCodeSample.delegate.mock.SessionDelegate</strong></div></div><h4>Requires</h4><div class='dependency'>Ext.Ajax</div><div class='dependency'><a href='#!/api/ExtJSCodeSample.model.dto.UserDTO' rel='ExtJSCodeSample.model.dto.UserDTO' class='docClass'>ExtJSCodeSample.model.dto.UserDTO</a></div><h4>Files</h4><div class='dependency'><a href='source/SessionDelegate.html#ExtJSCodeSample-delegate-mock-SessionDelegate' target='_blank'>SessionDelegate.js</a></div></pre><div class='doc-contents'><p>Mock delegate for authenticating user with the server</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-failure' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ExtJSCodeSample.delegate.mock.SessionDelegate'>ExtJSCodeSample.delegate.mock.SessionDelegate</span><br/><a href='source/SessionDelegate.html#ExtJSCodeSample-delegate-mock-SessionDelegate-property-failure' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ExtJSCodeSample.delegate.mock.SessionDelegate-property-failure' class='name not-expandable'>failure</a><span> : Object</span><span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'><p>{Function} failure - Method to call on failed login</p>\n</div><div class='long'><p>{Function} failure - Method to call on failed login</p>\n</div></div></div><div id='property-scope' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ExtJSCodeSample.delegate.mock.SessionDelegate'>ExtJSCodeSample.delegate.mock.SessionDelegate</span><br/><a href='source/SessionDelegate.html#ExtJSCodeSample-delegate-mock-SessionDelegate-property-scope' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ExtJSCodeSample.delegate.mock.SessionDelegate-property-scope' class='name not-expandable'>scope</a><span> : Object</span><span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'><p>{Object} scope - Scope to execute success/failure methods within</p>\n</div><div class='long'><p>{Object} scope - Scope to execute success/failure methods within</p>\n</div></div></div><div id='property-success' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ExtJSCodeSample.delegate.mock.SessionDelegate'>ExtJSCodeSample.delegate.mock.SessionDelegate</span><br/><a href='source/SessionDelegate.html#ExtJSCodeSample-delegate-mock-SessionDelegate-property-success' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ExtJSCodeSample.delegate.mock.SessionDelegate-property-success' class='name not-expandable'>success</a><span> : Object</span><span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'><p>{Function} success - Method to call on successful login</p>\n</div><div class='long'><p>{Function} success - Method to call on successful login</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ExtJSCodeSample.delegate.mock.SessionDelegate'>ExtJSCodeSample.delegate.mock.SessionDelegate</span><br/><a href='source/SessionDelegate.html#ExtJSCodeSample-delegate-mock-SessionDelegate-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/ExtJSCodeSample.delegate.mock.SessionDelegate-method-constructor' class='name expandable'>ExtJSCodeSample.delegate.mock.SessionDelegate</a>( <span class='pre'>success, failure, scope</span> ) : <a href=\"#!/api/ExtJSCodeSample.delegate.mock.SessionDelegate\" rel=\"ExtJSCodeSample.delegate.mock.SessionDelegate\" class=\"docClass\">ExtJSCodeSample.delegate.mock.SessionDelegate</a><span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>success</span> : Function<div class='sub-desc'><ul>\n<li>Function to call on successful Ajax call</li>\n</ul>\n\n</div></li><li><span class='pre'>failure</span> : Function<div class='sub-desc'><ul>\n<li>Function to call on failed Ajax call</li>\n</ul>\n\n</div></li><li><span class='pre'>scope</span> : Object<div class='sub-desc'><p>-</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/ExtJSCodeSample.delegate.mock.SessionDelegate\" rel=\"ExtJSCodeSample.delegate.mock.SessionDelegate\" class=\"docClass\">ExtJSCodeSample.delegate.mock.SessionDelegate</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-login' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ExtJSCodeSample.delegate.mock.SessionDelegate'>ExtJSCodeSample.delegate.mock.SessionDelegate</span><br/><a href='source/SessionDelegate.html#ExtJSCodeSample-delegate-mock-SessionDelegate-method-login' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ExtJSCodeSample.delegate.mock.SessionDelegate-method-login' class='name expandable'>login</a>( <span class='pre'>username, password</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Login to server ...</div><div class='long'><p>Login to server</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>username</span> : String<div class='sub-desc'><ul>\n<li>User name to use to login</li>\n</ul>\n\n</div></li><li><span class='pre'>password</span> : String<div class='sub-desc'><ul>\n<li>Password to use to login</li>\n</ul>\n\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});