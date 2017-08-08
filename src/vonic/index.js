// import './scss/vonic.scss'

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
DEFAULT_CONFIG.theme = util.theme();
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
import Searchbar from './components/searchbar'
import Radio from './components/radio'
import Checkbox from './components/checkbox'
import Select from './components/select'
import Toggle from './components/toggle'
import Thumbnail from './components/thumbnail'
import VonRange from './components/range'
import Badge from './components/badge'
import FABs from './components/fab'

Vue.component(Avatar.name, Avatar)
Vue.component(Label.name, Label)
Vue.component(Note.name, Note)
Vue.component(Icon.name, Icon)
Vue.component(Button.name, Button)
Vue.component(Input.name, Input)
Vue.component(Searchbar.name, Searchbar)
Vue.component(Radio.name, Radio)
Vue.component(Checkbox.name, Checkbox)
Vue.component(Select.name, Select)
Vue.component(Thumbnail.name, Thumbnail)
Vue.component(Toggle.name, Toggle)
Vue.component('von-range', VonRange)
Vue.component(Badge.name, Badge)
Vue.component(FABs.name, FABs)

// Layout
import {Page, Header, Footer} from './components/page'
import {Toolbar, Navbar, BarTitle, BarButtons} from './components/toolbar'
import Content from './components/content'
import {List, ListHeader} from './components/list'
import {Item, ItemGroup, ItemOptions, ItemSliding, ItemDivider} from './components/item'

import {Grid, Row, Col} from './components/grid'
import Cells from './components/cells'
import {Tabs, Tab, Tabbar} from './components/tabs'
import ButtonBar from './components/buttonbar'

Vue.component(Page.name, Page)
Vue.component(Header.name, Header)
Vue.component(Footer.name, Footer)
Vue.component(Toolbar.name, Toolbar)
Vue.component(Navbar.name, Navbar)
Vue.component(BarTitle.name, BarTitle)
Vue.component(BarButtons.name, BarButtons)

Vue.component(Content.name, Content)
Vue.component(List.name, List)
Vue.component(ListHeader.name, ListHeader)
Vue.component(Item.name, Item)
Vue.component(ItemGroup.name, ItemGroup)
Vue.component(ItemOptions.name, ItemOptions)
Vue.component(ItemSliding.name, ItemSliding)
Vue.component(ItemDivider.name, ItemDivider)

Vue.component(Grid.name, Grid)
Vue.component(Row.name, Row)
Vue.component(Col.name, Col)

Vue.component(Cells.name, Cells)
Vue.component(Tabs.name, Tabs)
Vue.component(Tab.name, Tab)
Vue.component(Tabbar.name, Tabbar)
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
    Label,
    Icon,
    Input,
    Searchbar,
    Radio,
    Checkbox,
    // Header,
    Badge,

    // Layout
    List,
    ListHeader,
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
