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