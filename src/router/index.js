import { createRouter, createWebHistory } from "vue-router";

import TelaInicial from '../pages/master/TelaInicial'

import Home from '../pages/Home-food'
import profile from '../pages/profile-food'
import Foods   from '../pages/Foods-app'
import Tabelas   from '../pages/Tabelas-produtos'

const routes = [{
    name: `TelaInicial`,
    path: '/',
    component: TelaInicial,
},
{
    name: 'Home-food',
    path: '/Home-food',
    component: Home,
},

{
    name: 'profile-food',
    path: '/profile-food',
    component: profile,
},

{
    name: 'Foods-app',
    path: '/Foods-app',
    component: Foods,
},
{
    name: 'Tabelas-produtos',
    path: '/tabelas-produtos',
    component: Tabelas,
},


];
const router = Router();
export default router;

function Router() {
    const router = new createRouter({
        history: createWebHistory(),
        routes,
    });
    return router;
}
