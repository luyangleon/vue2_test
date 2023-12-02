<template>
  <div>
    <select v-model.number="n">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
    </select>
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="incrementOdd(n)">为奇数时加</button>
    <button @click="incrementWait(n)">等一会再加</button><br />
    结果为：{{sum}}<br />
    乘以10结果为：{{bigSum}}<br/>
    学校是：{{school}}，学科是：{{subject}}<br/>
    Person组件的总人数是：{{ personList.length }}
  </div>
</template>

<script>
    import {mapGetters, mapState, mapMutations, mapActions} from 'vuex'
    export default {
        name:'Count',
        data(){
            return {
                n:1,
            }
        },
        computed:{
            ...mapState(['sum','school','subject','personList']),
            ...mapGetters(['bigSum'])
        },
        methods:{
            // increment(){
            //     this.$store.commit('JIA', this.n)
            // },
            // decrement(){
            //     this.$store.commit('JIAN', this.n)
            // },
            ...mapMutations({increment:'JIA', decrement:'JIAN'}),
            // incrementOdd(){
            //     this.$store.dispatch('jiaOdd', this.n)
            // },
            // incrementWait(){
            //     this.$store.dispatch('jiaWait', this.n)
            // }
            ...mapActions({incrementOdd:'jiaOdd', incrementWait:'jiaWait'})
        },
        mounted(){
            console.log({...mapState(['sum','school','subject'])});
        }
    }
</script>

<style>
    button {
        margin-left: 5px;
    }
</style>