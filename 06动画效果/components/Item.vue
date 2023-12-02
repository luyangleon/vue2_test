<template>
  <li class="animate__animated animate__fadeIn" ref="li">
    <label>
      <input type="checkbox" :checked="item.done" @change="handleDone" />&nbsp;&nbsp;
      <span v-show="!item.isEdit">{{item.name}}</span>
      <input v-show="item.isEdit" 
        :value="item.name" 
        @blur="handleBlur(item)"
        ref="editText"
      />
    </label>&nbsp;&nbsp;
    <button @click="handleDelete(item.id,$event)">删除</button>
    <button v-show="!item.isEdit" @click="handleEdit(item)">修改</button>
  </li>
</template>

<script>
import pubsub from 'pubsub-js'
import 'animate.css'
export default {
  name:'Item',
  props:['item'],
  methods: {
    handleDone(){
      // this.changeItem(this.item.id)
      this.$bus.$emit('changeItem', this.item.id)
    },
    handleDelete(id){
      // this.deleteItem(id)
      // this.$bus.$emit('deleteItem', id)
      // 发布删除事件
      pubsub.publish('deleteItem', id)
    },
    handleEdit(item){
      if(Object.prototype.hasOwnProperty.call(item, "isEdit")){
          item.isEdit = true
      } else {
          this.$set(item, "isEdit", true)
      }
      this.$nextTick(()=>{
        this.$refs.editText.focus()
      })
    },
    handleBlur(item, e) {
      item.isEdit = false
      if (!e.target.value.trim()) return alert('不能为空')
      this.$bus.$emit('updateItem', item.id, e.target.value)
    }
  },
}
</script>

<style scoped>
  li:hover {
    background-color: gray;
  }
  li button {
    float: right;
    display: none;
  }
  li:hover button{
    display: block;
  }

</style>