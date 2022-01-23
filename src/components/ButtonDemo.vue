<template>
    <h2>Button示例</h2>
    <h1>示例1 不同类型</h1>
    <Button class="button" >默认</Button>
    <Button class="button" theme="button" >我是按钮</Button>
    <Button class="button" theme="link" >我是链接</Button>
    <Button class="button" theme="text" >我是文本</Button>
    <h1>示例2 不同大小</h1>
    <Button class="button" >默认</Button>
    <Button class="button" size="big">我是大按钮</Button>
    <Button class="button" size="small">我是小按钮</Button>
    <h1>示例3 不同颜色</h1>
    <Button class="button" >默认</Button>
    <Button level="main" class="button"  size="big">我是主要按钮</Button>
    <Button level="danger" class="button" size="small">我是警告按钮</Button>
    <h1>示例4 禁用</h1>
    <Button disabled class="button" >默认</Button>
    <Button disabled level="main" class="button" size="big">我是禁用按钮</Button>
    <Button disabled level="danger" class="button" size="small">我是禁用按钮</Button>
    <h1>示例5 加载</h1>
    <Button loading class="button" size="big">加载中</Button>

</template>

<script>
    import Button from "../lib/Button.vue";
    export default {
        name: "ButtonDemo",
        components:{Button},
        setup(){
            const onClick = () =>{
                console.log('hi');
            }
            return {onClick}
        }
    }
</script>

<style scoped>

</style>
