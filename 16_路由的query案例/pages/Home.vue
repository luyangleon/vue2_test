<template>
  <div>
    <h2>这是Home页面</h2>
    <router-link to="/home/news" active-class="active">News</router-link>&nbsp;
    <router-link to="/home/messages" active-class="active">Messages</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
    export default {
        name:'Home'
    }
</script>

<style>

</style>