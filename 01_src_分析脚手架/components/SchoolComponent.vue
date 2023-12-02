
<template>
<div>
    <h2>{{name}}</h2>
    <h2>{{address}}</h2>
    <hr />
    <StudentComponent></StudentComponent>
</div>
</template>

<script>
import StudentComponent from './StudentComponent.vue'
    export default {
        name: 'SchoolComponent',
        data() {
            return {
                name: '尚硅谷',
                address: '北京'
            }
        },
        components: {
            StudentComponent
        }
    }
</script>

<style>
    .demo {
        background-color: orange;
    }
</style>