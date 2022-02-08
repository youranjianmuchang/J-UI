import { createRouter, createWebHashHistory } from "vue-router";
import Home from "./views/Home.vue";
import Doc from "./views/Doc.vue";
import Switch from "./components/SwitchDemo.vue";
import Button from "./components/ButtonDemo.vue";
import Dialog from "./components/DialogDemo.vue";
import Tabs from "./components/TabsDemo.vue";
import DocDefault from "./components/DocDefault.vue";
import { h } from 'vue';
import Markdown from './components/Markdown.vue';
const md = filename => h(Markdown, { path: `../markdown/${filename}.md`, key: filename })

const history = createWebHashHistory();
export const router = createRouter({
    history: history,
    routes: [
        { path: '/', component: Home },
        {
            path: '/Doc', component: Doc, children: [
                { path: '', component: DocDefault },
                { path: 'Intro', component: md('intro') },
                { path: 'GetStart', component: md('get-start') },
                { path: 'Install', component: md('install') },
                { path: 'Switch', component: Switch },
                { path: 'Button', component: Button },
                { path: 'Dialog', component: Dialog },
                { path: 'Tabs', component: Tabs },
            ]
        },

    ]
});
