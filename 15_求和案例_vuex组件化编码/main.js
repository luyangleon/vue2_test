import Vue from 'vue'
import App from './App.vue'
import store from './store/index'

//关闭vue生产提示
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  beforeCreate() {
    Vue.prototype.$bus = this
  },
  mounted(){
    // console.log(this);
  }
}).$mount('#app')
