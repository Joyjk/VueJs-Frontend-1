import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import VueRouter from 'vue-router'
//import VueCookies from 'vue-cookies'
import store from './Store'



import Test1 from './components/Test1.vue'
import Test2 from './components/Test2.vue'
import Home from './components/Home.vue'
import Registration from './components/Registration.vue'
import LoginTry from './components/LoginTry.vue'
import SingleProduct from './components/SingleProduct.vue'
import CartDemo from './components/CartDemo.vue'
import checkout from './components/CheckoutConfirm.vue'
import LogoutTry from './components/LogoutTry.vue'
import Orders from './components/Orders.vue'
import OrderDetails from './components/OrderDetails.vue'
import Profile from './components/Profile.vue'
import ChangePassword from './components/ChangePassword.vue'
import TopProduct from './components/TopProduct.vue'
import CartProdDelete from './components/CartProdDelete.vue'




Vue.use(VueRouter);

//Vue.use(VueCookies);

const routes=[
  {path:'/test1',component:Test1},
  {path:'/test2',component:Test2},
  {path:'/',component:Home},
  {path:'/registration',component:Registration},
  {path:'/login',component:LoginTry},
  {path:'/singleproduct/:id',component:SingleProduct},
  {path:'/cart',component:CartDemo},
  {path:'/checkout',component:checkout},
  {path:'/logout',component:LogoutTry},
  {path:'/orders',component:Orders},
  {path:'/orderdetails/:id',component:OrderDetails},
  {path:'/profile',component:Profile},
  {path:'/changepassword',component:ChangePassword},
  {path:'/top',component:TopProduct},
  {path:'/productdelete/:id',component:CartProdDelete},



]

const router = new VueRouter({
  mode:'history',
  routes
})

Vue.config.productionTip = false

new Vue({
  router:router,
  store:store,
  render: h => h(App),
}).$mount('#app')
