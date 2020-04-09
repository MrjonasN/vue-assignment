import axios from '@/helpers/axios'

export default {
    state: {
        products: [],
        product: null
    },
    mutations: {
        GET_PRODUCTS(state, products) {
            state.products = products
        },

        GET_PRODUCT_BYID(state, product) {
            state.product = product
        },

    },
    actions: {
        getProducts({ commit }) {
            axios.get('/products')
                .then(res => {
                    let products = res.data.product
                    commit('GET_PRODUCTS', products)
                })
                .catch(error => console.log(error))
        },
        getProductById({ commit }, id) {
            axios.get(`/products/${id}`)
            .then(res => {
                let product = res.data
                commit('GET_PRODUCT_BYID', product)
            })
            .catch(error => console.log(error))
        },

    },
    getters: {
        products(state) {
            return state.products
        },
        product(state) {
            return state.product
        }
    }
}