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

// Components
import DemoButton from './demos/Button'
import DemoChip from './demos/Chip'
import DemoInput from './demos/Input'
import DemoTextarea from './demos/TextArea'
import DemoSearch from './demos/Search'
import DemoSelect from './demos/Select'
import DemoRadio from './demos/Radio'
import DemoCheckbox from './demos/Checkbox'
import DemoToggle from './demos/Toggle'
import DemoRange from './demos/Range'
import DemoBadge from './demos/Badge'
import DemoIcon from './demos/Icon'
import DemoFabs from './demos/FABs'
import DemoSpinner from './demos/Spinner'

// Layout
import DemoToolbar from './demos/Toolbar'
import DemoPage from './demos/Page'
import DemoGrid from './demos/Grid'
import DemoTabs from './demos/Tabs'
import DemoSegment from './demos/Segment'
import DemoMenu from './demos/Menu'

// List
import DemoList from './demos/List'
import DemoRefresher from './demos/Refresher'
import DemoInfiniteScroll from './demos/InfiniteScroll'

// Advanced
import DemoDialog from './demos/Dialog'
import DemoToast from './demos/Toast'
import DemoSwiper from './demos/Swiper'
import DemoSwiperDefault from './demos/SwiperDefault'
import DemoSwiperVertical from './demos/SwiperVertical'
import DemoPicker from './demos/Picker'
import DemoPopup from './demos/Popup'
import DemoPopover from './demos/Popover'
import DemoActionSheet from './demos/ActionSheet'
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

    // Components
    { path: '/demo/button', component: DemoButton },
    { path: '/demo/chip', component: DemoChip },
    { path: '/demo/badge', component: DemoBadge },
    { path: '/demo/fabs', component: DemoFabs },
    { path: '/demo/icons', component: DemoIcon },
    { path: '/demo/spinner', component: DemoSpinner },

    // Form
    { path: '/demo/input', component: DemoInput },
    { path: '/demo/textarea', component: DemoTextarea },
    { path: '/demo/search', component: DemoSearch },
    { path: '/demo/select', component: DemoSelect },
    { path: '/demo/radio', component: DemoRadio },
    { path: '/demo/checkbox', component: DemoCheckbox },
    { path: '/demo/toggle', component: DemoToggle },
    { path: '/demo/range', component: DemoRange },

    // Layout
    { path: '/demo/toolbar', component: DemoToolbar },
    { path: '/demo/page', component: DemoPage },
    { path: '/demo/list', component: DemoList },
    { path: '/demo/grid', component: DemoGrid },
    { path: '/demo/tabs', component: DemoTabs },
    { path: '/demo/segment', component: DemoSegment },
    { path: '/demo/menu', component: DemoMenu },

    // Data
    { path: '/demo/refresher', component: DemoRefresher },
    { path: '/demo/infinite-scroll', component: DemoInfiniteScroll },

    // Advanced
    { path: '/demo/dialog', component: DemoDialog },
    { path: '/demo/toast', component: DemoToast },
    { path: '/demo/swiper', component: DemoSwiper },
    { path: '/demo/swiper/default', component: DemoSwiperDefault },
    { path: '/demo/swiper/vertical', component: DemoSwiperVertical },
    { path: '/demo/popup', component: DemoPopup },
    { path: '/demo/popover', component: DemoPopover },
    { path: '/demo/actionSheet', component: DemoActionSheet },
    { path: '/demo/modal', component: DemoModal },
    { path: '/demo/picker', component: DemoPicker },

    { path: '*', component: NotFound }

]

export default  routes
