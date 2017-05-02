import Vue from 'vue'
import Router from 'vue-router'
import Map from '@/components/Map'
import House from '@/components/House'
import Tenant from '@/components/Tenant'
import Agent from '@/components/Agent'
import personel from '@/components/personel'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Map',
      component: Map
    },
    {
      path: '/tenants',
      name: 'Tenant',
      component: Tenant
    },
    {
      path: '/houses',
      name: 'House',
      component: House
    },
    {
      path: '/agents',
      name: 'Agent',
      component: Agent
    },
    {
      path:'/personel',
      name:'personel',
      component:personel
    }
  ]
})
