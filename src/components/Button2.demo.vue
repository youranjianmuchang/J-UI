<demo>不同大小</demo>
<template>
  <Button>默认</Button>
  <Button size="big">我是大按钮</Button>
  <Button size="small">我是小按钮</Button>
</template>
<script lang="ts">
import Button from "../lib/Button.vue";
export default {
  components: { Button }
};
</script>