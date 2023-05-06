import { createRouter, createWebHistory } from 'vue-router';

// Importe os componentes que você deseja utilizar nas rotas
// import Home from './components/Home.vue';
// import About from './components/About.vue';
// import Contact from './components/Contact.vue';

const routes = [
  {
    path: '/',
    // component: Home
  },
  {
    path: '/about',
  },
  {
    path: '/contact',
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
