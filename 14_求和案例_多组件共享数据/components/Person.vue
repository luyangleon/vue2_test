<template>
  <div>
    <h1>人员列表</h1>
    <input type="text" placeholder="请输入名字" v-model="personName">
    <button @click="addPerson">添加</button>
    <ul>
        <li v-for="p in personList" :key="p.id">{{p.name}}</li>
    </ul><br/>
    Count组件的结果是：{{ sum }}
  </div>
</template>

<script>
    import { nanoid } from 'nanoid';
    import {mapState} from 'vuex'
    export default {
        name: 'Person',
        data(){
            return {
                personName: ''
            }
        },
        computed:{
            personList(){
                return this.$store.state.personList
            },
            ...mapState(['sum'])
        },
        methods:{
            addPerson(){
                const person = {id:nanoid(), name: this.personName}
                this.personName = ''
                this.$store.commit('ADD_PERSON', person)
            }
        }
    }
</script>

<style>

</style>