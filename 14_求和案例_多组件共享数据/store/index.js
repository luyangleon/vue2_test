import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
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
            console.log('mutaions中的JIAN被调用：',state,value);
            state.sum -= value
        },
        ADD_PERSON(state, value){
            state.personList.unshift(value)
        }
    },
    state: {
        sum: 0,
        school:'尚硅谷',
        subject:'前端',
        personList:[{id:'001',name:'张三'}]
    },
    getters: {
        bigSum(state){
            return state.sum * 10
        }
    }
})