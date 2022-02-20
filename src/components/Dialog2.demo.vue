<demo>通过函数形式使用弹窗组件</demo>
<template>
  <Button @click="showDialog">点击弹出弹窗</Button>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";
import { openDialog } from "../lib/openDialog";
import { ref } from "vue";
export default {
  name: "DialogDemo",
  components: { Button },
  setup() {
    const showDialog = () => {
      openDialog({
        header: "标题",
        content: "内容",
        ok: () => {
          console.log("ok");
        },
        cancel: () => {
          console.log("cancel");
        },
        closeOnClickOverlay: false
      });
    };
    return { showDialog };
  }
};
</script>