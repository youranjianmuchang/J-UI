<template>
  <h1>Dialog 组件</h1>
  <Demo :component="Dialog1" />
  <Demo :component="Dialog2" />
</template>

<script>
import Demo from "../components/Demo.vue";
import Dialog1 from "../components/Dialog1.demo.vue";
import Dialog2 from "../components/Dialog2.demo.vue";
export default {
  name: "DialogDemo",
  components: { Dialog1, Demo, Dialog2 },
  setup() {
    return { Dialog1, Dialog2 };
  }
};
</script>

<style scoped>
</style>
