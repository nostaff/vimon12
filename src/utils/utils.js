const createElement = (marker, tag) => {
    let el = document.createElement(tag || 'div')
    el.setAttribute(marker, '')
    document.body.appendChild(el)
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

const nextDirection = (direction) => {
    let el = document.querySelector('#app')
    if (el) el.setAttribute('transition-direction', direction);
}

const setTitle = (title) => {
    let el = document.querySelector('[von-navbar="active"] > .title > span')
    if (el) el.textContent = title
}

export default {
    createElement: createElement,
    removeElement: removeElement,
    timeout: timeout
}
