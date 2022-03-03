import { createRouter, createWebHashHistory } from "vue-router";
import Home from "./views/Home.vue";
import Doc from "./views/Doc.vue";
import Switch from "./components/SwitchDemo.vue";
import Button from "./components/ButtonDemo.vue";
import Dialog from "./components/DialogDemo.vue";
import Tabs from "./components/TabsDemo.vue";
import { h } from 'vue';
import Markdown from './components/Markdown.vue';
import intro from './markdown/intro.md'
import getStarted from './markdown/get-started.md'
import install from './markdown/install.md'
const md = string => h(Markdown, { content: string, key: string })

const history = createWebHashHistory();
export const router = createRouter({
    history: history,
    routes: [
        { path: '/', component: Home },
        {
            path: '/Doc', component: Doc, children: [
                { path: '', redirect: '/doc/intro' },
                { path: 'Intro', component: md(intro) },
                { path: 'GetStart', component: md(getStarted) },
                { path: 'Install', component: md(install) },
                { path: 'Switch', component: Switch },
                { path: 'Button', component: Button },
                { path: 'Dialog', component: Dialog },
                { path: 'Tabs', component: Tabs },
            ]
        },

    ]
});
