import Vue from 'vue'
import Router from 'vue-router'
import LogIn from '../components/LogIn.vue'
import Add from '../components/Add'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: "/add",
            redirect: {
                name: "Add"
            }
        },
        {
            path: '/add',
            name: 'Add',
            component: Add
        },
        {
            path: '/',
            name: 'LogIn',
            component: LogIn
        }
    ]
})