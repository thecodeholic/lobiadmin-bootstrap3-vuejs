/**
 * Import Global Style (.css/.scss)
 */
// import 'bootstrap/scss/bootstrap.scss' // Theme UI
// import './src/assets/scss/index.scss' // Customize UI <---

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import FullCalendar from 'vue-full-calendar'
import * as uiv from 'uiv'
import * as lobiCore from './core'

window.$ = window.jQuery = require('jquery')
import 'bootstrap-daterangepicker'
import 'bootstrap-daterangepicker/daterangepicker.css'

Vue.config.productionTip = false
Vue.use(FullCalendar)
Vue.use(uiv)
Vue.component('lobi-date-range-picker', lobiCore.DateRangePicker)

// Vue.component('icon', Icon)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
