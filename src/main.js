import Vue from 'vue'
import App from './App.vue'
import InputComponentVue from './components/InputComponent.vue'

Vue.config.productionTip = false

Vue.component('input-component', InputComponentVue)

new Vue({
  render: h => h(App),
}).$mount('#app')
