import { createRouter, createWebHistory } from "vue-router";

import telainicial from '../pages/master/Tela-Inicial.vue'


const routes = [{
    name: 'Tela-Inicial',
    path: '/',
    component:telainicial,
    children: [

    
    ]
}, ];
const router = Router();
export default router;

function Router() {
    const router = new createRouter({
        history: createWebHistory(),
        routes,
    });
    return router;
}