<demo>不同颜色</demo>
<template>
  <Button level="main" size="big">我是主要按钮</Button>
  <Button level="danger" size="small">我是警告按钮</Button>
</template>
<script lang="ts">
import Button from "../lib/Button.vue";
export default {
  components: { Button }
};
</script>