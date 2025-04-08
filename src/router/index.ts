import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import SobreNosotros from '../views/SobreNosotros.vue'
import Proyectos from '../views/Proyectos.vue'
import Rental from '../views/Rental.vue'
import Productos from '../views/Productos.vue'
import Galeria from '../views/Galeria.vue'

const routes = [
  { path: '/', name: "Home", component: Home },
  { path: '/nosotros', name: "Nosotros", component: SobreNosotros },
  { path: '/proyectos', name: "Proyectos", component: Proyectos },
  { path: '/rental', name: "Rental", component: Rental },
  { path: '/productos', name: "Productos", component: Productos },
  { path: '/galeria', name: "Galeria", component: Galeria }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
