<template>
  <div class="layout">
    <Topnav class="nav" />
    <div class="content">
      <aside v-if="asideVisible">
        <h2>文档</h2>
        <ol>
          <li>
            <router-link to="/Doc/Intro">介绍</router-link>
          </li>
          <li>
            <router-link to="/Doc/Install">安装</router-link>
          </li>
          <li>
            <router-link to="/Doc/GetStart">开始使用</router-link>
          </li>
        </ol>
        <h2>组件列表</h2>
        <ol>
          <li>
            <router-link to="/Doc/Switch">Switch 组件</router-link>
          </li>
          <li>
            <router-link to="/Doc/Button">Button 组件</router-link>
          </li>
          <li>
            <router-link to="/Doc/Dialog">Dialog 组件</router-link>
          </li>
          <li>
            <router-link to="/Doc/Tabs">Tabs 组件</router-link>
          </li>
        </ol>
      </aside>
      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import Topnav from "../components/Topnav.vue";
import { inject, Ref } from "vue";

export default {
  name: "Doc.vue",
  components: {
    Topnav
  },
  setup() {
    const asideVisible = inject<Ref<boolean>>("visible");
    return { asideVisible };
  }
};
</script>

<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;

  > .nav {
    flex-shrink: 0;
    background-color: #ffffff;
    box-shadow: 0 2px 8px #f0f1f2;
    position: relative;
  }

  > .content {
    flex-grow: 1;
    padding-top: 20px;
    @media (max-width: 500px) {
      padding-left: 0;
    }
  }
}

.content {
  display: flex;

  > aside {
    flex-shrink: 0;
  }

  > main {
    flex-grow: 1;
    padding: 16px;
  }
}

aside {
  min-width: 150px;
  width: 15%;
  transition: width 0.5s;
  padding: 16px 0;
  top: 0;
  left: 0;
  height: 100%;
  z-index: 1;
  border-right: 1px solid #f0f0f0;
  margin-right: 20px;
  > h2 {
    margin-bottom: 4px;
    padding: 4px 16px;
  }

  > ol {
    > li {
      a {
        padding: 10px 16px;
        display: block;
        text-decoration: none;
        &:hover {
          border-bottom: 0;
        }
      }
      .router-link-active {
        background-color: white;
      }
    }
  }
}

main {
  overflow: auto;
}
</style>
