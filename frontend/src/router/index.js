import { createRouter, createWebHistory } from 'vue-router';
import show_users from '@/views/show_users.vue';
import add_user from '@/views/add_user.vue';
import login_user from '@/views/login_user.vue';
import myuser from '@/views/myuser.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: show_users
    },
    {
      path: '/register',
      component: add_user
    },
    {
      path: '/login',
      component: login_user
    },
    {
      path: '/user',
      component: myuser
    }
  ]
})

export default router;
