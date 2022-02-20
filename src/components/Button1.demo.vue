<demo>不同类型</demo>
<template>
  <Button @click="onClick">默认</Button>
  <Button theme="button">我是按钮</Button>
  <Button theme="link">我是链接</Button>
  <Button theme="text">我是文本</Button>
</template>
<script lang="ts">
import Button from "../lib/Button.vue";
export default {
  components: { Button },
  setup() {
    const onClick = () => {
      alert("点击事件");
    };
    return {
      onClick
    };
  }
};
</script>