import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const login = () => import('views/login')
const home = () => import('views/home')

const Switch = () => import('components/psges/switch')
const datePicker = () => import('components/psges/datePicker')
const upLoad = () => import('components/psges/upLoad')
const radioBox = () => import('components/psges/radioBox')
const checkBox = () => import('components/psges/checkBox')
const alertBox = () => import('components/psges/alertBox')

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/home',
      name: 'home',
      component: home,
      children: [
        {
          path: '/home/switch',
          name: 'switch',
          component: Switch
        },
        {
          path: '/home/datePicker',
          name: 'datePicker',
          component: datePicker
        },
        {
          path: '/home/upLoad',
          name: 'upLoad',
          component: upLoad
        },
        {
          path: '/home/radioBox',
          name: 'radioBox',
          component: radioBox
        },
        {
          path: '/home/checkBox',
          name: 'checkBox',
          component: checkBox
        },
        {
          path: '/home/alertBox',
          name: 'alertBox',
          component: alertBox
        }
      ]
    }
  ]
})
export default router
