<template>
  <div>
    <ul>
      <li v-for="n in news" :key="n.id">
        <!-- <router-link :to="`/home/news/details?id=${n.id}&title=${n.title}`">{{ n.title }}</router-link> -->
        <router-link :to="{
          path: '/home/news/details',
          query: {
            id: n.id,
            title: n.title
          }
        }">{{ n.title }}</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
    export default {
        name:'News',
        data(){
          return{
              news:[
                {id:'001',title:'news1'},
                {id:'002',title:'news2'},
                {id:'003',title:'news3'},
                {id:'004',title:'news4'}
              ]
          }
        }
    }
</script>

<style>

</style>