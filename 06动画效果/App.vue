<template>
    <div>
        <Top @addItem="addItem" />
        <List :Items="Items" 
        />
        <Bottom :Items="Items" 
            @checkAll="checkAll"
            @deleteAll="deleteAll" 
        />
    </div>
</template>

<script>
import pubsub from 'pubsub-js'
import Top from './components/Top'
import List from './components/List'
import Bottom from './components/Bottom'
export default {
    name: 'App',
    components: { Top, List, Bottom },
    data() {
        return {
            Items:JSON.parse(localStorage.getItem('Items')) || []
        }
    },
    methods: {
        addItem(newItem){
            this.Items.unshift(newItem)
        },
        changeItem(id){                
            this.Items.forEach(e=>{
                if (e.id === id){
                    e.done =!e.done
                }
            })
        },
        deleteItem(_, id){
            this.Items = this.Items.filter((e) => {
                return e.id !== id
            })
        },
        checkAll(isChecked){
            this.Items.forEach((e) => {
                e.done = isChecked
            })
        },
        deleteAll(){
            return this.Items = this.Items.filter((e) => !e.done)
        },
        updateItem(id, name){
            this.Items.forEach((e)=>{
                if (e.id === id) {
                    e.name = name
                }
            })
        }
    },
    watch: {
        Items: {
            handler(newVal, oldVal) {
                localStorage.setItem('Items', JSON.stringify(newVal))
            },
            deep: true
        }
    },
    mounted() {
        this.$bus.$on('changeItem', this.changeItem)
        // this.$bus.$on('deleteItem', this.deleteItem)
        this.pubId = pubsub.subscribe('deleteItem', this.deleteItem)
        this.$bus.$on('updateItem', this.updateItem)
    },
    beforeDestroy(){
        this.$bus.$off(['changeItem'])
        pubsub.unsubscribe(this.pubId)
    }
}
</script>
