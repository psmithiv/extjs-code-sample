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

/**
 * Custom Marquee control to display rotating text
 */
Ext.define('ExtJSCodeSample.controls.Marquee', {
    extend: 'Ext.form.Label',
    alias: 'widget.marquee',

    requires: [
        'Ext.util.DelayedTask',
        'Ext.fx.Anim'
    ],

    /**
     * {int} changeInterval - How fast the display should update
     */
    changeInterval: 11000, //11sec

    /**
     * @private
     * {Ext.util.DelayedTask} task - DelayedTask to execute on each changeInterval
     */
    task: {},

    /**
     * @private
     * {int} currentIndex - Index of item in message array that is currently being displayed
     */
    currentIndex: 0,

    /**
     * @private
     * {Array} messages - Array of messages to display
     */
    messages: [],

    /**
     * Creates new DelayedTask to execute every n milliseconds
     */
    constructor: function() {
        this.callParent(arguments);

        this.task = new Ext.util.DelayedTask(this.changeMessage, this);
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
            this.messages = value;
            this.callParent([this.messages[0]]);
            this.task.delay(this.changeInterval);
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

        this.currentIndex = this.currentIndex + 1 == this.messages.length ? 0 : this.currentIndex + 1;
        this.setText(this.messages[this.currentIndex]);
        this.task.delay(this.changeInterval);
    }
});