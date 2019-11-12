import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Vuex from "vuex";
import store from "./store/store";
Vue.config.productionTip = false;

//全局过滤器方法
Vue.filter("uppercase", value => {
    return value.toUpperCase();
});

//每当 store.state.count 变化的时候, 都会重新求取计算属性，并且触
//发更新相关联的 DOM。然而，这种模式会导致组件依赖全局状态单例。所以
//Vuex 通过 store 选项，提供了一种机制将状态从根组件“注入”到每一个
//子组件中（需调用 Vue.use(Vuex)）：
Vue.use(Vuex);

new Vue({
    router,
    store, //记得需要挂载才可以用，把 store 对象提供给 “store” 选项，这可以把 store 的实例注入所有的
    render: h => h(App)
}).$mount("#app");