/**
 *
 * 返回工具方法库
 * @export
 */
export default {
    extend: function(obj) {
        var args = Array.prototype.slice.call(arguments, 1);
        for (var i = 0; i < args.length; i++) {
            var source = args[i];
            if (source) {
                for (var prop in source) {
                    obj[prop] = source[prop];
                }
            }
        }
        return obj;
    },
    nextUid: function() {
        return 'ion' + (nextId++);
    },
    /**
     * Only call a function once in the given interval.
     *
     * @param func {Function} the function to call
     * @param wait {int} how long to wait before/after to allow function calls
     * @param immediate {boolean} whether to call immediately or after the wait interval
     */
    debounce: function(func, wait, immediate) {
        var timeout, args, context, timestamp, result;
        return function() {
            context = this;
            args = arguments;
            timestamp = new Date();
            var later = function() {
                var last = (new Date()) - timestamp;
                if (last < wait) {
                    timeout = setTimeout(later, wait - last);
                } else {
                    timeout = null;
                    if (!immediate) result = func.apply(context, args);
                }
            };
            var callNow = immediate && !timeout;
            if (!timeout) {
                timeout = setTimeout(later, wait);
            }
            if (callNow) result = func.apply(context, args);
            return result;
        };
    },

    /**
     * Throttle the given fun, only allowing it to be
     * called at most every `wait` ms.
     */
    throttle: function(func, wait, options) {
        var context, args, result;
        var timeout = null;
        var previous = 0;
        options || (options = {});
        var later = function() {
            previous = options.leading === false ? 0 : Date.now();
            timeout = null;
            result = func.apply(context, args);
        };
        return function() {
            var now = Date.now();
            if (!previous && options.leading === false) previous = now;
            var remaining = wait - (now - previous);
            context = this;
            args = arguments;
            if (remaining <= 0) {
                clearTimeout(timeout);
                timeout = null;
                previous = now;
                result = func.apply(context, args);
            } else if (!timeout && options.trailing !== false) {
                timeout = setTimeout(later, remaining);
            }
            return result;
        };
    },
    // Borrowed from Backbone.js's extend
    // Helper function to correctly set up the prototype chain, for subclasses.
    // Similar to `goog.inherits`, but uses a hash of prototype properties and
    // class properties to be extended.
    inherit: function(protoProps, staticProps) {
        var parent = this;
        var child;

        // The constructor function for the new subclass is either defined by you
        // (the "constructor" property in your `extend` definition), or defaulted
        // by us to simply call the parent's constructor.
        if (protoProps && protoProps.hasOwnProperty('constructor')) {
            child = protoProps.constructor;
        } else {
            child = function() {
                return parent.apply(this, arguments);
            };
        }

        // Add static properties to the constructor function, if supplied.
        ionic.extend(child, parent, staticProps);

        // Set the prototype chain to inherit from `parent`, without calling
        // `parent`'s constructor function.
        var Surrogate = function() {
            this.constructor = child;
        };
        Surrogate.prototype = parent.prototype;
        child.prototype = new Surrogate();

        // Add prototype properties (instance properties) to the subclass,
        // if supplied.
        if (protoProps) ionic.extend(child.prototype, protoProps);

        // Set a convenience property in case the parent's prototype is needed
        // later.
        child.__super__ = parent.prototype;

        return child;
    },

    hasClass: function(element, className) {
        if (! element || element.classList)
            return false;

        return element.classList.contains(className);
    },

    addClass: function(element, className) {
        if (typeof className === 'undefined') {
            return;
        }
        var classes = className.split(' ');
        for (var i = 0; i < classes.length; i++) {
            element.classList.add(classes[i]);
        }
    },

    /**
     *
     * 移除class
     * @param {any} el
     * @param {any} cls
     */
    removeClass: function(element, className) {
        if (! element || element.classList)
            return;

        var classes = className.split(' ');
        for (var i = 0; i < classes.length; i++) {
            element.classList.remove(classes[i]);
        }
    },

    toggleClass: function(element, className) {
        var classes = className.split(' ');
        for (var i = 0; i < classes.length; i++) {
            element.classList.toggle(classes[i]);
        }
    },
    isUndefined: function(value) {
        return value === undefined;
    },
    isString: function(val) {
        return typeof val === 'string';
    },
    isNumber: function(val) {
        return typeof val === 'number';
    },
    isFunction: function(val) {
        return typeof val === 'function';
    },
    isDefined: function(val) {
        return typeof val !== 'undefined';
    },
    isPresent: function(val) {
        return val !== undefined && val !== null;
    },
    isBlank: function(val) {
        return val === undefined || val === null;
    },
    isObject: function(val) {
        return typeof val === 'object';
    },
    isArray: function(val) {
        return Array.isArray(val);
    },
    isTrueProperty: function(val) {
        if (typeof val === 'string') {
            val = val.toLowerCase().trim();
            return (val === 'true' || val === 'on' || val === '');
        }
        return !!val;
    },
    booleanify: function(val) {
        if (val === "true" || val == 1) {
            return true;
        }

        if (val === "false" || val == 0 || !val) {
            return false;
        }
        return val;
    },
    theme: function() {
        // theme-ios for ios, theme-md for android & other
        if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
            return 'ios'
        } else if (/Windows Phone/.test(navigator.userAgent)) {
            return 'wp'
        } else {
            return 'md'
        }
    }

};