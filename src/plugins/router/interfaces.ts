import Vue, { VueConstructor } from 'vue';

export interface customRouteMap {
  path: string,
  component: VueConstructor<Vue>,
  name: string,
};

export interface routeObjectMap {
  query: Record<string, string>,
  routes: customRouteMap[]
}