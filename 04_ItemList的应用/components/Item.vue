<template>
  <li>
    <label>
      <input type="checkbox" :checked="item.done" @change="handleDone" />&nbsp;&nbsp;
      <span>{{item.name}}</span>
    </label>&nbsp;&nbsp;
    <button @click="handleDelete(item.id)">删除</button>
  </li>
</template>

<script>
    export default {
      name:'Item',
      props:['item',
        'changeItem',
        'deleteItem'
      ],
      methods: {
        handleDone(){
          this.changeItem(this.item.id)
        },
        handleDelete(id){
          this.deleteItem(id)
        }
      },
    }
</script>

<style>
  li:hover {
    background-color: gray;
  }
  li button {
    display: none;
  }
  li:hover button{
    display: block;
  }
</style>