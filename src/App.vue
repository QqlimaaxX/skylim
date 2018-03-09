<template>
  <div id="app">
    <header-comp></header-comp>
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