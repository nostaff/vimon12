import core from './core.js'

import './components/nav/nav.js'

// import './components/backdrop'
import './components/popup/index.js'
import './components/action-sheet/index.js'
import './components/alert/index.js'
import './components/loading/index.js'
import './components/toast/index.js'
import './components/modal/index.js'
import './components/picker/index.js'
import './components/popover/index.js'

// Basic
import Avatar from './components/avatar'
import Label from './components/label'
import Note from './components/note'
import Icon from './components/icon'
import Button from './components/button'
import Chip from './components/chip/index.vue'
import {Input, Textarea} from './components/input'
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

// Advanced
import {Swiper, SwiperItem} from './components/swiper'
import Scroll from './components/scroll'

var ENV = process.env.NODE_ENV
if (ENV && ENV !== 'production' && ENV !== 'test' && typeof console !== 'undefined' && console.warn && typeof window !== 'undefined') {
    console.warn('You are using a whole package of vimo, ' + 'please read docs https://vm-component.github.io/vimo/ to reduce app bundle size.')
}

// 通过script脚本使用, 资源全部打包, 不推荐
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
    install(Vue, options = {}) {
        if (this.installed) return
        core(Vue, options)

        // Vue.prototype.$actionSheet = ActionSheet
        // Vue.prototype.$loading = Loading
        // Vue.prototype.$alert = Alert
        // Vue.prototype.$toast = Toast
        // Vue.prototype.$modal = Modal
        // Vue.prototype.$indicator = Indicator
        // Vue.prototype.$chooseCity = ChooseCity
        // Vue.prototype.$cityPicker = CityPicker
        // Vue.prototype.$picker = Picker
        // Vue.prototype.$popover = Popover
        // Vue.prototype.$previewImage = PreviewImage

        // Basic
        Vue.component(Avatar.name, Avatar)
        Vue.component(Label.name, Label)
        Vue.component(Note.name, Note)
        Vue.component(Icon.name, Icon)
        Vue.component(Button.name, Button)
        Vue.component(Chip.name, Chip)
        Vue.component(Input.name, Input)
        Vue.component(Textarea.name, Textarea)
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


        Vue.component('swiper', Swiper)
        Vue.component('swiper-item', SwiperItem)
        Vue.component('scroll', Scroll)

        this.installed = true
    }
}
