import Vue, { VueConstructor } from 'vue';

export interface customRouteMap {
  path: string,
  component: VueConstructor<Vue>,
  name: string,
  default?: boolean
};

export default class CustomRouter {
  query :Record<string,string>  = {};
  // history :customRouteMap[] = [];
  //options
  routes: customRouteMap[] = [];
  defaultRoutePath :string = "/";

  constructor(routes: customRouteMap[] = []) {
    let queryTemp = window.location.search.replace(/^\?/, '').split(/&|=/),
      queryParameters: Record<string, string> = {};
    for (let i = queryTemp.length; i--;) {
      if (i % 2)
        queryParameters[queryTemp[i - 1]] = queryTemp[i];
    }
    this.query = queryParameters;
    this.routes = routes;
    // this.history = [];
  };

  get queryString() :string {
    const keys = Object.keys(this.query),
      values = Object.values(this.query);
    let url: string = '';
    for (let i = keys.length; i--;)
      url += keys[i] + "=" + values[i] + "&";
    url = "?" + url.substring(0, url.length - 1)
    return url;
  };

  get defaultRoute(): customRouteMap {
    return this.routes.find(({ path }: customRouteMap) => {
      return path === this.defaultRoutePath
    }) || this.routes[0];
  }

  refreshRoute(refresh = false) :void {
    let url: string = window.location.protocol + "//" + window.location.host + window.location.pathname + this.queryString;
    window.history.pushState({ path: url }, '', url);
    if(refresh)
      location.reload();
  };

  /**
  getUrlParameter(key: string) :string {
    key = key.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    const regex = new RegExp('[\\?&]' + key + '=([^&#]*)');
    const results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
  };
  */

  /*
  get currentRoute(): customRouteMap {
    return this.history[this.history.length - 1];
  }
  */
}
  