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
            <router-link to="/Doc/Button">Button 组件</router-link>
          </li>
          <li>
            <router-link to="/Doc/Switch">Switch 组件</router-link>
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
        <MenuButton v-if="!asideVisible" />
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import Topnav from "../components/Topnav.vue";
import MenuButton from "../components/MenuButton.vue";
import { openDialog } from "../lib/openDialog";
// import { inject, Ref } from "vue";
import { ref } from "vue"
export default {
  name: "Doc.vue",
  components: {
    Topnav,
    MenuButton
  },
  setup() {
    const pageWidth = document.documentElement.clientWidth;
    if (pageWidth <= 500 ) {
      const isLogined =localStorage.getItem('logined')
      if (!isLogined) {
        const showDialog = () => {
          openDialog({
            header: "提示",
            content: "为了有更好的阅读体验，建议在电脑上查看",
            ok: () => {
              localStorage.setItem('logined', "true")
            },
            okName: '不再提示',
            cancelName: '确定'
          });
        };
        showDialog()
      }
    }
    // const asideVisible = inject<Ref<boolean>>("visible");
    const asideVisible = ref(false)
    const judge = () => {
      const pageWidth = document.documentElement.clientWidth;
      const isPC = pageWidth <= 500 ? false : true;
      asideVisible.value = isPC
    }
    judge();
    window.onresize=function(){
      judge();
    }
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
  min-width: 170px;
  width: 15%;
  padding: 16px 0;
  top: 0;
  left: 0;
  height: 100%;
  z-index: 1;
  border-right: 1px solid #f0f0f0;
  margin-right: 20px;
  > h2 {
    padding-left: 50px;
    margin: 15px 0;
    &:first-of-type {
      margin-top: 0;
    }
  }

  > ol {
    > li {
      padding: 5px 0;
      a {
        display: block;
        text-decoration: none;
        padding: 10px 0 10px 50px;
        &.router-link-active {
          background-color: #e6f7ff;
          color: #1890ff;
          border-right: 2px solid #1890ff;
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
