Ext.define('ExtJSCodeSample.controls.Marquee', function() {
    var task;
    var currentIndex = 0;
    var messages = [];

    return {
        extend: 'Ext.form.Label',
        alias: 'widget.marquee',

        requires: [
            'Ext.util.DelayedTask',
            'Ext.fx.Anim'
        ],

        config: {
            changeInterval: 11000 //11sec
        },

        constructor: function() {
            this.callParent(arguments);

            task = new Ext.util.DelayedTask(this.changeMessage, this);
        },

        /**
         * Method to set label text.
         * If typeof value == 'string: display value
         * If value instanceof Array: rotate displaying values on set interval
         *
         * @param {String|Array} value
         */
        setText: function(value) {
            if(typeof value == 'string') {
                this.callParent([value]);
                return;
            }

            if(value instanceof Array) {
                messages = value;
                this.callParent([messages[0]]);
                task.delay(this.changeInterval);
            }
        },

        /**
         * Method to change marquee text every n milliseconds
         */
        changeMessage: function() {
            new Ext.fx.Anim({
                                target: this,
                                duration: 1000,
                                from: {
                                    opacity: 0
                                },
                                to: {
                                    opacity: 1
                                }
                            });

            currentIndex = currentIndex + 1 == messages.length ? 0 : currentIndex + 1;
            this.setText(messages[currentIndex]);
            task.delay(this.changeInterval);
        }
    }
});