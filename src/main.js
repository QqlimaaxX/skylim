import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Vuetify from 'vuetify'
import router from './router.js'
import css from 'vuetify/dist/vuetify.min.css' 
import Vuex from 'vuex'
import {store} from './store/store'
import jsPDF from 'jspdf'


Vue.use(VueRouter)
Vue.use(Vuetify)

Vue.config.productionTip = false

router.beforeEach(
  (to, from, next)=>{
    if(to.meta.reqAuth){
      if(window.localStorage.getItem('username')){
        next()
      }
      else{
        next({path:'/login'})
      }
    }

    else if(to.meta.forVisitors){
      if(!window.localStorage.getItem('username')){
        next()
        }
      else{
        next({path:'/app/profile/general'})
      }
      }

    next()
  })

new Vue({
  el: '#app',
  router,
  store: store,
  components: { App },
  template: '<App/>'
})
