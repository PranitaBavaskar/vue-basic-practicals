import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import firstpg from './components/firstpg.vue'
import secondpg from './components/secondpg.vue'

Vue.use(VueRouter);

const routes = [
  {path: '/', component:firstpg},
  {path: '/secondpg/:teamid', component:secondpg}
]
const router = new VueRouter({routes});

Vue.config.productionTip = false



Vue.filter('Ucase',function(val){
  return val.toUpperCase();
})

Vue.filter('currencyConverter',function(val){
  return val*75;
})



new Vue({
  router: router,
  //mode : 'history',
  render: h => h(App),
}).$mount('#app')
