import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
    {
        path: '/:id',
        name: 'home',
        props: true,
        component: HomeView
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
