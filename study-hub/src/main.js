import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { DraggablePlugin } from '@braks/revue-draggable';

Vue.config.productionTip = false
Vue.use(DraggablePlugin)

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')


