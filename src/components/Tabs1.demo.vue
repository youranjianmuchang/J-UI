<demo>示例</demo>
<template>
  <Tabs v-model:selected="selected">
    <Tab title="标题1">内容1</Tab>
    <Tab title="标题2">内容2</Tab>
  </Tabs>
</template>

<script lang="ts">
import Tabs from "../lib/Tabs.vue";
import Tab from "../lib/Tab.vue";
import { ref } from "vue";
export default {
  components: { Tabs, Tab },
  setup() {
    const selected = ref("标题1");
    return {
      selected
    };
  }
};
</script>