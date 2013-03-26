/*
 Copyright (c) 2013 [ninth avenue media, LLC] (mailto: paul.smith.iv@ninthavenuemedia.com)

 extjs-code-sample is free software: you can redistribute it and/or modify
 it under the terms of the GNU General Public License as published by
 the Free Software Foundation, either version 3 of the License, or
 (at your option) any later version.

 extjs-code-sample is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU General Public License for more details.

 You should have received a copy of the GNU General Public License
 along with extjs-code-sample.  If not, see <http://www.gnu.org/licenses/>.
*/
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