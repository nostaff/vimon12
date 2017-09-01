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

export function extend (target, source) {
    for (let key in source) {
        target[key] = source[key]
    }

    return target
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


export function assert(actual, reason) {
    if (!actual) {
        var message = 'IONIC ASSERT: ' + reason;
        console.error(message);
        debugger; // tslint:disable-line
        throw new Error(message);
    }
}

export function createElement (marker, parent, setFirstChild = false) {
    let el = document.createElement('div')
    el.setAttribute(marker, '')

    let container = parent || document.body;
    if (setFirstChild)
        container.insertBefore(el, container.firstChild)
    else
        container.appendChild(el)

    return el
}

export function removeElement (marker) {
    let el = document.querySelector(marker) || document.querySelector(`[${marker}]`)
    if (el)
        document.body.removeChild(el)
}

export function timeout (duration = 0) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, duration);
    })
}

export function uuid() {
    return Math.random().toString(36).substr(3, 8)
}
