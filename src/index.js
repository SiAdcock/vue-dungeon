import Vue from 'vue';
import App from './components/main.vue';

new Vue({
  el: '#mount',
  components: {
    app: App
  },
  render(createElement) {
    return createElement(App);
  }
});
