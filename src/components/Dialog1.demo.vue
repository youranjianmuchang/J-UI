<demo>通过引用弹窗组件</demo>
<template>
  <Button @click="toggle">点击弹出弹窗</Button>
  <Dialog v-model:visible="visible" :ok="ok" :cancel="cancel">
    <template v-slot:header>
      <span>标题</span>
    </template>
    <template v-slot:content>
      <div>内容</div>
    </template>
  </Dialog>
</template>
<script lang="ts">
import Dialog from "../lib/Dialog.vue";
import Button from "../lib/Button.vue";
import { ref } from "vue";
export default {
  name: "DialogDemo",
  components: { Dialog, Button },
  setup() {
    const ok = () => {
      console.log("ok");
    };
    const cancel = () => {
      console.log("cancel");
    };
    const visible = ref(false);
    const toggle = () => {
      visible.value = !visible.value;
    };

    return { visible, toggle, ok, cancel };
  }
};
</script>