<template>
  <div>
    <!--展示欢迎词-->
    <div v-show="info.isFirst">
        <h1>欢迎使用</h1>
        <h1>Github Search</h1>
    </div>
    <!--展示列表-->
    <div v-show="info.users.length" v-for="user in info.users" :key="user.login">
        <a :href="user.html_url" target="_blank">
            <img :src="user.avatar_url" alt="user.login">
            {{user.login}}
        </a>
        <hr />
    </div>
    <!--展示加载中-->
    <div v-show="info.isLoading">
        <h1>加载中...</h1>
    </div>
    <!--展示加载错误信息-->
    <div v-show="info.errMsg">
        <h1>{{info.errMsg}}</h1>
    </div>
  </div>
</template>

<script>
    export default {
        name:'List',
        data() {
            return {
                info: {
                    isFirst: true,
                    isLoading: false,
                    errMsg: '',
                    users: []
                }
            }
        },
        mounted() {
            this.$bus.$on('getUserList', (data)=>{
                this.info = {...this.info, ...data}
            })
        }
    }
</script>

<style scoped>
    img{
        width: 100px;
        height: 100px;
    }
</style>