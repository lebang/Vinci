import Vue from "vue";

import {Button, Layout, Spin, Modal} from "ant-design-vue";
[Button, Layout, Spin, Modal].map(c => Vue.use(c));