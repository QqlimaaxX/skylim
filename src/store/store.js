import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
      in:false
  },
  mutations: {
    increment (state) {
      // mutate state
      state.in = true
    },
    decrement (state) {
      // mutate state
      state.in = false
    }
  }
})