<template>
  <h1>Switch 组件</h1>
  <Demo :component="Switch1" />
  <Demo :component="Switch2" />
</template>

<script>
import Switch1 from "../components/Switch1.vue";
import Switch2 from "../components/Switch2.vue";
import Demo from "../components/Demo.vue";
export default {
  name: "SwitchDemo",
  components: { Switch1, Switch2, Demo },
  setup() {
    return {
      Switch1,
      Switch2
    };
  }
};
</script>

<style scoped>
</style>
