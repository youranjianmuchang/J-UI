<template>
  <h1>Dialog 组件</h1>
  <Demo :component="Dialog1" />
  <Demo :component="Dialog2" />
  <div class="bottom-nav">
    <router-link to="/Doc/Tabs">Tabs 组件 >></router-link>
  </div>
</template>

<script>
import Demo from "../components/Demo.vue";
import Dialog1 from "../components/Dialog1.demo.vue";
import Dialog2 from "../components/Dialog2.demo.vue";
export default {
  name: "DialogDemo",
  components: { Demo },
  setup() {
    return { Dialog1, Dialog2 };
  }
};
</script>

<style lang="scss" scoped>
  .bottom-nav{
    color: #1890ff;
    text-align: right;
    margin-bottom: 9px;
    a {
      padding-bottom: 1px;
      border-bottom: 1px solid;
    }
  }
</style>
