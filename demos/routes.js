// Pages
// import Index from '@/pages/Index'
// import Home from '@/pages/Home'
// import Sport from '@/pages/Sport'
// import Travel from '@/pages/Travel'
// import Detail from '@/pages/Detail'
// import User from '@/pages/User'
// import Login from '@/pages/Login'
// import Regist from '@/pages/Regist'
// import UserInfo from '@/pages/UserInfo'
// import Set from '@/pages/Set'
// import Post from '@/pages/Post'
// import UserMsg from '@/pages/UserMsg'
// import Navbar from '@/pages/Navbar'
// import NotFound from '@/pages/NotFound'

// src
import DemoHome from './src/Home'

// Components
import DemoButton from './src/Button'
import DemoChip from './src/Chip'
import DemoInput from './src/Input'
import DemoTextarea from './src/TextArea'
import DemoSearch from './src/Search'
import DemoSelect from './src/Select'
import DemoRadio from './src/Radio'
import DemoCheckbox from './src/Checkbox'
import DemoToggle from './src/Toggle'
import DemoRange from './src/Range'
import DemoBadge from './src/Badge'
import DemoIcon from './src/Icon'
import DemoFabs from './src/FABs'
import DemoSpinner from './src/Spinner'

// Layout
import DemoToolbar from './src/Toolbar'
import DemoPage from './src/Page'
import DemoGrid from './src/Grid'
import DemoTabs from './src/Tabs'
import DemoSegment from './src/Segment'
import DemoMenu from './src/Menu'

// List
import DemoList from './src/List'
import DemoRefresher from './src/Refresher'
import DemoInfiniteScroll from './src/InfiniteScroll'

// Advanced
import DemoDialog from './src/Dialog'
import DemoToast from './src/Toast'
import DemoSwiper from './src/Swiper'
import DemoSwiperDefault from './src/SwiperDefault'
import DemoSwiperVertical from './src/SwiperVertical'
import DemoPicker from './src/Picker'
import DemoPopup from './src/Popup'
import DemoPopover from './src/Popover'
import DemoActionSheet from './src/ActionSheet'
import DemoModal from './src/Modal'

const routes = [
    {
        path: '/',
        name: 'index',
        component: Index,
        redirect: '/home',
        children: [
            // { path: 'home', name:'home', component: Home },
            // { path: 'sport', name:'sport', component: Sport },
            // { path: 'cart', name:'setting', component: Travel },
            // { path: 'user', name:'user', component: User },
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
