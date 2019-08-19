export default {
    namespaced: true,
    state: {
        userInfo: {name:'WFQ'}
    },
    getters:{
        getUserInfo(state){
            return state.userInfo
        }
    },
    mutations:{
        setUserInfo(state,info){
            state.userInfo = info
        }
    },
    actions: {
        // 同步设置
        setUserInfoSync({state},info){
            state.userInfo = info
        },
        setUserInfoAsync({commit,dispatch},info){
            setTimeout(()=>{
                let info = {
                    name: 'wfq',
                    age: 26
                }
                commit('setUserInfo',info)
                dispatch('wfq/order/setOrderListByUser',info,{ root: true })
            },2000)
        }
    }
}