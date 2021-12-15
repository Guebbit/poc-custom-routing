<template>
  <v-navigation-drawer permanent app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Application
          </v-list-item-title>
          <v-list-item-subtitle>
            subtext
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in urlList"
          :key="item.name"
          link
          @click="$emit('click:route:section', item.path)"
        >
          <v-list-item-content>
            <v-list-item-title>{{ item.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue';

import {
  customRouteMap,
} from '@/plugins/router';

export default Vue.extend({
  name: 'NavigationDrawer',
  props: {
    urlList: {
			type: Array,
			default: () => {
				return [];
			}
		} as PropOptions<customRouteMap[]>,
  },
})
</script>
