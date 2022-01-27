import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { DraggablePlugin } from '@braks/revue-draggable';
import Vuesax from 'vuesax';

import 'vuesax/dist/base.css' 
import 'vuesax/dist/vuesax.css' 

Vue.use(DraggablePlugin)
Vue.use(Vuesax, {
  // options here
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')


