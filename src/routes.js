import Vue from 'vue'
import Router from 'vue-router'
import Content from './component/Content.vue'
import Edit from './component/Edit.vue'
import Add from './component/Add.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Content
        },
        {
            path: '/edit',
            name: 'Edit',
            component: Edit
        },
        {
            path: '/add/:id',
            name: 'Add',
            component: Add
        }
    ]
})