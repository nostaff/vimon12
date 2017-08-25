/**
 * Given a min and max, restrict the given number
 * to the range.
 * @param min the minimum
 * @param n the value
 * @param max the maximum
 */
export function clamp(min, n, max) {
    return Math.max(min, Math.min(n, max));
}

export function deepCopy(obj) {
    return JSON.parse(JSON.stringify(obj));
}

export function deepEqual(a, b) {
    if (a === b) {
        return true;
    }
    return JSON.stringify(a) === JSON.stringify(b);
}

export function debounce(fn, wait, immediate) {
    if (immediate === void 0) {
        immediate = false;
    }
    var timeout, args, context, timestamp, result;
    return function () {
        context = this;
        args = arguments;
        timestamp = Date.now();
        var later = function () {
            var last = Date.now() - timestamp;
            if (last < wait) {
                timeout = setTimeout(later, wait - last);
            }
            else {
                timeout = null;
                if (!immediate)
                    result = fn.apply(context, args);
            }
        };
        var callNow = immediate && !timeout;
        if (!timeout) {
            timeout = setTimeout(later, wait);
        }
        if (callNow)
            result = fn.apply(context, args);
        return result;
    };
}
/**
 * @hidden
 * Rewrites an absolute URL so it works across file and http based engines
 */
export function normalizeURL(url) {
    var ionic = window['Ionic'];
    if (ionic && ionic.normalizeURL) {
        return ionic.normalizeURL(url);
    }
    return url;
}
/**
 * Apply default arguments if they don't exist in
 * the first object.
 * @param {any} dest the destination to apply defaults to.
 */
export function defaults(dest) {
    var _args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        _args[_i - 1] = arguments[_i];
    }
    for (var i = arguments.length - 1; i >= 1; i--) {
        var source = arguments[i];
        if (source) {
            for (var key in source) {
                if (source.hasOwnProperty(key) && !dest.hasOwnProperty(key)) {
                    dest[key] = source[key];
                }
            }
        }
    }
    return dest;
}

export function isBoolean(val) {
    return typeof val === 'boolean';
}

export function isString(val) {
    return typeof val === 'string';
}

export function isNumber(val) {
    return typeof val === 'number';
}

export function isFunction(val) {
    return typeof val === 'function';
}

export function isDefined(val) {
    return typeof val !== 'undefined';
}
export function isUndefined(val) {
    return typeof val === 'undefined';
}

export function isPresent(val) {
    return val !== undefined && val !== null;
}

export function isBlank(val) {
    return val === undefined || val === null;
}

export function isObject(val) {
    return typeof val === 'object';
}

export function isArray(val) {
    return Array.isArray(val);
}

export function isPrimitive(val) {
    return isString(val) || isBoolean(val) || (isNumber(val) && !isNaN(val));
}

export function isTrueProperty(val) {
    if (typeof val === 'string') {
        val = val.toLowerCase().trim();
        return (val === 'true' || val === 'on' || val === '');
    }
    return !!val;
}

export function isCheckedProperty(a, b) {
    if (a === undefined || a === null || a === '') {
        return (b === undefined || b === null || b === '');
    }
    else if (a === true || a === 'true') {
        return (b === true || b === 'true');
    }
    else if (a === false || a === 'false') {
        return (b === false || b === 'false');
    }
    else if (a === 0 || a === '0') {
        return (b === 0 || b === '0');
    }
    // not using strict comparison on purpose
    return (a == b); // tslint:disable-line
}
/**
 * Given a side, return if it should be on the right
 * based on the value of dir
 * @param side the side
 * @param isRTL whether the application dir is rtl
 * @param defaultRight whether the default side is right
 */
export function isRightSide(side, isRTL, defaultRight) {
    if (defaultRight === void 0) {
        defaultRight = false;
    }
    switch (side) {
        case 'right':
            return true;
        case 'left':
            return false;
        case 'end':
            return !isRTL;
        case 'start':
            return isRTL;
        default:
            return defaultRight ? !isRTL : isRTL;
    }
}

export function reorderArray(array, indexes) {
    var element = array[indexes.from];
    array.splice(indexes.from, 1);
    array.splice(indexes.to, 0, element);
    return array;
}

export function removeArrayItem(array, item) {
    var index = array.indexOf(item);
    return !!~index && !!array.splice(index, 1);
}


export function assert(actual, reason) {
    if (!actual) {
        var message = 'IONIC ASSERT: ' + reason;
        console.error(message);
        debugger; // tslint:disable-line
        throw new Error(message);
    }
}


export function each (obj, fn) {
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (fn.call(obj[key], key, obj[key]) === false) {
                break
            }
        }
    }
}

export function trimZero (val) {
    val = String(val)
    val = val ? parseFloat(val.replace(/^0+/g, '')) : ''
    val = val || 0
    val = val + ''
    return val
}

export function addZero (val) {
    val = String(val)
    return val.length < 2 ? '0' + val : val
}

export function isLeapYear (year) {
    return year % 100 !== 0 && year % 4 === 0 || year % 400 === 0
}

export function getMaxDay (year, month) {
    year = parseFloat(year)
    month = parseFloat(month)
    if (month === 2) {
        return isLeapYear(year) ? 29 : 28
    }
    return [4, 6, 9, 11].indexOf(month) >= 0 ? 30 : 31
}

export function parseRow (tmpl, value) {
    return tmpl.replace(/\{value\}/g, value)
}

// parse Date String
export function parseDate (format, value) {
    const formatParts = format.split(/[^A-Za-z]+/)
    let valueParts = value.split(/\D+/)
    if (formatParts.length !== valueParts.length) {
        // if it is error date, use current date
        const date = formater(new Date(), format)
        valueParts = date.split(/\D+/)
    }

    let result = {}

    for (let i = 0; i < formatParts.length; i++) {
        if (formatParts[i]) {
            result[formatParts[i]] = valueParts[i]
        }
    }
    return result
}

export function getElement (expr) {
    return (typeof expr === 'string') ? document.querySelector(expr) : expr
}

export function toElement (html) {
    const tempContainer = document.createElement('div')
    tempContainer.innerHTML = html
    return tempContainer.firstElementChild
}

export function removeElement (el) {
    el && el.parentNode.removeChild(el)
}


function formater (date, fmt = 'YYYY-MM-DD HH:mm:ss') {
    var o = {
        'M+': date.getMonth() + 1,
        'D+': date.getDate(),
        'h+': date.getHours() % 12 === 0 ? 12 : date.getHours() % 12,
        'H+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds(),
        'q+': Math.floor((date.getMonth() + 3) / 3),
        'S': date.getMilliseconds()
    }
    var week = {
        '0': '\u65e5',
        '1': '\u4e00',
        '2': '\u4e8c',
        '3': '\u4e09',
        '4': '\u56db',
        '5': '\u4e94',
        '6': '\u516d'
    }
    if (/(Y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
    }
    if (/(E+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, ((RegExp.$1.length > 1) ? (RegExp.$1.length > 2 ? '\u661f\u671f' : '\u5468') : '') + week[date.getDay() + ''])
    }
    for (var k in o) {
        if (new RegExp('(' + k + ')').test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
        }
    }
    return fmt
}