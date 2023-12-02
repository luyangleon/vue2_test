<template>
  <div>
    <h2>这是Home页面</h2>
    <button @click="back">后退</button>
    <button @click="forward">前进</button>
    <button @click="testGo">go</button>
    <router-link to="/home/news" active-class="active">News</router-link>&nbsp;
    <router-link to="/home/messages" active-class="active">Messages</router-link>
    <!-- <keep-alive include="Messages"> -->
    <keep-alive :include="['Messages']">
      <router-view></router-view>    
    </keep-alive>
  </div>
</template>

<script>
    export default {
        name:'Home',
        methods:{
          back(){
            this.$router.back()
          },
          forward(){
            this.$router.forward()
          },
          testGo(){
            this.$router.go(-1)
          }
        }
    }
</script>

<style>

</style>