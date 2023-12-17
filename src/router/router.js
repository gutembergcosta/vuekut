import {createWebHistory,createRouter} from 'vue-router'

import Home from '@/paginas/Home.vue'
import Item from '@/paginas/Item.vue'
import Login from '@/paginas/Login.vue'


const router = createRouter({
history: createWebHistory(),
routes: [
    {
        path: '/',
        component: Home,
        name: 'Home',
    },
    {
        path: '/item',
        component: Item,
        name: 'Item',
    },
    {
        path: '/login',
        component: Login,
        name: 'Login',
    }
]
})

export { router }