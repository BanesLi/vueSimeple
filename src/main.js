// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import $ from 'jquery'
import 'animate/index'
import 'bootstrap/dist/js/bootstrap.min'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/reset.css'
import './assets/css/style.css'
import './assets/css/fancybox/jquery.fancybox.css'
import './assets/css/flexslider.css'
import 'animate.css/animate.min.css'


import './assets/js/jquery.easing.1.3'
import './assets/js/jquery.fancybox.pack'
import './assets/js/jquery.fancybox-media'
import './assets/js/portfolio/jquery.quicksand'
import './assets/js/portfolio/setting'
import './assets/js/jquery.flexslider'
import './assets/js/custom'

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
