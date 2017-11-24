import Nav from './nav/index.vue'
import App from './app/index.vue'
import {Footer, Header, Page} from './page/index.vue'
import Content from './content/index.vue'
// import Nav from './navigation/index.vue'
// import Navbar from './navbar/index.vue'
import Avatar from './avatar/index.vue'
import Backdrop from './backdrop/index.vue'
import Badge from './badge/index.vue'
import Button from './button/index.vue'
import {Card, CardContent, CardHeader, CardTitle} from './card/index.vue'
import {Checkbox, CheckboxGroup} from './checkbox/index.vue'
import Chip from './chip/index.vue'
import Datetime from './datetime/index.vue'
import Fab from './fab/index.vue'
// import Feedback from './feedback/index.vue'
import {Column, Grid, Row} from './grid/index.vue'
import Icon from './icon/index.vue'
// import Img from './img/index.vue'
import InfiniteScroll from './infinite-scroll/index.vue'
import {Input, Textarea} from './input/index.vue'
import {Item, ItemDivider, ItemGroup, ItemOptions, ItemSliding} from './item/index.vue'
// import ItemCollapse from './item-collapse/index.vue'
// import ItemSliding from './item-sliding/index.vue'
import Label from './label/index.vue'
import {List, ListHeader} from './list/index.vue'
// import Menu from './menu/index.vue'
import Note from './note/index.vue'
// import Noticebar from './noticebar/index.vue'
// import PopSheet from './pop-sheet/index.vue'
import {Radio, RadioGroup} from './radio/index.vue'
import Range from './range/index.vue'
import Refresher from './refresher/index.vue'
import Scroll from './scroll/index.vue'
// import ScrollSegment from './scroll-segment/index.vue'
import Searchbar from './searchbar/index.vue'
import {Segment, SegmentButton} from './segment/index.vue'
import {Option, Select} from './select/index.vue'
// import Separation from './separation/index.vue'
// import Sheet from './sheet/index.vue'
// import SlideBox from './slide-box/index.vue'
// import Slides from './slides/index.vue'
// import SlidesLite from './slides-lite/index.vue'
import Spinner from './spinner/index.vue'
import {Tab, Tabs} from './tabs/index.vue'
import Thumbnail from './thumbnail/index.vue'
import {Buttons, Navbar, Title, Toolbar} from './toolbar/index.vue'
import Toggle from './toggle/index.vue'

// Plugins
import ActionSheet from './action-sheet'
import Alert from './alert'
// import ChooseCity from './choose-city/chose-city'
// import CityPicker from './city-picker'
// import Indicator from './indicator'
import Loading from './loading'
import Modal from './modal'
import Picker from './picker'
import Popover from './popover'
import Popup from './popup'
// import PreviewImage from './components/preview-image'
import Toast from './toast'

// Directives
import Nav from './navigation/navigation.js'

const Components = {
  Nav,
  App,
  Footer,
  Header,
  Content,
  Page,
  // Nav,
  Avatar,
  Backdrop,
  Badge,
  Button,
  Buttons,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Checkbox,
  CheckboxGroup,
  Chip,
  Datetime,
  Fab,
  // Feedback,
  Column,
  Grid,
  Row,
  Icon,
  // Img,
  InfiniteScroll,
  Input,
  Textarea,
  Item,
  ItemDivider,
  ItemGroup,
  // ItemCollapse,
  // ItemSliding,
  Label,
  ListHeader,
  List,
  // Menu,
  Note,
  // Noticebar,
  Navbar,
  // PopSheet,
  Radio,
  RadioGroup,
  Range,
  Refresher,
  // Scroll,
  // ScrollSegment,
  Searchbar,
  Segment,
  Select,
  // Separation,
  // Sheet,
  // SlideBox,
  // Slides,
  // SlidesLite,
  Spinner,
  Tabs,
  Thumbnail,
  Title,
  Toolbar,
  Toggle
};

// Plugins
const Plugins = {
  ActionSheet,
  Alert,
  // ChooseCity,
  // CityPicker,
  // Indicator,
  Loading,
  Modal,
  Picker,
  Popover,
  Popup,
  // PreviewImage,
  Toast
};

// Directives
const Directives = {
  Nav
};

export { Components, Plugins, Directives }
