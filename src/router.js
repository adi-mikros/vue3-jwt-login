import { createRouter, createWebHistory } from "vue-router";

import Beranda from './components/Beranda.vue'
import Login from './components/Login.vue'
import Registrasi from './components/Registrasi.vue'

//buat komponen route
const routes = [
    {
        path: '/',
        name: 'Beranda',
        component: Beranda
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/registrasi',
        name: 'Registrasi',
        component: Registrasi
    }
];

//membuat router
const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router; //diekspor agar bisa dibaca di main.js














//yg ini gag tau kenapa deprecated mungkin versi baru gag support atau kesalahan di main.js
// import Vue from 'vue'
// import Router from 'vue-router'
// import Home from './components/Beranda.vue'
// import Login from './components/Login.vue'

// Vue.use(Router);

// export default new Router({
//     mode:history,
//     routes = [
//             {
//                 path: '/',
//                 name: 'Home',
//                 component: Home
//             },
//             {
//                 path: '/login',
//                 name: 'Login',
//                 component: Login
//             }
//         ]
// })





