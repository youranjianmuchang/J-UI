<template>
  <h1>Button 组件</h1>
  <Demo :component="Button1" />
  <Demo :component="Button2" />
  <Demo :component="Button3" />
  <Demo :component="Button4" />
  <Demo :component="Button5" />
  <div class="bottom-nav">
    <router-link to="/Doc/Switch">Switch 组件 >></router-link>
  </div>
</template>

<script>
import Demo from "../components/Demo.vue";
import Button1 from "../components/Button1.demo.vue";
import Button2 from "../components/Button2.demo.vue";
import Button3 from "../components/Button3.demo.vue";
import Button4 from "../components/Button4.demo.vue";
import Button5 from "../components/Button5.demo.vue";
export default {
  name: "ButtonDemo",
  components: { Demo },
  setup() {
    const onClick = () => {
      console.log("hi");
    };
    return { onClick, Button1, Button2, Button3, Button4, Button5 };
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
