<template>
    <h1>示例1</h1>
    <Button @click="toggle">直接引用弹窗组件</Button>
    <Dialog v-model:visible="visible">
        <template v-slot:header>
            <span>弹窗标题111</span>
        </template>
        <template v-slot:content>
            <div>标题111</div>
            <div>标题2</div>
        </template>
    </Dialog>
    <h1>示例2</h1>
    <Button @click="showDialog">通过函数的形式调用弹窗</Button>
</template>

<script>
    import Dialog from '../lib/Dialog.vue'
    import Button from '../lib/Button.vue'
    import { openDialog } from '../lib/openDialog'
    import { ref } from 'vue'
    export default {
        name: "DialogDemo",
        components: {Dialog, Button},
        setup() {
            const visible = ref(false);
            const toggle = () => {
                visible.value = !visible.value
            }
            const showDialog = () => {
                openDialog({
                    header: '标题111',
                    content: '你好',
                    ok: ()=>{
                        console.log('ok')
                    },
                    cancel: ()=>{
                        console.log('cancel')
                    },
                    closeOnClickOverlay: false
                })
            }
            return { visible, toggle, showDialog }
        }
    }
</script>

<style scoped>

</style>
