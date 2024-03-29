/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

import VueRouter from 'vue-router';

import routes from './routes'

Vue.use(VueRouter)

const router = new VueRouter({ 
    routes,
    mode: 'history',
    scrollBehavior (to, from, savedPosition) {
      return { x: 0, y: 0 }
    }
});

import VueAxios from 'vue-axios'
 
Vue.use(VueAxios, window.axios)

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    router,
    render: (h) => h(require('./pages/Welcome.vue').default),
  }).$mount('#app')
