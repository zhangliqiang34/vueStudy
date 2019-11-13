import Vue from "vue";
import Vuex from "vuex";
import Mock from "mockjs";
Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        count: 1,
        list: [
            // {
            //         id: 1,
            //         name: "张三",
            //         sex: 1
            //     },
            //     {
            //         id: 2,
            //         name: "李四",
            //         sex: 2
            //     },
            //     {
            //         id: 3,
            //         name: "王五",
            //         sex: 1
            //     }
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
        },
        updateList(state, payload) {
            state.list = payload;
        }
    },
    actions: {
        getList({ commit }, payload) {
            setTimeout(() => {
                const list = Mock.mock({
                    data: [{
                        'id|+1': 1,
                        'name': "@cname()",
                        'sex|1': [1, 0]
                    }]
                })

                commit('updateList', list)
            }, 1000);

        }
    }
});