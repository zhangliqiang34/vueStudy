import Vue from "vue";
import Vuex from "vuex";
import moduleA from "./modules/moduleA";
import moduleB from "./modules/moduleB";

import products from "./modules/products";
import cart from "./modules/cart";

import { increment } from "./mutations-type";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        moduleA,
        moduleB,
        products,
        cart
    },
    state: {
        rootCount: 10
    },
    mutations: {
        [increment](state, payload) {
            state.rootCount += payload;
        }
    }
});