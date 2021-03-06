import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Category from '../views/Category.vue'
import Product from '../views/Product.vue'

import Carts from '../views/Carts.vue'
import Login from '../views/Login.vue'

import Carts1 from '../views/Carts1.vue'
import Login1 from '../views/Login1.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'home',
		component: Home,
		meta:{
			show:true
		}
	},
	{
		path: '/login1',
		name: 'login1',
		component: Login1,
		meta:{
			show:true
		}
	},
	{
		path: '/carts1',
		name: 'carts1',
		component: Carts1,
		meta:{
			show:true
		}
	},
	{
		path: '/carts',
		name: 'carts',
		component: Carts,
		meta:{
			show:true
		}
	},
	{
		path: '/login',
		name: 'login',
		component: Login,
		meta:{
			show:false
		}
	},
	{
		path: '/product/:id',
		name: 'product',
		component: Product,
		meta:{
			show:false
		}
	},
	{
		path: '/category',
		name: 'category',
		component: Category,
		meta:{
			show:true
		}
	},
	{
		path: '/about',
		name: 'about',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
		meta:{
			show:true
		}
	}
]

const router = new VueRouter({
	routes
})

export default router
