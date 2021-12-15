<template>
  <v-app>
    <navigationDrawer
      :urlList="sections"
      @click:route:section="goToSection"
    />
    <v-main>
      <navigationBreadcrumbs
        :urlList="subSections"
        :current="routeSubsection"
        @click:route:subsection="goToSubSection"
      />
      <component :is="routedComponent" />

      <pre>{{queryParameters}}</pre>

    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';

import {
  customRouteMap,
  rebuildUrl,
  goToUrl
} from '@/plugins/router';
import $route from '@/router';

import navigationDrawer from '@/components/navigationDrawer.vue';
import navigationBreadcrumbs from '@/components/navigationBreadcrumbs.vue';

export default Vue.extend({
  name: 'App',
  components: {
    navigationDrawer,
    navigationBreadcrumbs,
  },
  data: () => ({
    defaultRoute: 'Home' as string,
    sections: $route.routes as customRouteMap[],
    queryParameters: $route.query as Record<string,string>,
    subSections: [
      "uno",
      "due",
      "tre"
    ],
  }),
  computed: {
    routeSection () :string {
      const { section = this.defaultRoute } = this.queryParameters;
      return section;
    },
    routeSubsection () :string {
      const { subsection = '' } = this.queryParameters;
      return subsection;
    },
    routedComponent() :any {
      const { component } = $route.routes.find(({ path } :customRouteMap) => {
          return path === this.routeSection;
        }) || 
        $route.routes.find(({ path } :customRouteMap) => {
          return path === '/'
        }) || 
        $route.routes[0];
      return component;
    },
  },
  methods: {
    goToSection(path :string) :void {
      $route.query.section = path;
      goToUrl(rebuildUrl())
    },
    goToSubSection(path :string) :void {
      $route.query.subsection = path;
      goToUrl(rebuildUrl())
    }
  },
});
</script>
