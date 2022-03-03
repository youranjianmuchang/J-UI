<template>
<ol class="menu-icon" :class="{showMenu: menuVisible}">
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
    <li class="menu-icon-item more" @click="buttonClikc">
        <div class="icon-label">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-add"></use>
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
  transition: width .5s linear;
  position: fixed;
  right: 16px;
  bottom: 10%;
  height: 50px;
  width: 50px;
  justify-content: center;
  border-radius: 10px;
  display: flex;
  background: #fff;
  box-shadow: rgb(200 200 200) 0px 2px 8px;
  overflow: hidden;
  .menu-icon-item{
    display: none;
    flex-wrap: wrap;
    width: 30px;
    margin: 3px 20px;
    &.more{
        display: flex;
        align-items: center;
        cursor: pointer;
        transform: rotateZ(0deg);
        transition: transform .5s linear;
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
  &.showMenu{
    width: 350px;
    border-radius: 10px;
    .menu-icon-item {
        display: flex;
        &.more {
            transform: rotateZ(135deg);
        }
    }
  }
}

</style>
