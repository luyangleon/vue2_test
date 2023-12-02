import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        sum: 0,
        school:'尚硅谷',
        subject:'前端'
    },
    actions: {
        jia({context, value}){
            context.commit('JIA', value)
        },
        jian(context, value){
            context.commit('JIAN', value)
        },
        jiaOdd({commit, state}, value){
            if (state.sum % 2){
                commit('JIA', value)
            }
        },
        jiaWait(context, value){
            setTimeout(() => {
                context.commit('JIA', value)
            }, 500)
        }
    },
    mutations: {
        JIA(state, value){
            state.sum += value
        },
        JIAN(state, value){
            state.sum -= value
        }
    },
    getters: {
        bigSum(state){
            return state.sum * 10
        }
    }
})