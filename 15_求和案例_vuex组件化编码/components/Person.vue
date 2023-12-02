<template>
  <div>
    <h1>人员列表</h1>
    <input type="text" placeholder="请输入名字" v-model="personName">
    <button @click="addPerson">添加</button>
    <button @click="addPersonWang">添加姓王的</button>
    <button @click="addPersonService">随机添加</button>
    <ul>
        <li v-for="p in personList" :key="p.id">{{p.name}}</li>
    </ul><br/>
    Count组件的结果是：{{ sum }}
  </div>
</template>

<script>
    import { nanoid } from 'nanoid';
    export default {
        name: 'Person',
        data(){
            return {
                personName: ''
            }
        },
        computed:{
            personList(){
                return this.$store.state.personAbout.personList
            },
            sum(){
                return this.$store.state.countAbout.sum
            }
        },
        methods:{
            addPerson(){
                const person = {id:nanoid(), name: this.personName}
                this.personName = ''
                this.$store.commit('personAbout/ADD_PERSON', person)
            },
            addPersonWang(){
                const person = {id:nanoid(), name: this.personName}
                this.personName = ''
                this.$store.dispatch('personAbout/addPersonWang', person)
            },
            addPersonService(){
                this.$store.dispatch('personAbout/addPersonService')
            }
        },
        mounted() {},
    }
</script>

<style>

</style>