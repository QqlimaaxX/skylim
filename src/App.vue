<template>
  <div id="app">
    <header-comp></header-comp>
    <router-view></router-view>
    <router-view name="navbar"></router-view>
    <router-view name="sidebar"></router-view>
  </div>
</template>

<script>
import HeaderComp from './HeaderComp.vue';

export default {
  name: 'App',
  components:{HeaderComp}
}
</script>

<style scoped>
#app {
  position: fixed;
  width: 100%;
}
</style>
