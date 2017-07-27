import './scss/vonic.scss'

import './fonts/ionicons.scss'

import Vue from 'vue'
import VueScroller from 'vue-scroller'
Vue.use(VueScroller)

const DEFAULT_CONFIG = {
    theme: 'ios',
    version: '0.0.1',
    iconMode: ''
};

import util from "./utils/util";
Vue.prototype.$ionic = util.extend(DEFAULT_CONFIG);

// import VueTonch from "./utils/vue-touch";
// Vue.use(VueTonch);

// Basic
import Avatar from './components/avatar'
import Label from './components/label'
import Note from './components/note'
import Icon from './components/icon'
// import { Header, Footer, ToolBar, Title, Buttons } from "./components/header";
import Button from './components/button'
import Input from './components/input'
// import Search from './components/input/Search'
import Radio from './components/radio'
import Checkbox from './components/checkbox'
import Select from './components/select'
import Toggle from './components/toggle'
import Thumbnail from './components/thumbnail'
import VonRange from './components/range'
import VonHeader from './components/header'
import Badge from './components/badge'

Vue.component(Avatar.name, Avatar)
Vue.component(Label.name, Label)
Vue.component(Note.name, Note)
Vue.component(Icon.name, Icon)
Vue.component(Button.name, Button)
Vue.component(Input.name, Input)
// Vue.component('search', Search)
Vue.component('ion-radio', Radio)
Vue.component('ion-checkbox', Checkbox)
Vue.component('von-select', Select)
Vue.component(Thumbnail.name, Thumbnail)
Vue.component('ion-toggle', Toggle)
Vue.component('von-range', VonRange)
Vue.component('von-header', VonHeader)
Vue.component(Badge.name, Badge)

// Layout
import {List, ListHeader} from './components/list'
import {Item, ItemGroup, ItemOptions, ItemSliding, ItemDivider} from './components/item'

import Cells from './components/cells'
import Tabs from './components/tabs'
import ButtonBar from './components/buttonbar'

Vue.component(List.name, List)
Vue.component(ListHeader.name, ListHeader)
Vue.component(Item.name, Item)
Vue.component(ItemGroup.name, ItemGroup)
Vue.component(ItemOptions.name, ItemOptions)
Vue.component(ItemSliding.name, ItemSliding)
Vue.component(ItemDivider.name, ItemDivider)

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
    // Label,
    Icon,
    // Input,
    // Search,
    Radio,
    Checkbox,
    // Header,
    // Badge,

    // Layout
    // List,
    // ListHeader,
    // Item,
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