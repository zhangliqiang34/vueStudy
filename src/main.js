import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

//全局过滤器方法
Vue.filter("uppercase", value => {
    return value.toUpperCase();
});
new Vue({
    router,
    render: h => h(App)
}).$mount('#app')