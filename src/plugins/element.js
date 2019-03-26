import Vue from 'vue'
import { Button, Container, Header, Footer, Aside, Main, Menu, MenuItem, Submenu,
    TabPane, Tabs, Table, TableColumn, Tag, Dropdown, DropdownItem, DropdownMenu,
    Select, Option, Form ,FormItem, Pagination, Row, Col, Step, Steps, Message,
    Dialog, Popover, Input, MessageBox , Loading,Tooltip } from 'element-ui'

Vue.use(Button)
Vue.use(Container)
Vue.use(Header)
Vue.use(Footer)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Submenu)
Vue.use(TabPane)
Vue.use(Tabs)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Tag)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Select)
Vue.use(Option)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Pagination)
Vue.use(Row)
Vue.use(Col)
Vue.use(Steps)
Vue.use(Step)
Vue.use(Dialog)
Vue.use(Popover)
Vue.use(Input)
Vue.use(Loading)
Vue.use(Tooltip)

Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$message = Message;