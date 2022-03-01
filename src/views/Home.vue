<template>
  <Topnav />
  <div class="banner">
    <h1 class="topic">J-UI</h1>
    <h2>一个简单好用的ui框架</h2>
    <p class="actions">
      <a class="github">Github</a>
      <router-link class="start" to="/Doc">开始使用</router-link>
    </p>
  </div>
</template>

<script lang="ts">
import Topnav from "../components/Topnav.vue";
export default {
  name: "Home.vue",
  components: {
    Topnav
  }
};
</script>

<style lang="scss" scoped>
.banner {
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: linear-gradient(#f3f9ff, #ecf6ff);
  > .topic {
    font-size: 3.5em;
    margin-bottom: 30px;
  }
  > .actions {
    margin-top: 30px;
    padding: 8px 0;
    a {
      margin: 0 8px;
      background: #fff;
      display: inline-block;
      border-radius: 32px;
      padding: 8px 24px;
    }
    .start {
      background: #348dfe;
      color: #fff;
    }
    .github {
      color: #0170fe;
      border: 1px solid #0170fe;
    }
  }
}
</style>
