<template>
  <div>
    <v-btn
      v-for="item in urlList"
      :key="item+'-breadcrumb'"
      :color="current === item ? 'primary' : ''"
      @click="$emit('click:route:subsection', item)"
    >
      {{ item }}
    </v-btn>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue';

import {
  customRouteMap,
} from '@/plugins/router';

export default Vue.extend({
  name: 'NavigationBreadcrumbs',
  props: {
    urlList: {
			type: Array,
			default: () => {
				return [];
			}
		} as PropOptions<customRouteMap[]>,
    current: {
      type: String,
      required: false
    } as PropOptions<string>,
  },
})
</script>
