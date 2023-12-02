import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const actions = {
    // jia(context, value){
    //     context.commit('JIA', value)
    // },
    // jian(context, value){
    //     context.commit('JIAN', value)
    // },
    jiaOdd(context, value){
        if (context.state.sum % 2) {
            context.commit('JIA', value)
        }
    },
    jiaWait(context, value){
        setTimeout(() => {
            context.commit('JIA', value)
        }, 500);
    }
};
const mutations = {
    JIA(state, value){
        state.sum += value
    },
    JIAN(state, value){
        state.sum -= value
    }
};
const state = {
    sum: 0
}

export default new Vuex.Store({
    actions,
    mutations,
    state
})