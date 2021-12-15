import {
  routeObjectMap,
} from './';


let queryTemp = window.location.search.replace(/^\?/, '').split(/&|=/),
  queryParameters: Record<string, string> = {};
for (let i = queryTemp.length; i--;) {
  if (i % 2)
    queryParameters[queryTemp[i - 1]] = queryTemp[i];
}

export const $route: routeObjectMap = {
  query: queryParameters,
  routes: [],
}