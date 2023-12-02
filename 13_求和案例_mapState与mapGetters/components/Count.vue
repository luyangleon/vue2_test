<template>
  <div>
    <select v-model.number="n">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">为奇数时加</button>
    <button @click="incrementWait">等一会再加</button><br />
    结果为：{{sum}}<br />
    乘以10结果为：{{bigSum}}<br/>
    学校是：{{school}}，学科是：{{subject}}
  </div>
</template>

<script>
    import {mapGetters, mapState} from 'vuex'
    export default {
        name:'Count',
        data(){
            return {
                n:1,
            }
        },
        computed:{
            // ...mapState({he:'sum', xuexiao:'school', xueke:'subject'}),
            ...mapState(['sum','school','subject']),
            // bigSum(){
            //     return this.$store.getters.bigSum
            // }
            ...mapGetters(['bigSum'])
        },
        methods:{
            increment(){
                this.$store.commit('JIA', this.n)
            },
            decrement(){
                this.$store.commit('JIAN', this.n)
            },
            incrementOdd(){
                this.$store.dispatch('jiaOdd', this.n)
            },
            incrementWait(){
                this.$store.dispatch('jiaWait', this.n)
            }
        },
        mounted(){
            console.log(mapState({he:'sum', xuexiao:'school', xueke:'subject'}));
        }
    }
</script>

<style>
    button {
        margin-left: 5px;
    }
</style>