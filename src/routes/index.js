import Vue from 'vue';
import VueRouter from 'vue-router';

//lazy loading
const inner = () => import('../components/inner/inner.vue')
const Home = () => import('../components/Home.vue')

import innerroutes from '../components/inner/innerroutes.js';
import errorroutes from '../components/errors/errorroutes.js';
import sidebar from '../components/sidebar.vue';
import navbar from '../components/navbar.vue';

function isLoggedin(){
	return true;
}

var loginValidator = {
	beforeEnter:(to,from,next)=>{
	      	if(isLoggedin())next();
	      	else next('/');
    }
}

export default new VueRouter({
  routes:[
  {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path:'/app',
      name:'app',
      components:{
          sidebar:sidebar,
          navbar:navbar,
          default:inner
      },
      ...loginValidator,
      children:[...innerroutes]
  },
  ...errorroutes,
],
})