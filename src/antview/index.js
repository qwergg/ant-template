import Vue from 'vue';
import {
    Button,
    Avatar,
    Layout,
    Icon,
    Menu,
    message,
    notification,
    Modal,
    Form,
    FormModel,
    Input,
    Checkbox,
    Card,
    Table,
    Dropdown,
    Pagination,
    Select,
    Switch,
    Badge
} from 'ant-design-vue';

const regComponents = {
    Button: Button,
    Avatar: Avatar,
    Layout: Layout,
    Icon: Icon,
    Menu: Menu,
    Modal: Modal,
    Form: Form,
    Input: Input,
    Checkbox: Checkbox,
    Card: Card,
    Table: Table,
    Dropdown: Dropdown,
    Pagination: Pagination,
    Select: Select,
    Switch: Switch,
    FormModel: FormModel,
    Badge: Badge
}

Vue.prototype.$message = message;
Vue.prototype.$notification = notification;
Vue.prototype.$info = Modal.info;
Vue.prototype.$success = Modal.success;
Vue.prototype.$error = Modal.error;
Vue.prototype.$warning = Modal.warning;
Vue.prototype.$confirm = Modal.confirm;
Vue.prototype.$destroyAll = Modal.destroyAll;

//Vue.use(Button)
// 循环注册组件
Object.keys(regComponents).forEach(key => {
    Vue.use(regComponents[key])
})