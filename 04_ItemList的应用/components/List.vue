<template>
  <ul>
    <Item v-for="item in Items" :key="item.id" 
      :item="item"
      :changeItem="changeItem" 
      :deleteItem="deleteItem"
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
      'Items',
      'changeItem',
      'deleteItem'
    ]
  }
</script>

<style>

</style>