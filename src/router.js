import Vue from 'vue';
import VueRouter from 'vue-router';

// importing components for routes

//lazy loading
const Home = () => import('./components/Home.vue')
const feedback = () => import('./components/sidebar/feedback/feedback.vue')

// import Home from '@/components/Home';
// import feedback from './components/sidebar/feedback/feedback.vue';


// importing routes
import profilerts from './components/sidebar/profile/routes.js';
import misbehaviourrts from './components/sidebar/defaulters/routes.js';
import financialDetailsrts from './components/sidebar/financialDetails/routes.js';
import academicrts from './components/sidebar/academic/routes.js';
import fnf from './components/fnf.vue';

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    ...profilerts,
    ...misbehaviourrts,
    ...financialDetailsrts,
    ...academicrts,
    {
    	path:'/feedback',
    	component:feedback,
    	name:'feedback'
    },
    {
      path:"/404",
      name:'404',
      component:fnf
    },
    {
      path:"*",
      redirect:"/404"
    }
  ],
  mode:"hash"
})
