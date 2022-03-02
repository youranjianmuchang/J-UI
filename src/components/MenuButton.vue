<template>
<ol class="menu-icon" :class="{showMenu: menuVisible}">
    <li class="menu-icon-item" @click="buttonClikc">
        <router-link to="/Doc/Switch">
        <div class="icon-label">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-switch"></use>
            </svg>
        </div>
        <div class="icon-name">switch</div>
        </router-link>
    </li>
    <li class="menu-icon-item" @click="buttonClikc">
        <router-link to="/Doc/Button">
        <div class="icon-label">
        <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-button"></use>
        </svg>
        </div>
        <div class="icon-name">button</div>
        </router-link>
    </li>
    
    <li class="menu-icon-item" @click="buttonClikc">
        <router-link to="/Doc/Dialog">
        <div class="icon-label">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-dialog"></use>
            </svg>
        </div>
        <div class="icon-name">dialog</div>
        </router-link>
    </li>
    <li class="menu-icon-item" @click="buttonClikc">
        <router-link to="/Doc/Tabs">
        <div class="icon-label">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-tabs"></use>
            </svg>
        </div>
        <div class="icon-name">tabs</div>
        </router-link>
    </li>
    <li class="menu-icon-item close" @click="buttonClikc">
        <div class="icon-label">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-close"></use>
            </svg>
        </div>
        <div class="icon-name">close</div>
    </li>
    <li class="menu-icon-item more" @click="buttonClikc">
        <div class="icon-label">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-more"></use>
            </svg>
        </div>
    </li>
</ol>
</template>
<script lang="ts">
import { ref } from "vue";

export default {
  name: "MenuButton",
  setup() {
    const menuVisible = ref(false)
    const buttonClikc = () => {
        menuVisible.value = !menuVisible.value
    }
    return {
        menuVisible,
        buttonClikc
    };
  }
};
</script>
<style lang="scss" scoped>
.menu-icon {
  position: fixed;
  right: 7%;
  bottom: 10%;
  height: 50px;
  width: 50px;
  transition: width .5s;
  justify-content: center;
  border-radius: 50%;
  display: flex;
  background: #fff;
  border-radius: 30px;
  box-shadow: rgb(200 200 200) 0px 2px 8px;
  .menu-icon-item{
    display: none;
    flex-wrap: wrap;
    width: 30px;
    margin: 3px 20px;
    &.more{
        display: flex;
        align-items: center;
        cursor: pointer;
    }
  }
  .icon-label {
    line-height: 0;
  }
  .icon-name {
    font-size: 12px;
    width: 100%;
    text-align: center;
  }
  a:hover{
    border-bottom: 0px;
  }
  &.showMenu{
    width: initial;
    border-radius: 10px;
    .menu-icon-item {
        display: flex;
        &.more {
            display: none;
        }
    }
  }
//   .close{
//       position: relative;
//      &::after{
//          content: '';
//          display: block;
//          position: absolute;
//          height: 48px;
//          width: 1px;
//          background-color: #1890ff;
//          top: 50%;
//          left: -20px;
//          transform: translateY(-50%)
//      }
//   }
}

</style>