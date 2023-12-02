<template>
  <div>
    <input type="text" v-model="keyWord">
    <button @click="searchUsers">搜索</button>
  </div>
</template>

<script>
    export default {
        name:'Search',
        data() {
            return {
                keyWord: ''
            }
        },
        methods: {
            searchUsers() {
                this.$bus.$emit('getUserList', {isFirst:false, isLoading:true, errMsg:'', users:[]})
                this.$http.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
                    res => {
                        this.$bus.$emit('getUserList', {isLoading:false, errMsg:'', users:res.data.items})
                    },
                    err => {
                        console.log(err.message)
                        this.$bus.$emit('getUserList', {isLoading:false, errMsg:err.message, users:[]})
                    }
                )
            }
        }
    }
</script>

<style>

</style>