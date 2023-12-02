<template>
  <div>
    <router-link active-class="active" to="/home">Home</router-link>&nbsp;
    <router-link active-class="active" :to="{name:'guanyu'}">About</router-link>

    <router-view></router-view>
  </div>
</template>

<script>
    export default {
        name: 'App'
    }
</script>

<style>

</style>