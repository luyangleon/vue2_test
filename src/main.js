import Vue from 'vue'
import App from './App.vue'
import { Button, Select } from 'element-ui';

//关闭vue生产提示
Vue.config.productionTip = false

Vue.component(Button.name, Button);
Vue.component(Select.name, Select);

new Vue({
  render: h => h(App),
}).$mount('#app')
