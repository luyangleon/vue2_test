<template>
    <!-- <input type="text" @change="add"> -->
    <input type="text" @keyup.enter="add">
</template>

<script>
    import {nanoid} from 'nanoid'
    export default {
        name:'Top',
        methods: {
            add(e){
                const newItem = {id:nanoid(), name:e.target.value, done:false}
                this.$emit('addItem', newItem)
                e.target.value = ''
            }
        },
    }
</script>

<style>

</style>