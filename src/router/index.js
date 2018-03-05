import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index/index'

Vue.use(Router)
const _import = file => () => import('@/views/' + file + '.vue')
export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/rent',
      name: 'rent',
      component: _import('rent/rent')
    },
    {
      path: '/sell',
      name: 'sell',
      component: _import('sell/sell')
    },
    {
      path: '/rentsingle',
      name: 'rentsingle',
      component: _import('rent/rentsingle')
    },
    {
      path: '/rented',
      name: 'rented',
      component: _import('rent/rented')
    },
    {
      path: '/rentedsingle',
      name: 'rentedsingle',
      component: _import('rent/rentedsingle')
    },
    {
      path: '/waitsell',
      name: 'waitsell',
      component: _import('sell/waitsell')
    },
    {
      path: '/addmember',
      name: 'member',
      component: _import('add/member')
    },
    {
      path: '/add',
      name: 'add',
      component: _import('add/add')
    },
    {
      path: '/addsingle',
      name: 'addsingle',
      component: _import('add/addsingle')
    },
    {
      path: '/copy',
      name: 'copy',
      component: _import('copy/copy')
    },
    {
      path: '/dis',
      name: 'dis',
      component: _import('dis/dis')
    },
    {
      path: '/setting',
      name: 'setting',
      component: _import('setting/setting')
    },
    {
      path: '/member',
      name: 'member',
      component: _import('member/member')
    }
  ]
})
