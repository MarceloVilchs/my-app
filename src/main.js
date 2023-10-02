import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';

//importamos VueRouter
import VueRouter from 'vue-router';

//importamos nuestros componentes
import inicioComponent from './components/Inicio';
import listarArticulos from './components/ListarArticulos';
import crearArticulo from './components/CrearArticulo';
import editarArticulo from './components/EditarArticulo';
import contactoContacto from './components/Contacto';



//creamos nuestros componentes
Vue.component('inicioComponent', inicioComponent);
Vue.component('listarArticulos', listarArticulos);
Vue.component('crearArticulo', crearArticulo);
Vue.component('editarArticulo', editarArticulo);
Vue.component('contactoContacto', contactoContacto);


//Uso de Vue Router
Vue.use(VueRouter);

//definir rutas
const routes = [
  {path:'/', component:inicioComponent},
  {path:'/inicio', component:inicioComponent},
  {path:'/articulos', component:listarArticulos},
  {path:'/crear', component:crearArticulo, name:'CrearArticulo'},
  {path:'/editar/:id', component:editarArticulo, name:'EditarArticulo'},
  {path:'/contacto', component:contactoContacto}
];

//crear objeto router 
const router = new VueRouter({
  routes,
  mode:'history'
});

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app');



//git log --logline
//git push origin main (subir repositorio)
//git pull origin main (actualizar codigo del repositorio)
//usa este comando de la vue para version mas antigua: npm install vue@^3.2.0