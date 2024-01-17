import RobotBuilder from '@/build/RobotBuilder.vue';
import HomePage from '@/home/HomePage.vue';
import PartInfo from '@/parts/PartInfo.vue';
import { createRouter, createWebHashHistory } from 'vue-router';

export default createRouter({
  routes: [{
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/build',
    name: 'Build',
    component: RobotBuilder,
  },
  {
    path: '/parts',
    name: 'Parts',
    component: PartInfo,
  }],
  history: createWebHashHistory(),
});
