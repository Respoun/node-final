import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import CreateProduct from './views/CreateProduct.vue'
import ProductDetail from './views/ProductDetail.vue'
import About from './views/About.vue'
import ProductsListing from './views/ProductsListing.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component:About
    },
    {
      path: '/create',
      name: 'Create',
      component: CreateProduct
    },
    {
      path: '/products-listing',
      name: 'ProductsListing',
      component: ProductsListing
    },
    {
      path: '/product-detail/:id',
      name: 'ProductDetail',
      component: ProductDetail
    }
  ]
})
