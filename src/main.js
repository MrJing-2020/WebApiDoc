import Vue from 'vue';
import VueRouter from 'vue-router';
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import VueResource from 'vue-resource';

import Routers from './router';
import App from './App.vue';
import VueHtml5Editor from 'vue-html5-editor'

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(iView);

Vue.use(VueHtml5Editor);

Vue.prototype.ServerPath = "http://192.168.3.66:8899/";

const RouterConfig = {
    mode: 'history',
    routes: Routers
};
const router = new VueRouter(RouterConfig);

router.beforeEach((to, from, next) => {
    iView.LoadingBar.start();
    next();
});

router.afterEach((to, from, next) => {
    iView.LoadingBar.finish();
    window.scrollTo(0, 0);
});

// Vue.http.interceptors.push(function(request, next) {
//
//     // modify headers
//     request.headers.set('Authorization', 'bearer MgkIEzX6xN0d6rTRjFuGzYd3tzx5dQIIjkiV6_LCJX56qQEbQKu46WAc6x6Sd-dZk_fisS208cZD1NEUskP3MJsvKXMXEA3JJRDEQsXF1BE5BkRgTEgyd6tdNvRjNH7m5N_vnicLfOWMnJpAM93CtbeWyjAHp4H7Eyn9oCKmyINwOyqgoPfukgocuGrn44NKd_TXGhPCyAyCXctpdb25h84l79oLvjAvI2rD8gYnHEfRPTAl22cCLS2HJXge9447AAHYoasKs8721wIssf9YPB3RUpTn-cwRXyG7zVGj-5qT7IFSSBojXkRMn15YHEY7YVtJ9PTq5qB2Nj9sg5mzd03NVftY5qSDXFSM5xM9mB0MBMxEjcc3EkXBuTiC8vYXEZfjmgyPVxIDxOXVP68O2yl660eJTsMNRzAYs8HKF1oy-KOZWqtUpbbinFBF8ufXkCWNvyZwnsl7cZuRLjyvZ5VN_ZyiDwlJBLFAAwfsRXFhUuXaa5GP91g8bmryGVCLpusBIBdq0g763DsG5x4BVQ');
//
//     // continue to next interceptor
//     next();
// });

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
