import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        count: 1,
        list: [{
                id: 1,
                name: "张三",
                sex: 1
            },
            {
                id: 2,
                name: "李四",
                sex: 2
            },
            {
                id: 3,
                name: "王五",
                sex: 1
            }
        ]
    },
    getters: {
        filterList(state, getters) {
            return state.list.map(item => {
                item.sexName = item.sex === 1 ? "男" : "女";
                return item;
            });
        }
    },
    mutations: {
        increment(state, payload) {
            state.count += payload;
        }
    },
    actions: {}
});