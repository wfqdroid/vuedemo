import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        userInfo: {name: '大强'},
    },
    getters:{
        getUserInfo(state){
            return state.userInfo
        }
    },
    mutations: {
        setUserInfo(state,userInfo) {
            state.userInfo = userInfo
        },
    },
    actions: {
        setUserInfo({state,commit},info){
            setTimeout(()=>{
                // let info = {
                //     name: 'wfq',
                //     age: 26
                // }
                // commit('setUserInfo',info)
                state.userInfo = info
            },2000)
        }
    }

    // mutations:{
    //     getUserInfo(state){
    //         let info = {
    //             name: 'wfq',
    //             age: 26
    //         }
    //         state.userInfo = info
    //     }
    // },
    // actions: {}
})
