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
import DemoDatepicker from './demos/DatePicker'
import DemoPopup from './demos/Popup'
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
    { path: '/demo/basic/button', component: DemoButton },
    { path: '/demo/basic/input', component: DemoInput },
    { path: '/demo/basic/search', component: DemoSearch },
    { path: '/demo/basic/select', component: DemoSelect },
    { path: '/demo/basic/radio', component: DemoRadio },
    { path: '/demo/basic/checkbox', component: DemoCheckbox },
    { path: '/demo/basic/toggle', component: DemoToggle },
    { path: '/demo/basic/range', component: DemoRangeSlider },
    { path: '/demo/basic/badge', component: DemoBadge },
    { path: '/demo/basic/fabs', component: DemoFabs },
    { path: '/demo/basic/icons', component: DemoIcon },
    { path: '/demo/basic/dialog', component: DemoDialog },


    // Layout
    { path: '/demo/layout/toolbar', component: DemoToolbar },
    { path: '/demo/layout/header', component: DemoHeader },
    { path: '/demo/layout/list', component: DemoList },
    { path: '/demo/layout/cells', component: DemoCells },
    { path: '/demo/layout/grid', component: DemoGrid },
    { path: '/demo/layout/tabs', component: DemoTabs },
    { path: '/demo/layout/buttonbar', component: DemoButtonBar },

    // Advanced
    { path: '/demo/advanced/swiper', component: DemoSwiper },
    { path: '/demo/advanced/swiper/default', component: DemoSwiperDefault },
    { path: '/demo/advanced/swiper/vertical', component: DemoSwiperVertical },
    { path: '/demo/advanced/scroll', component: DemoScroll },
    { path: '/demo/advanced/scroller', component: DemoVueScroller },
    { path: '/demo/advanced/cascade', component: DemoCascade },
    { path: '/demo/advanced/accordion', component: DemoAccordion },
    { path: '/demo/advanced/popup', component: DemoPopup },
    { path: '/demo/advanced/actionSheet', component: DemoActionSheet },
    {
        path: '/demo/advanced/tabbar',
        component: DemoTabbar,
        children: [
            { path: 'home', component: DemoTabbarHome },
            { path: 'discount', component: DemoTabbarDiscount },
            { path: 'cart', component: DemoTabbarCart },
            { path: 'user', component: DemoTabbarUser }
        ]
    },
    { path: '/demo/pageFromTabbar',component: DemoPageFromTabbar },
    { path: '/demo/advanced/tabbarWithoutRoutes', component: DemoTabbarWithoutRoutes },
    { path: '/demo/advanced/modal', component: DemoModal },
    { path: '/demo/advanced/datepicker', component: DemoDatepicker },

]

export default  routes
