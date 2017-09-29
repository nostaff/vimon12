
import './fonts/ionicons.scss'

import Vue from 'vue'

import VueEvents from 'vue-events'
Vue.use(VueEvents)

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
import Button from './components/button'
import Chip from './components/chip/index.vue'
import Input from './components/input'
import Searchbar from './components/searchbar'
import {Radio, RadioGroup} from './components/radio'
import {Checkbox, CheckboxGroup} from './components/checkbox'
import {Select, Option} from './components/select'
import Toggle from './components/toggle'
import Thumbnail from './components/thumbnail'
import Range from './components/range'
import Badge from './components/badge'
import FABs from './components/fab'
import Datetime from './components/datetime'
import Address from './components/address'
import Spinner from './components/spinner'

Vue.component(Avatar.name, Avatar)
Vue.component(Label.name, Label)
Vue.component(Note.name, Note)
Vue.component(Icon.name, Icon)
Vue.component(Button.name, Button)
Vue.component(Chip.name, Chip)
Vue.component(Input.name, Input)
Vue.component(Searchbar.name, Searchbar)
Vue.component(RadioGroup.name, RadioGroup)
Vue.component(Radio.name, Radio)
Vue.component(Checkbox.name, Checkbox)
Vue.component(CheckboxGroup.name, CheckboxGroup)
Vue.component(Select.name, Select)
Vue.component(Option.name, Option)
Vue.component(Thumbnail.name, Thumbnail)
Vue.component(Toggle.name, Toggle)
Vue.component(Range.name, Range)
Vue.component(Badge.name, Badge)
Vue.component(FABs.name, FABs)
Vue.component(Datetime.name, Datetime)
Vue.component(Address.name, Address)
Vue.component(Spinner.name, Spinner)

// Layout
import {Page, Header, Footer} from './components/page'
import {Toolbar, Navbar, BarTitle, BarButtons} from './components/toolbar'
import Content from './components/content'
import {List, ListHeader} from './components/list'
import {Item, ItemGroup, ItemOptions, ItemSliding, ItemDivider} from './components/item'
import Refresher from './components/refresher'
import InfiniteScroll from './components/infinite-scroll'
import {Card, CardHeader, CardTitle, CardContent} from './components/card'

import {Grid, Row, Col} from './components/grid'
import {Tabs, Tab} from './components/tabs'
import {Segment, SegmentButton} from './components/segment'

Vue.component(Page.name, Page)
Vue.component(Header.name, Header)
Vue.component(Footer.name, Footer)
Vue.component(Content.name, Content)
Vue.component(Toolbar.name, Toolbar)
Vue.component(Navbar.name, Navbar)
Vue.component(BarTitle.name, BarTitle)
Vue.component(BarButtons.name, BarButtons)
Vue.component(Grid.name, Grid)
Vue.component(Row.name, Row)
Vue.component(Col.name, Col)
Vue.component(Card.name, Card)
Vue.component(CardHeader.name, CardHeader)
Vue.component(CardTitle.name, CardTitle)
Vue.component(CardContent.name, CardContent)

Vue.component(List.name, List)
Vue.component(ListHeader.name, ListHeader)
Vue.component(Item.name, Item)
Vue.component(ItemGroup.name, ItemGroup)
Vue.component(ItemOptions.name, ItemOptions)
Vue.component(ItemSliding.name, ItemSliding)
Vue.component(ItemDivider.name, ItemDivider)
Vue.component(Refresher.name, Refresher)
Vue.component(InfiniteScroll.name, InfiniteScroll)

Vue.component(Tabs.name, Tabs)
Vue.component(Tab.name, Tab)
Vue.component(Segment.name, Segment)
Vue.component(SegmentButton.name, SegmentButton)

// Advanced
import {Swiper, SwiperItem} from './components/swiper'
import Scroll from './components/scroll'
// import Cascade from './components/cascade'
// import { Accordion, AccordionItem } from './components/accordion'
Vue.component('swiper', Swiper)
Vue.component('swiper-item', SwiperItem)
Vue.component('scroll', Scroll)

// // Modal
// import Modal from './services/modal/Modal.vue'
// Vue.component('modal', Modal)

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
    Grid, Row, Col,
    Tabs,
    Tab,

    // Advanced
    Swiper,
    SwiperItem,
    Scroll,
    // Cascade,

    // Accordion,
    // AccordionItem,

    // Modal,

    app: Plugin
}
