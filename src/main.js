import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuex from 'vuex';

Vue.config.productionTip = false

//全局过滤器方法
Vue.filter("uppercase", value => {
    return value.toUpperCase();
});

//注意下面的代码
Vue.use(Vuex);
const store = new Vuex.Store({
    state: {},
    getters: {},
    actions: {},
    mutations: {}
});
new Vue({
    router,
    render: h => h(App)
}).$mount('#app')