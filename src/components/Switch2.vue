<demo>支持disabled</demo>
<template>
  <Switch v-model:value="value" disabled />
</template>

<script>
import Switch from "../lib/Switch.vue";
import { ref } from "vue";
export default {
  name: "SwitchDemo",
  components: { Switch },
  setup() {
    const value = ref(false);
    return { value };
  }
};
</script>