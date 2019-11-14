export default {
    namespaced: true,
    state: {
        count: 1
    },
    getters: {

    },
    mutations: {
        increment(state, payload) {
            state.count += payload;
        },
    },
    actions: {

    }
}