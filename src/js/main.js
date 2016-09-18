//import Vue from 'vue';
//import App from '../components/component';
const Vue = require('vue');
const App = require('../components/component.vue');

new Vue({
  el: 'body',
  components: {
    app: App
  }
});
