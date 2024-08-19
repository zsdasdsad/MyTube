import { createRouter, createWebHistory } from 'vue-router'
import MainPage from './components/MainPage.vue'
import Video from './components/Video.vue'


const routes = [
    {
        path:'/',
        component: MainPage
    },
    {
        path: '/video',
        component: Video
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(import.meta.env.BASE_URL)
})

export default router