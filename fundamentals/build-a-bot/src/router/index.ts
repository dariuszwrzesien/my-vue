import RobotBuilder from '@/build/RobotBuilder.vue';
import HomePage from '@/home/HomePage.vue';
import BrowsePart from '@/parts/BrowsePart.vue';
import PartInfo from '@/parts/PartInfo.vue';
import RobotArms from '@/parts/RobotArms.vue';
import RobotBases from '@/parts/RobotBases.vue';
import RobotHeads from '@/parts/RobotHeads.vue';
import RobotTorsos from '@/parts/RobotTorsos.vue';
import SidebarBuild from '@/sidebars/SidebarBuild.vue';
import SidebarStandard from '@/sidebars/SidebarStandard.vue';
import { createRouter, createWebHistory } from 'vue-router';

export default createRouter({
  routes: [{
    path: '/',
    name: 'Home',
    components: { default: HomePage, sidebar: SidebarStandard },
  },
  {
    path: '/build',
    name: 'Build',
    components: { default: RobotBuilder, sidebar: SidebarBuild },
  },
  {
    path: '/parts/browse',
    name: 'BrowseParts',
    component: BrowsePart,
    children: [
      {
        path: 'heads',
        name: 'BrowseHeads',
        component: RobotHeads,
      },
      {
        path: 'arms',
        name: 'BrowseArms',
        component: RobotArms,
      },
      {
        path: 'torsos',
        name: 'BrowseTorsos',
        component: RobotTorsos,
      },
      {
        path: 'bases',
        name: 'BrowseBases',
        component: RobotBases,
      },
    ],
  },
  {
    path: '/parts/:partType/:id',
    name: 'Parts',
    component: PartInfo,
    props: true,
    beforeEnter(to, from, next) {
      console.log('zanim wejdziesz w te route sprawdz to co ponizej');
      const isValidId = Number.isInteger(Number(to.params.id));
      next(isValidId);
    },
  }],
  history: createWebHistory(),
});
