import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'

//importamos nuestros componentes
import inicioComponent from './components/Inicio';
import listararticulos from './components/ListarArticulos';



//creamos nuestros componentes
Vue.component('inicioComponent', inicioComponent)
Vue.component('listararticulos', listararticulos)

Vue.config.productionTip = false


new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
