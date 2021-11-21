<template>
  <div>
    导航栏 |
    <router-link to="/switch">switch</router-link>|
    <router-link to="/button">button</router-link>
  </div>
  <router-view />
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App"
};
</script>
