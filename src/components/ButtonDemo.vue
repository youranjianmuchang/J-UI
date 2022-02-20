<template>
  <h1>Button 组件</h1>
  <Demo :component="Button1" />
  <Demo :component="Button2" />
  <Demo :component="Button3" />
  <Demo :component="Button4" />
  <Demo :component="Button5" />
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
  components: { Demo, Button1, Button2, Button3, Button4, Button5 },
  setup() {
    const onClick = () => {
      console.log("hi");
    };
    return { onClick, Button1, Button2, Button3, Button4, Button5 };
  }
};
</script>

<style scoped>
</style>
