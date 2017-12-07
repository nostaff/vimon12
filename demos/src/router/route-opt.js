/**
 * 路由配置表
 **/

// pages
import DemoHome from '../pages/Home'

// Components
import DemoButton from '../pages/Button'
import DemoChip from '../pages/Chip'
import DemoInput from '../pages/Input'
import DemoTextarea from '../pages/TextArea'
import DemoSearch from '../pages/Search'
import DemoSelect from '../pages/Select'
import DemoRadio from '../pages/Radio'
import DemoCheckbox from '../pages/Checkbox'
import DemoToggle from '../pages/Toggle'
import DemoRange from '../pages/Range'
import DemoBadge from '../pages/Badge'
import DemoIcon from '../pages/Icon'
import DemoFabs from '../pages/FABs'
import DemoSpinner from '../pages/Spinner'
import DemoDatetime from '../pages/Datetime'

// Layout
import DemoToolbar from '../pages/Toolbar'
import DemoPage from '../pages/Page'
import DemoGrid from '../pages/Grid'
import DemoTabs from '../pages/Tabs'
import DemoSegment from '../pages/Segment'
import DemoMenu from '../pages/Menu'

// List
import DemoList from '../pages/List'
import DemoRefresher from '../pages/Refresher'
import DemoInfiniteScroll from '../pages/InfiniteScroll'

// Advanced
import DemoActionSheet from '../pages/ActionSheet'
import DemoDialog from '../pages/Dialog'
import DemoToast from '../pages/Toast'
import DemoSwiper from '../pages/Swiper'
import DemoSwiperDefault from '../pages/SwiperDefault'
import DemoSwiperVertical from '../pages/SwiperVertical'
import DemoPicker from '../pages/Picker'
import DemoPopup from '../pages/Popup'
import DemoPopover from '../pages/Popover'
import DemoModal from '../pages/Modal'

import NotFound from '../pages/NotFound'

const routes = [
  { path: '/', name: 'demo.index', component: DemoHome },

  // Components
  { path: '/demo/button', name: 'demo.button', component: DemoButton },
  { path: '/demo/chip', component: DemoChip },
  { path: '/demo/badge', component: DemoBadge },
  { path: '/demo/fabs', component: DemoFabs },
  { path: '/demo/icons', component: DemoIcon },
  { path: '/demo/spinner', component: DemoSpinner },
  { path: '/demo/datetime', component: DemoDatetime },

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
  { path: '/demo/action-sheet', component: DemoActionSheet },
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

export default routes
