// Pages
import Index from '@/pages/Index'
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
import NotFound from '@/pages/NotFound'

// demos
import DemoPage from './demos/Page'
import DemoButtons from './demos/Buttons'
import DemoColumn from './demos/Column'
import DemoGrid from './demos/Grid'
import DemoModal from './demos/Modal'
import DemoList from './demos/List'
import DemoContacts from './demos/Contacts'
import DemoForm from './demos/Form'
import DemoIcons from './demos/Icons'
import DemoTab from './demos/Tab'
import DemoScroll from './demos/Scroll'
import DemoPopup from './demos/Popup'
import DemoPopWindow from './demos/PopWindow'
import DemoPreloader from './demos/Preloader'
import DemoActions from './demos/Actions'
import DemoToast from './demos/Toast'
import DemoSearchbar from './demos/Searchbar'
import DemoCalendar from './demos/Calendar'
import DemoResult from './demos/Result'
import DemoSlide from './demos/Slide'
import DemoSidePanel from './demos/SidePanel'
import DemoPopover from './demos/Popover'
import DemoStars from './demos/Stars'
import DemoCircleProgress from './demos/CircleProgress'

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index
  },
  // {
  //   path: '/home',
  //   name: 'home',
  //   component: Home
  // },
  // {
  //   path: '/sport',
  //   name: 'sport',
  //   component: Sport
  // },
  // {
  //   path: '/travel',
  //   component: Travel
  // },
  // {
  //   path: '/sport/:id',
  //   component: Detail
  // },
  // {
  //   path: '/travel/:id',
  //   component: Detail
  // },
  // {
  //   path: '/user',
  //   name: 'user',
  //   component: User
  // },
  // {
  //   path: '/user/login',
  //   component: Login
  // },
  // {
  //   path: '/user/regist',
  //   component: Regist
  // },
  // {
  //   path: '/user/info',
  //   component: UserInfo
  // },
  // {
  //   path: '/user/set',
  //   component: Set
  // },
  // {
  //   path: '/user/post',
  //   component: Post
  // },
  // {
  //   path: '/user/msg',
  //   component: UserMsg
  // },
  // {
  //   path: '/user/navbar',
  //   component: Navbar
  // },
    {
        path: '/demo/page',
        name: 'demo-page',
        component: DemoPage
    },
    {
        path: '/demo/buttons',
        name: 'demo-buttons',
        component: DemoButtons
    },
    {
        path: '/demo/column',
        name: 'demo-column',
        component: DemoColumn
    },
    {
        path: '/demo/grid',
        name: 'demo-grid',
        component: DemoGrid
    },
    {
        path: '/demo/modal',
        name: 'demo-modal',
        component: DemoModal
    },
    {
        path: '/demo/list',
        name: 'demo-list',
        component: DemoList
    },
    {
        path: '/demo/contacts',
        name: 'demo-contacts',
        component: DemoContacts
    },
    {
        path: '/demo/form',
        name: 'demo-form',
        component: DemoForm
    },
    {
        path: '/demo/icons',
        name: 'demo-icons',
        component: DemoIcons
    },
    {
        path: '/demo/tab',
        name: 'demo-tab',
        component: DemoTab
    },
    {
        path: '/demo/scroll',
        name: 'demo-scroll',
        component: DemoScroll
    },
    {
        path: '/demo/popup',
        name: 'demo-popup',
        component: DemoPopup
    },
    {
        path: '/demo/popwindow',
        name: 'demo-popwindow',
        component: DemoPopWindow
    },
    {
        path: '/demo/preloader',
        name: 'demo-preloader',
        component: DemoPreloader
    },
    {
        path: '/demo/toast',
        name: 'demo-toast',
        component: DemoToast
    },
    {
        path: '/demo/actions',
        name: 'demo-actions',
        component: DemoActions
    },
    {
        path: '/demo/searchbar',
        name: 'demo-searchbar',
        component: DemoSearchbar
    },
    {
        path: '/demo/calendar',
        name: 'demo-calendar',
        component: DemoCalendar
    },
    {
        path: '/demo/result',
        name: 'result',
        component: DemoResult
    },
    {
        path: '/demo/slide',
        name: 'slide',
        component: DemoSlide
    },
    {
        path: '/demo/side-panel',
        name: 'side-panel',
        component: DemoSidePanel
    },
    {
        path: '/demo/popover',
        name: 'popover',
        component: DemoPopover
    },
    {
        path: '/demo/stars',
        name: 'stars',
        component: DemoStars
    },
    {
        path: '/demo/circle',
        name: 'circle',
        component: DemoCircleProgress
    },
    {
        path: '*',
        name: 'notfound',
        component: NotFound
    }
]


export default  routes
