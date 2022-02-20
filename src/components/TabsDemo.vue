<template>
  <h1>Tabs 组件</h1>
  <Demo :component="Tabs1" />
</template>

<script lang="ts">
import Tabs1 from "../components/Tabs1.demo.vue";
import Demo from "../components/Demo.vue";
export default {
  name: "TabsDemo",
  components: { Tabs1, Demo },
  setup() {
    return {
      Tabs1
    };
  }
};
</script>

<style scoped>
</style>
