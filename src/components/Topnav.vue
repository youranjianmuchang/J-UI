<template>
  <div class="Topnav">
    <div class="logo">
      <router-link to="/">J-UI</router-link>
    </div>
    <ul class="menu">
      <li>
        <router-link to="/doc">文档</router-link>
      </li>
    </ul>
    <!-- <span class="toggleAside" @click="toggleTop"></span> -->
  </div>
</template>

<script lang="ts">
// import { inject, Ref } from "vue";
export default {
  name: "Topnav",
  setup() {
    // const asideVisible = inject<Ref<boolean>>("visible");
    // const toggleTop = () => {
    //   asideVisible.value = !asideVisible.value;
    // };
    // return { toggleTop };
  }
};
</script>

<style lang="scss" scoped>
.Topnav {
  display: flex;
  padding: 16px 50px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  justify-content: center;
  align-items: center;
  > .logo {
    max-width: 6em;
    margin-right: auto;
    font-weight: bolder;
    font-size: 1.5em;
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin: 0 1em;
      &:last-of-type {
        margin-right: 0;
      }
    }
  }
  > .toggleAside {
    width: 24px;
    height: 24px;
    background: red;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    display: none;
  }
  @media (max-width: 500px) {
    // > .menu {
    //   display: none;
    // }
    // > .logo {
    //   margin: 0 auto;
    // }
    padding: 16px;
    > .toggleAside {
      display: inline-block;
    }
  }
}
</style>
