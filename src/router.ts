import { createRouter, createWebHashHistory } from "vue-router";
import Home from "./views/Home.vue";
import Doc from "./views/Doc.vue";
import Switch from "./components/SwitchDemo.vue";
import Button from "./components/ButtonDemo.vue";
import Dialog from "./components/DialogDemo.vue";
import Tabs from "./components/TabsDemo.vue";
import DocDefault from "./components/DocDefault.vue";
import Intro from './views/Intro.vue';
import Install from './views/Install.vue';
import GetStart from './views/GetStart.vue';

const history = createWebHashHistory();
export const router = createRouter({
    history: history,
    routes: [
        { path: '/', component: Home },
        {
            path: '/Doc', component: Doc, children: [
                { path: '', component: DocDefault },
                { path: 'Intro', component: Intro },
                { path: 'GetStart', component: GetStart },
                { path: 'Install', component: Install },
                { path: 'Switch', component: Switch },
                { path: 'Button', component: Button },
                { path: 'Dialog', component: Dialog },
                { path: 'Tabs', component: Tabs },
            ]
        },

    ]
});
