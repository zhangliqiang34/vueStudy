import Mock from "mockjs";

export default {
    namespaced: true,
    state: {
        list: []
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
        updateList(state, payload) {
            state.list = payload;
        }
    },
    actions: {
        getList({ commit }, payload) {
            setTimeout(() => {
                const { data: list } = Mock.mock({
                    [`data|${payload ? payload : '3-10'}`]: [{
                        'id|+1': 1,
                        'name': "@cname()",
                        'sex|1': [1, 0]
                    }]
                })
                commit('updateList', list)
                commit('increment', 4, { root: true })
            }, 1000);

        }
    }
}