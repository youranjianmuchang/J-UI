<template>
    <div>switch 文档</div>
    <Switch v-model:value="value" />
</template>

<script>
    import Switch from "../lib/Switch.vue";
    import {ref} from 'vue'
    export default {
        name: "SwitchDemo",
        components:{Switch},
        setup(){
            const value = ref(false);
            return {value}
        }
    }
</script>

<style scoped>

</style>
