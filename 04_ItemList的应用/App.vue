<template>
    <div>
        <Top :addItem="addItem" />
        <List :Items="Items" 
            :changeItem="changeItem" 
            :deleteItem="deleteItem" 
        />
        <Bottom :Items="Items" 
            :checkAll="checkAll"
            :deleteAll="deleteAll" 
        />
    </div>
</template>

<script>
    import Top from './components/Top'
    import List from './components/List'
    import Bottom from './components/Bottom'
    export default {
        name: 'App',
        components: {
            Top,
            List,
            Bottom
        },
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
            deleteItem(id){
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
    }
</script>
