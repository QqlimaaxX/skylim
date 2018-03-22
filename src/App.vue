<template>
  <div id="app">
    <header-comp></header-comp>
    <router-view name="navbar"></router-view>
    <router-view name="sidebar"></router-view>
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderComp from './HeaderComp.vue';

export default {
  name: 'App',
  components:{HeaderComp}
}
</script>