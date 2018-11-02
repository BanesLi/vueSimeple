import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/home'
import About from '@/page/about'
import Courses from '@/page/courses'
import Portfolio from '@/page/portfolio'
import Pricing from '@/page/pricing'
import Contact from '@/page/contact'
Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path:'/about',
      name:'About',
      component: About
    },
    {
      path: '/courses',
      name: 'Courses',
      component: Courses
    },
    {
      path: '/portfolio',
      name: 'Portfolio',
      component: Portfolio
    },
    {
      path: '/pricing',
      name: 'Pricing',
      component: Pricing
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ]
})
