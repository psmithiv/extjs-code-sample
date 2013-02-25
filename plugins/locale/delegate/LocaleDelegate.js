Ext.define('plugins.locale.delegate.LocaleDelegate', function() {
    var _success = null;
    var _failure = null;
    var _scope = null;

    function ajaxSuccess(response) {
        response = Ext.JSON.decode(response.responseText);
        _success.call(_scope, response);
    }

    function ajaxFailure() {
        //TODO
    }

    return {
        requires: [
            'Ext.Ajax',
            'ExtJSCodeSample.model.dto.UserDTO'
        ],

        constructor: function(success, failure, scope) {
            _success = success;
            _failure = failure;
            _scope = scope;
        },

        loadPropertiesFile: function(url) {
            if(!_success || !_scope)
                return;

            var req = Ext.Ajax.request({
                url: url,
                method: "post",

                success: ajaxSuccess,
                failure: ajaxFailure
            })
        }
    }
});