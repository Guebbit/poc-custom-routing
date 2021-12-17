<template>
  <v-app>
    <navigationDrawer
      :urlList="sections"
      @click:route:section="goToSection"
    />
    <v-main>
      <component :is="routedComponent" />
      <pre>{{queryParameters}}</pre>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue, { VueConstructor } from 'vue';
import navigationDrawer from '@/components/navigationDrawer.vue';

import Router, { customRouteMap } from './plugins/router';
import routes from './router';

const $route = new Router(routes);

export default Vue.extend({
  name: 'App',
  components: {
    navigationDrawer,
  },
  data: () => ({
    defaultRoute: 'home' as string,
    sections: $route.routes as customRouteMap[],
    queryParameters: $route.query as Record<string,string>,
  }),
  computed: {
    routeSection () :string {
      const { section = this.defaultRoute } = $route.query;
      return section.toLowerCase();
    },
    routedComponent() :VueConstructor<Vue> {
      const { component } = $route.routes.find(({ name }: customRouteMap) => {
        return name.toLowerCase() === this.routeSection
      }) || $route.defaultRoute;
      return component;
    },
  },
  methods: {
    goToSection(name :string) :void {
      $route.query.section = name;
      $route.refreshRoute()
    },
  },
  mounted() {
    if($route.query.hasOwnProperty('section'))
      return;
    $route.query.section = this.defaultRoute;
    $route.refreshRoute(true);
  }
});
</script>
