import Vue from 'vue'
import VueRouter from 'vue-router';
import Vuex from 'vuex'
import origin from './state';
import actions from './action';
import getters from './getter';
import mutations from './mutation';

Vue.use(VueRouter);
Vue.use(Vuex)

export default new Vuex.Store({
  strict    : process.env.NODE_ENV !== 'production',
  actions   : actions,
  getters   : getters,
  mutations : mutations,
  state     : origin(),
})