<template>
  <div v-show="total">
    <!-- <input type="checkbox" :checked="isAll" @change="changeAll"> -->
    <input type="checkbox" v-model="isAll">
    已完成{{ totalDone }} / 全部{{ total }}
    <button @click="clearAll">删除已完成</button>
  </div>
</template>

<script>
    export default {
      name:'Bottom',
      props:[
        'Items'
      ],
      data() {
        return {
        }
      },
      computed:{
        total(){
          return this.Items.length
        },
        totalDone(){
          return this.Items.reduce((pre, current)=>{
            return pre + (current.done ? 1 : 0)
          }, 0)
        },
        isAll:{
          get() {
            return this.total === this.totalDone && this.total > 0
          },
          set(value)
          {
            // this.checkAll(value)
            this.$emit('checkAll', value)
          }
        }
      },
      methods: {
        clearAll() {
          // this.deleteAll()
          this.$emit('deleteAll')
        }
      }
    }
</script>

<style>

</style>