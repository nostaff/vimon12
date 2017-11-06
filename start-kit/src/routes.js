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

// pages
import DemoHome from './src/pages/Home'

// Components
import DemoButton from './src/pages/Button'
import DemoChip from './src/pages/Chip'
import DemoInput from './src/pages/Input'
import DemoTextarea from './src/pages/TextArea'
import DemoSearch from './src/pages/Search'
import DemoSelect from './src/pages/Select'
import DemoRadio from './src/pages/Radio'
import DemoCheckbox from './src/pages/Checkbox'
import DemoToggle from './src/pages/Toggle'
import DemoRange from './src/pages/Range'
import DemoBadge from './src/pages/Badge'
import DemoIcon from './src/pages/Icon'
import DemoFabs from './src/pages/FABs'
import DemoSpinner from './src/pages/Spinner'

// Layout
import DemoToolbar from './src/pages/Toolbar'
import DemoPage from './src/pages/Page'
import DemoGrid from './src/pages/Grid'
import DemoTabs from './src/pages/Tabs'
import DemoSegment from './src/pages/Segment'
import DemoMenu from './src/pages/Menu'

// List
import DemoList from './src/pages/List'
import DemoRefresher from './src/pages/Refresher'
import DemoInfiniteScroll from './src/pages/InfiniteScroll'

// Advanced
import DemoDialog from './src/pages/Dialog'
import DemoToast from './src/pages/Toast'
import DemoSwiper from './src/pages/Swiper'
import DemoSwiperDefault from './src/pages/SwiperDefault'
import DemoSwiperVertical from './src/pages/SwiperVertical'
import DemoPicker from './src/pages/Picker'
import DemoPopup from './src/pages/Popup'
import DemoPopover from './src/pages/Popover'
import DemoActionSheet from './src/pages/ActionSheet'
import DemoModal from './src/pages/Modal'

const routes = [
    {
        path: '/',
        name: 'index',
        component: DemoHome,
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

    // { path: '*', component: NotFound }

]

export default  routes
