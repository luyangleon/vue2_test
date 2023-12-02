<template>
  <div class="sch">
    <h2>学校名称：{{ name }}</h2>
    <h2 ref="addr">学校地址：{{ address }}</h2>
    <button @click="changeAddr">点击换背景色</button>
  </div>
</template>

<script>
    export default {
        name: 'School',
        data() {
            return {
                name: '尚硅谷',
                address: '北京.昌平'
            }
        },
        methods: {
            changeAddr() {
                this.$refs.addr.style.backgroundColor="pink"
            }
        }
    }
</script>

<style>
    .sch{
        background-color: skyblue;
    }
</style>