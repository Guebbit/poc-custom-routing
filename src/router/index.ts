import {
  customRouteMap,
  $route,
} from '@/plugins/router';

import Home from '@/views/Home.vue';
import Activities from '@/views/Activities.vue';
import Collections from '@/views/Collections.vue';
import Dashboard from '@/views/Dashboard.vue';
import Profile from '@/views/Profile.vue';
import Shopping from '@/views/Shopping.vue';

$route.routes = [
  {
    path: "home",
    component: Home,
    name: "Home",
  },
  {
    path: "activities",
    component: Activities,
    name: "Activities",
  },
  {
    path: "collections",
    component: Collections,
    name: "Collections",
  },
  {
    path: "dashboard",
    component: Dashboard,
    name: "Dashboard",
  },
  {
    path: "profile",
    component: Profile,
    name: "Profile",
  },
  {
    path: "shopping",
    component: Shopping,
    name: "Shopping",
  },
] as customRouteMap[];

export default $route