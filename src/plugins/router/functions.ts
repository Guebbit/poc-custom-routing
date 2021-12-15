import {
  $route,
} from './';


export const getUrlParameter = (key: string) => {
  key = key.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
  const regex = new RegExp('[\\?&]' + key + '=([^&#]*)');
  const results = regex.exec(location.search);
  return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};

// TODO computed
export const rebuildQueries = (): string => {
  const keys = Object.keys($route.query),
    values = Object.values($route.query);
  let url: string = '';
  for (let i = keys.length; i--;)
    url += keys[i] + "=" + values[i] + "&";
  url = "?" + url.substring(0, url.length - 1)
  return url;
};
// TODO computed
export const rebuildUrl = (): string => {
  return window.location.protocol + "//" + window.location.host + window.location.pathname + rebuildQueries()
};

export const goToUrl = (url: string): void => {
  window.history.pushState({ path: url }, '', url);
};
