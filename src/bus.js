import Vue from 'vue'

// 把$bus掛在Vue的原型下
Vue.prototype.$bus = new Vue()
