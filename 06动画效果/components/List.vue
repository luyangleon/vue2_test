<template>
  <ul>
    <Item v-for="item in Items" :key="item.id" 
      :item="item"
    />
  </ul>
</template>

<script>
  import Item from './Item'
  export default {
    name:'List',
    components: {
      Item
    },
    props:[
      'Items'
    ]
  }
</script>

<style>

</style>