import { createRouter, createWebHistory } from 'vue-router'
import MainPage from './components/MainPage.vue'
import Video1 from './components/Video1.vue'


const routes = [
    {
        path:'/',
        component: MainPage
    },
    {
        path: '/video1',
        component: Video1
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(import.meta.env.BASE_URL)
})

export default router