import Vue from 'vue';
import App from '../components/component.vue';

new Vue({
  el: '#mount',
  components: {
    app: App
  },
  render(createElement) {
    return createElement(App);
  }
});
