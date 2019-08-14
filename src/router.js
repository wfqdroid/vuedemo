import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

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
            component: () => import('./views/About.vue')
        },
        {
            path: '/vuex1',
            name: 'vuex1',
            component: () => import('./views/Vuex1.vue')
        },
        {
            path: '/vuex_simp1',
            name: 'vuex_simp1',
            component: () => import('./views/Vuex_simp1.vue')
        },
        {
            path: '/simple-component',
            name: 'simple-component',
            component: () => import('./views/SimpleComponent.vue')
        },
        {
            path: '/eventbustest',
            name: 'eventbustest',
            component: () => import('./views/EventBusTest.vue')
        },
        {
            path: '/provideinjecttest',
            name: 'provideinjecttest',
            component: () => import('./views/ProvideInjectTest.vue')
        },
        {
            path: '/toggletest',
            name: 'toggletest',
            component: () => import('./views/ToggleTest.vue')
        },
        {
            path: '/dispatchbroadcast',
            name: 'dispatchbroadcast',
            component: () => import('./views/DispatchAndBroadcast.vue')
        },
        {
            path: '/chart',
            name: 'chart',
            component: () => import('./views/chart.vue')
        },
        {
            path: '/Reportobstacle',
            name: 'Reportobstacle',
            component: () => import('./views/Reportobstacle.vue')
        },
        {
            path: '/JIRAList',
            name: 'JIRAList',
            component: () => import('./views/JIRAList.vue')
        },
        {
            path: '/guanlian',
            name: 'guanlian',
            component: () => import('./views/guanlian.vue')
        },
        {
            path: '/demo1',
            name: 'demo1',
            component: () => import('./views/Demo1.vue')
        }
    ]
})
