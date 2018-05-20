import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Interpolacao from '@/components/Interpolacao'
import TimeOut from '@/components/TimeOut'
import VueOnce from '@/components/VueOnce'
import ButtonHide from '@/components/ButtonHide'
import ButtonTimeOut from '@/components/ButtonTimeOut'
import Input from '@/components/Input'
import ListaCadeiras from '@/components/ListaCadeiras'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/interpolacao',
      name: 'Interpolacao',
      component: Interpolacao
    },
    {
      path: '/timeout',
      name: 'TimeOut',
      component: TimeOut
    },
    {
      path: '/vueonce',
      name: 'VueOnce',
      component: VueOnce
    },
    {
      path: '/buttonhide',
      name: 'ButtonHide',
      component: ButtonHide
    },
    {
      path: '/buttontimer',
      name: 'ButtonTimeOut',
      component: ButtonTimeOut
    },
    {
      path: '/inputbind',
      name: 'Input',
      component: Input
    },
    {
      path: '/listacadeiras',
      name: 'ListaCadeiras',
      component: ListaCadeiras
    }
  ],
  mode: 'history'
})
