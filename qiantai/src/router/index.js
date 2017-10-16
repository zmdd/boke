import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Loading from '@/components/loading'
import Froms from '@/components/froms'
// import leftcont from '@/components/leftcont'
import change_list from '@/components/pages/change_list'
import midd_list from '@/components/pages/midd_list'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'index',
        component: Index,
        children:[
            {
                path: '',
                name: 'change_list',
                component: change_list
            }, {
                path: '/midd_list',
                name: 'midd_list',
                component: midd_list
            }
        ]
    }, {
        path: '/loading',
        name: 'loading',
        component: Loading
    }, {
        path: '/froms',
        name: 'froms',
        component: Froms
    }
    
    ]
})