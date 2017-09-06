// Pages
import Index from '@/pages/Index'
import Home from '@/pages/Home'
import Sport from '@/pages/Sport'
import Travel from '@/pages/Travel'
// import Detail from '@/pages/Detail'
import User from '@/pages/User'
// import Login from '@/pages/Login'
// import Regist from '@/pages/Regist'
// import UserInfo from '@/pages/UserInfo'
// import Set from '@/pages/Set'
// import Post from '@/pages/Post'
// import UserMsg from '@/pages/UserMsg'
// import Navbar from '@/pages/Navbar'
import NotFound from '@/pages/NotFound'

// demos
import DemoHome from './demos/Home'
import DemoButton from './demos/Button'
import DemoInput from './demos/Input'
import DemoSearch from './demos/Search'
import DemoSelect from './demos/Select'
import DemoRadio from './demos/Radio'
import DemoCheckbox from './demos/Checkbox'
import DemoToggle from './demos/Toggle'
import DemoRangeSlider from './demos/RangeSlider'
import DemoBadge from './demos/Badge'
import DemoDialog from './demos/Dialog'
import DemoIcon from './demos/Icon'
import DemoFabs from './demos/FABs'
import DemoToast from './demos/Toast'
import DemoLoading from './demos/Loading'

// Layout
import DemoToolbar from './demos/Toolbar'
import DemoHeader from './demos/Header'
import DemoList from './demos/List'
import DemoCells from './demos/Cells'
import DemoGrid from './demos/Grid'
import DemoTabs from './demos/Tabs'
import DemoButtonBar from './demos/ButtonBar'

// Advanced
import DemoSwiper from './demos/Swiper'
import DemoSwiperDefault from './demos/SwiperDefault'
import DemoSwiperVertical from './demos/SwiperVertical'
import DemoScroll from './demos/Scroll'
import DemoVueScroller from './demos/VueScroller'
import DemoCascade from './demos/Cascade'
import DemoAccordion from './demos/Accordion'
import DemoPicker from './demos/Picker'
import DemoPopup from './demos/Popup'
import DemoPopover from './demos/Popover'
import DemoActionSheet from './demos/ActionSheet'
import DemoTabbar from './demos/Tabbar'
import DemoTabbarHome from './demos/tabbar/Home'
import DemoTabbarDiscount from './demos/tabbar/Discount'
import DemoTabbarCart from './demos/tabbar/Cart'
import DemoTabbarUser from './demos/tabbar/User'
import DemoPageFromTabbar from './demos/tabbar/PageFromTabbar'
import DemoTabbarWithoutRoutes from './demos/TabbarWithoutRoutes'
import DemoModal from './demos/Modal'

const routes = [
    {
        path: '/',
        name: 'index',
        component: Index,
        redirect: '/home',
        children: [
            { path: 'home', name:'home', component: Home },
            { path: 'sport', name:'sport', component: Sport },
            { path: 'cart', name:'setting', component: Travel },
            { path: 'user', name:'user', component: User },
            { path: 'demo', name:'demo', component: DemoHome }
        ]
    },
    { path: '/demo/button', component: DemoButton },
    { path: '/demo/input', component: DemoInput },
    { path: '/demo/search', component: DemoSearch },
    { path: '/demo/select', component: DemoSelect },
    { path: '/demo/radio', component: DemoRadio },
    { path: '/demo/checkbox', component: DemoCheckbox },
    { path: '/demo/toggle', component: DemoToggle },
    { path: '/demo/range', component: DemoRangeSlider },
    { path: '/demo/badge', component: DemoBadge },
    { path: '/demo/fabs', component: DemoFabs },
    { path: '/demo/icons', component: DemoIcon },
    { path: '/demo/dialog', component: DemoDialog },
    { path: '/demo/toast', component: DemoToast },
    { path: '/demo/loading', component: DemoLoading },


    // Layout
    { path: '/demo/toolbar', component: DemoToolbar },
    { path: '/demo/header', component: DemoHeader },
    { path: '/demo/list', component: DemoList },
    { path: '/demo/cells', component: DemoCells },
    { path: '/demo/grid', component: DemoGrid },
    { path: '/demo/tabs', component: DemoTabs },
    { path: '/demo/buttonbar', component: DemoButtonBar },

    // Advanced
    { path: '/demo/swiper', component: DemoSwiper },
    { path: '/demo/swiper/default', component: DemoSwiperDefault },
    { path: '/demo/swiper/vertical', component: DemoSwiperVertical },
    { path: '/demo/scroll', component: DemoScroll },
    { path: '/demo/scroller', component: DemoVueScroller },
    { path: '/demo/cascade', component: DemoCascade },
    { path: '/demo/accordion', component: DemoAccordion },
    { path: '/demo/popup', component: DemoPopup },
    { path: '/demo/popover', component: DemoPopover },
    { path: '/demo/actionSheet', component: DemoActionSheet },
    {
        path: '/demo/tabbar',
        component: DemoTabbar,
        children: [
            { path: 'home', component: DemoTabbarHome },
            { path: 'discount', component: DemoTabbarDiscount },
            { path: 'cart', component: DemoTabbarCart },
            { path: 'user', component: DemoTabbarUser }
        ]
    },
    { path: '/demo/pageFromTabbar',component: DemoPageFromTabbar },
    { path: '/demo/tabbarWithoutRoutes', component: DemoTabbarWithoutRoutes },
    { path: '/demo/modal', component: DemoModal },
    { path: '/demo/picker', component: DemoPicker },

    {path: '*', component: NotFound}

]

export default  routes
