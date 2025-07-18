import { createWebHistory, createRouter } from 'vue-router'

import HomeView from './views/HomeView.vue'
import InputView from './views/InputView.vue'
import ButtonView from './views/ButtonView.vue'
import CardView from './views/CardView.vue'
import FormView from './views/FormView.vue'



const routes = [
    { path: '/home', redirect: '/' },
    { path: '/', name: 'Home', component: HomeView },
    { path: '/inputs', name: 'Inputs', component: InputView },
    { path: '/buttons', name: 'Buttons', component: ButtonView },
    { path: '/cards', name: 'Cards', component: CardView },
    { path: '/forms', name: 'Forms', component: FormView }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
})

export default router