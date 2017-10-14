import Vue from 'vue'
import Router from 'vue-router'
import addarticle from '@/components/page/addarticle'
import articlelist from '@/components/page/articlelist'
import firstclassifying from '@/components/page/firstclassifying'
import secondclassifying from '@/components/page/secondclassifying'
import categoryList from '@/components/page/categoryList'
import addInter from '@/components/page/addInter'
import frontInter from '@/components/page/frontInter'
import backstage from '@/components/page/backstage'
import Index from '@/components/page/Index'
import intro from '@/components/page/intro'
import blogs from '@/components/page/blogs'
import backInter from '@/components/page/backInter'

import form from '@/components/page/form'
import table from '@/components/page/table'
import amendArt from '@/components/page/amendArt'

//前台显示界面
// import font_list from '@/components/page/index/font_list'
import font_list from '@/components/font_list'

import first_change from '@/components/page/first_change'
import second_change from '@/components/page/second_change'
import changeInter from '@/components/page/changeInter'
import login from '@/components/login'
import back from '@/components/back'


import midd_list from '@/components/pages/midd_list'
import change_list from '@/components/pages/change_list'
Vue.use(Router)

export default new Router({
  linkActiveClass: 'bgcolor',
  routes: [
    {
      path:'/',
      name:'login',
      component:login,
     // redirect:'/login'
    },
    {
      path: '/font_list',
      name: 'font_list',
      component:font_list,
      children:[
        {
          path:'',
          name:'midd_list',
          component:midd_list
        },
        {
          path:'change_list',
          name:'change_list',
          component:change_list
        }
      ]
    },
    {
      path:'/back',
      name:'back',
      component:back,
      children:[
        {
          path:'',
          name:'/Index',
          component:Index
        },
        {
          path:'addarticle',
          name:'/addarticle',
          component:addarticle
        },
        {
          path: 'articlelist',
          name: 'articlelist',
          component: articlelist
        }
        ,{
          path: 'firstclassifying',
          name: 'firstclassifying',
          component: firstclassifying
        }
        ,{
          path: 'secondclassifying',
          name: 'secondclassifying',
          component: secondclassifying
        }
        ,{
          path: 'categoryList',
          name: 'categoryList',
          component: categoryList
        }
        ,{
          path: 'addInter',
          name: 'addInter',
          component: addInter
        }
        ,{
          path: 'frontInter',
          name: 'frontInter',
          component: frontInter
        }
        ,{
          path: 'backInter',
          name: 'backInter',
          component: backInter
        }
        ,{
          path: 'backstage',
          name: 'backstage',
          component: backstage
        },{
          path: 'intro',
          name: 'intro',
          component: intro
        },{
          path: 'blogs',
          name: 'blogs',
          component: blogs
        },{
          path: 'first_change',
          name: 'first_change',
          component: first_change
        },{
          path: 'second_change',
          name: 'second_change',
          component: second_change
        },{
          path: 'changeInter',
          name: 'changeInter',
          component: changeInter
        },{
          path: 'form',
          name: 'form',
          component: form
        },{
          path: 'table',
          name: 'table',
          component: table
        },{
          path: 'amendArt',
          name: 'amend_art',
          component: amendArt
        }
      ]
    }
    //
    // {
    //   path: '/',
    //   name: 'Index',
    //   component: Index,
    //   redirect:'/login'
    // },
    // {
    //   path: '/addarticle',
    //   name: 'addarticle',
    //   component: addarticle
    // },
    //  {
    //   path: '/articlelist',
    //   name: 'articlelist',
    //   component: articlelist
    // }
    // ,{
    //   path: '/firstclassifying',
    //   name: 'firstclassifying',
    //   component: firstclassifying
    // }
    // ,{
    //   path: '/secondclassifying',
    //   name: 'secondclassifying',
    //   component: secondclassifying
    // }
    // ,{
    //   path: '/categoryList',
    //   name: 'categoryList',
    //   component: categoryList
    // }
    // ,{
    //   path: '/addInter',
    //   name: 'addInter',
    //   component: addInter
    // }
    // ,{
    //   path: '/frontInter',
    //   name: 'frontInter',
    //   component: frontInter
    // }
    // ,{
    //   path: '/backstage',
    //   name: 'backstage',
    //   component: backstage
    // },{
    //   path: '/intro',
    //   name: 'intro',
    //   component: intro
    // },{
    //   path: '/blogs',
    //   name: 'blogs',
    //   component: blogs
    // },{
    //   path: '/login',
    //   name: 'login',
    //   component: login
    // }
  ]
})
