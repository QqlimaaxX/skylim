<template>
  <div id="app">
    <!-- <header-comp></header-comp> -->
    <router-view></router-view>
    <router-view name="navbar"></router-view>
    <!-- <router-view name="login"></router-view> -->
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
  position: absolute;
  width: 100%;
}
</style>
