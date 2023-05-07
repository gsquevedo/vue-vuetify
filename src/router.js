import { createRouter, createWebHistory } from 'vue-router';

// Importe os componentes que você deseja utilizar nas rotas
import PaginaInicial from './components/PaginaInicial.vue';
import ListaTarefas from './components/ListaTarefas.vue'
import DadosEstatisticos from './components/DadosEstatisticos.vue'
import ChatMessage from './components/ChatMessage.vue'
import MediaVideo from './components/MediaVideo.vue'

const routes = [
  {
    path: '/',
    component: PaginaInicial
  },
  {
    path: '/lista',
    component: ListaTarefas
  },
  {
    path: '/graficos',
    component: DadosEstatisticos
  },
  {
    path: '/chat',
    component: ChatMessage
  },
  {
    path: '/video',
    component: MediaVideo
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
