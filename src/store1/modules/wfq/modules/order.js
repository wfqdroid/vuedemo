export default {
    namespaced: true,
    state: {
        orderList:[]
    },
    getters:{

    },
    mutations:{

    },
    actions: {
        setOrderListByUser({state},userInfo){
            if(userInfo.name === 'wfq'){
                let orderlist = ['order1','order2']
                state.orderList = orderlist
            }

        }

    }
}