

const createElement = (marker, parent, setFirstChild = false) => {
    let el = document.createElement('div')
    el.setAttribute(marker, '')

    let container = parent || document.body;
    if (setFirstChild)
        container.insertBefore(el, container.firstChild)
    else
        container.appendChild(el)
}

const removeElement = (marker) => {
    let el = document.querySelector(marker) || document.querySelector(`[${marker}]`)
    if (el)
        document.body.removeChild(el)
}

const timeout = (duration = 0) => {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, duration);
    })
}

module.exports = {
    createElement: createElement,
    removeElement: removeElement,
    timeout: timeout
}
