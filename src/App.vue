<template>
  <router-view/>
</template>

<script lang="ts">
// import {ref,provide} from 'vue'
import {router} from './router'
export default {
  name: 'App',
  setup(){
    // const pageWidth = document.documentElement.clientWidth;
    // const isPC = pageWidth <= 500 ? false : true;
    // const asideVisible = ref(isPC);
    // provide('visible',asideVisible);
    router.afterEach(()=>{
      window.scrollTo(0, 0);
    })
  }
}
</script>
