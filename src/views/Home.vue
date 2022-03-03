<template>
  <Topnav />
  <div class="banner">
    <h1 class="topic">
    <svg class="logo">
      <use xlink:href="#icon-J"></use>
    </svg>-UI</h1>
    <h2>一个简单好用的ui框架</h2>
    <p class="actions">
      <a class="github" href="https://github.com/youranjianmuchang/J-UI">Github</a>
      <router-link class="start" to="/Doc/Install">开始使用</router-link>
    </p>
  </div>
  <div class="features">
    <ul>
      <li>
        <svg>
          <use xlink:href="#icon-vue"></use>
        </svg>
        <h3>基于 Vue 3</h3>
        <p>使用了 Vue 3 Composition API</p>
      </li>
      <li>
        <svg>
          <use xlink:href="#icon-ts"></use>
        </svg>
        <h3>基于 TypeScript </h3>
        <p>源代码采用 TypeScript 书写</p>
      </li>
      <li>
        <svg>
          <use xlink:href="#icon-light"></use>
        </svg>
        <h3>代码易读</h3>
        <p>每个组件的源代码都极其简洁</p>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Topnav from "../components/Topnav.vue";
export default {
  name: "Home.vue",
  components: {
    Topnav
  },
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
    .logo{
      width: 50px;
      height: 50px;
      position: relative;
      top: 5px;
    }
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
.features {
  margin: 64px auto;
  padding: 0 50px;
  @media (min-width: 800px) {
    width: 800px;
    >ul {
      >li {
        width: 50%;
      }
    }
  }
  @media (min-width: 1200px) {
    width: 1200px;
    >ul {
      >li {
        width: 33.3333%;
      }
    }
  }
  >ul {
    display: flex;
    flex-wrap: wrap;
    >li {
      margin: 16px 0;
      display: grid;
      justify-content: start;
      align-content: space-between;
      grid-template-areas:
              "icon title"
              "icon text";
      grid-template-columns: 80px auto;
      grid-template-rows: 1fr auto;
      >svg {
        grid-area: icon;
        width: 64px;
        height: 64px;
      }
      >h3 {
        grid-area: title;
        font-size: 28px;
      }
      >p {
        grid-area: text
      }
    }
  }
}
</style>
