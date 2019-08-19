import Vue from 'vue'
import Vuex from 'vuex'
import wfq from './modules/wfq'
Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        wfq
    }
})