import Vue from 'vue';
import VueRouter from 'vue-router';

import routes from './routes/index.js';

export default new VueRouter({
  routes:[
    ...routes
  ],
})
