import axios from '@/helpers/axios'

export default {
    state: {
        users: [],
        user: null
    },
    mutations: {
        LOGIN_USER(state, user) {
            state.user = user
        }
    },
    actions: {
        loginUser({ commit }, user) {
            axios.post('/users/login', {
                email: user.email,
                password: user.password
            })
            .then(res => {
                let user = res.data.user
                console.log(user)
                commit('LOGIN_USER', user)
            })
            .catch(error => console.log(error))
        }
        
    },
    getters: {
        user(state) {
            return state.user
        }
    }
}