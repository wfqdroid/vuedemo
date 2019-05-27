import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        userInfo: {}
    },
    mutations: {
        getUserInfo(state,userInfo) {
            state.userInfo = userInfo
        }
    },
    actions: {
        getUserInfo({commit}){
            setTimeout(()=>{
                let info = {
                    name: 'wfq',
                    age: 26
                }
                commit('getUserInfo',info)
            },2000)
        }
    }
})
