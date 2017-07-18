import './scss/vonic.scss'

import Vue from 'vue'
import VueScroller from 'vue-scroller'
Vue.use(VueScroller)

// Basic
import VonInput from './components/input/Input'
import Search from './components/input/Search'
import VonRadio from './components/input/Radio'
import VonCheckbox from './components/input/CheckBox'
import VonSelect from './components/input/Select'
import VonToggle from './components/toggle'
import VonRange from './components/range'
import VonHeader from './components/header'
import VonBadge from './components/badge'

Vue.component('von-input', VonInput)
Vue.component('search', Search)
Vue.component('von-radio', VonRadio)
Vue.component('von-checkbox', VonCheckbox)
Vue.component('von-select', VonSelect)
Vue.component('von-toggle', VonToggle)
Vue.component('von-range', VonRange)
Vue.component('von-header', VonHeader)
Vue.component('badge', VonBadge)

// Layout
import List from './components/list/List'
import Item from './components/list/Item'
import Cells from './components/cells'
import Tabs from './components/tabs'
import ButtonBar from './components/buttonbar'

Vue.component('list', List)
Vue.component('item', Item)
Vue.component('cells', Cells)
Vue.component('tabs', Tabs)
Vue.component('button-bar', ButtonBar)

// Advanced
import {Swiper, SwiperItem} from './components/swiper'
import Scroll from './components/scroll'
import Cascade from './components/cascade'
import { Accordion, AccordionItem } from './components/accordion'
import Datepicker from './components/datepicker'
Vue.component('swiper', Swiper)
Vue.component('swiper-item', SwiperItem)
Vue.component('scroll', Scroll)
Vue.component('cascade', Cascade)
Vue.component('accordion', Accordion)
Vue.component('accordion-item', AccordionItem)
Vue.component('datepicker', Datepicker)

// Modal
import Modal from './services/modal/Modal.vue'
Vue.component('modal', Modal)

import Plugin from './plugin'

export default {
    // Basic
    VonInput,
    Search,
    VonRadio,
    VonCheckbox,
    VonHeader,
    VonBadge,

    // Layout
    List,
    Item,
    Cells,
    Tabs,
    ButtonBar,

    // Advanced
    Swiper,
    SwiperItem,
    Scroll,
    Cascade,

    Accordion,
    AccordionItem,

    Modal,

    app: Plugin
}
