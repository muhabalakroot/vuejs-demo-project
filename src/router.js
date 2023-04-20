import { createRouter, createWebHistory } from 'vue-router';

import CoachesList from './pages/coaches/CoachesList.vue';
import CoachesRegisteration from './pages/coaches/CoachesRegisteration';
import CoachesDetails from './pages/coaches/CoachesDetails.vue';
import ContactCoache from './pages/requests/ContactCoache.vue';
import RequestRegisteration from './pages/requests/RequestRegisteration.vue';
import NotFound from './pages/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/coaches' },
    { path: '/coaches', component: CoachesList },
    {
      path: '/coaches/:id',
      props: true,
      component: CoachesDetails,
      children: [{ path: 'contact', component: ContactCoache }],
    },
    { path: '/register', component: CoachesRegisteration },
    { path: '/requests', component: RequestRegisteration },
    { path: '/:notFound(.*)', component: NotFound },
  ],
});

export default router;
