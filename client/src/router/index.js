import Vue from 'vue'
import Router from 'vue-router'
import pathmap from './pathmap';

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: pathmap,
})