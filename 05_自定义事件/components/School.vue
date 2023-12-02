<template>
  <div class="sch">
    <h2>学校名称：{{ name }}</h2>
    <h2 ref="addr">学校地址：{{ address }}</h2>
    <button @click="sendSchoolName">显示学校名称</button>
  </div>
</template>

<script>
    export default {
        name: 'School',
        props:['getSchoolName'],
        data() {
            return {
                name: '尚硅谷',
                address: '北京.昌平'
            }
        },
        methods: {
            sendSchoolName() {
                this.getSchoolName(this.name)
            }
        }
    }
</script>

<style>
    .sch{
        background-color: skyblue;
    }
</style>