import { UPDATE_PRUDUCTS, UPDATE_SKU } from '../mutations-type'
import { getProductsList } from '../../services/cart'

export default {
    namespaced: true,
    state: {
        products: []
    },
    getters: {

    },
    mutations: {
        [UPDATE_PRUDUCTS](state, payload) {
            state.products = payload
        },
        [UPDATE_SKU](state, { id, sku }) {
            state.products.find(item => item.id === id).sku = sku
            console.log(id, sku)
        },
    },
    actions: {
        async getProducts({ commit }, payload) {
            const { data } = await getProductsList(payload)
            console.log("数据访问成功")
            commit(UPDATE_PRUDUCTS, data)
        }
    }
}