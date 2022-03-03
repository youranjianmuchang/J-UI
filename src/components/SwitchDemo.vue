<template>
  <h1>Switch 组件</h1>
  <Demo :component="Switch1" />
  <Demo :component="Switch2" />
  <div class="bottom-nav">
    <router-link to="/Doc/Dialog">Dialog 组件 >></router-link>
  </div>
</template>

<script>
import Switch1 from "../components/Switch1.demo.vue";
import Switch2 from "../components/Switch2.demo.vue";
import Demo from "../components/Demo.vue";
export default {
  name: "SwitchDemo",
  components: { Demo },
  setup() {
    return {
      Switch1,
      Switch2
    };
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
