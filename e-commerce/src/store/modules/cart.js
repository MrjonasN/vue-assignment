export default {
    state: {
        cart: []
    },
    mutations: {
        ADD_TO_CART(state, { product, quantity }) {
            let exists = state.cart.find(item => { return item.product._id === product._id })
            if (exists) {
                exists.quantity += quantity
                return
            }
            state.cart.push({ product, quantity })
            localStorage.setItem('cart', JSON.stringify(state.cart))
        },
        DELETE_FROM_CART(state, id) {
            state.cart = state.cart.filter(item => { return item.product._id !== id })
            localStorage.setItem('cart', JSON.stringify(state.cart))
        },
        INCREMENT(state, item) {
            item.quantity += 1
            localStorage.setItem('cart', JSON.stringify(state.cart))
        },
        DECREMENT(state, item) {
            item.quantity -= 1
            localStorage.setItem('cart', JSON.stringify(state.cart))
        },

    },
    actions: {
        addProductToCart({ commit }, { product, quantity }) {
            commit('ADD_TO_CART', { product, quantity })
        },

        deleteProductFromCart({ commit }, id) {
            commit('DELETE_FROM_CART', id)
        },
        incrementInCart({ commit }, item) {
            commit('INCREMENT', item)
        },
        decrementInCart({ commit }, item) {
            if (item.quantity <= 1) {
                commit('DELETE_FROM_CART', item.product._id)
                return
            }
            commit('DECREMENT', item)
        }
    },
    getters: {
        shoppingCart(state) {
            let cart = JSON.parse(localStorage.getItem('cart'))
            if (state.cart.length < 1) {
                if (cart !== null) {
                    state.cart = cart
                }
            }
            return state.cart
        },
        shoppingCartTotal(state) {
            let total = 0
            if (state.cart.length !== 0) {
                state.cart.forEach(item => {
                    total += item.product.price * item.quantity
                })
            }
            return total
        },
        shoppingCartItemCount(state) {
            let items = 0
            state.cart.forEach(item => {
                items += item.quantity
            })
            return items
        }
    }
}