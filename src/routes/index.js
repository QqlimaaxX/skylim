import Vue from 'vue';
import VueRouter from 'vue-router';

//lazy loading
const inner = () => import('../components/inner/inner.vue')
const fnf = () => import('../components/errors/fnf.vue')
const Home = () => import('../components/Home.vue')

import innerroutes from '../components/inner/innerroutes.js';
import outerroutes from '../components/outer/outerroutes.js';
import errorroutes from '../components/errors/errorroutes.js';
import navbar from '../components/navbar.vue';
import login from '../components/outer/login.vue'

// function isLoggedin(){
// 	return true;
// }

// var loginValidator = {
// 	// beforeEnter:(to,from,next)=>{
// 	//       	if(isLoggedin())next();
// 	//       	else next('/');
//     // }
// }

export default [
	...outerroutes,
  	{
    	path:'/app/*',
    	name:'app',
    	components:{
      		navbar:navbar,
      		default:inner
    	},
		children:[...innerroutes],
		meta:{
            reqAuth:true
		}
	},
	...errorroutes,
	
]