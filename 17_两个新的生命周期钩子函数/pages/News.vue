<template>
  <div>
    <ul>
      <li v-for="n in news" :key="n.id">
        <!-- <router-link :to="`/home/news/details?id=${n.id}&title=${n.title}`">{{ n.title }}</router-link> -->
        <router-link :to="{
          // path: '/home/news/details',
          name: 'details',
          params: {
            id: n.id,
            title: n.title
          }
        }">{{ n.title }}</router-link>
        <button @click="pushShow(n)">push查看</button>
        <button @click="replaceShow(n)">replace查看</button>
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
        },
        methods:{
          pushShow(n){
            this.$router.push({
              name: 'details',
              params: {
                id: n.id,
                title: n.title
              }
            })
          },
          replaceShow(n){
            this.$router.replace({
              name: 'details',
              params: {
                id: n.id,
                title: n.title
              }
            })
          },
        }
    }
</script>

<style>

</style>