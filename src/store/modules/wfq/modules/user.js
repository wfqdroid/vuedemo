export default {
    namespaced: true,
    state: {
        userInfo: {}
    },
    // 同步操作最好放在这里
    // mutations: {
    //     setUserInfo(state, userinfo) {
    //         state.userinfo = userinfo
    //     }
    // },
    // 异步操作最好放在这里
    actions: {
        getUserInfo({state}) {
            setTimeout(() => {
                let userinfo = {
                    name: 'wfq',
                    age: '26'
                }
                state.userInfo = userinfo
                // commit('setUserInfo', userinfo)
            }, 2000)
        }
    }
}