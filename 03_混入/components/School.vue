<template>
  <div class="sch">
    <h2>学校名称：{{ name }}</h2>
    <h2 ref="addr">学校地址：{{ address }}</h2>
    <button @click="showName(name)">点击调用混入方法</button>
  </div>
</template>

<script>
    import {hunru} from '../mixin.js'
    export default {
        name: 'School',
        data() {
            return {
                name: '尚硅谷',
                address: '北京.昌平'
            }
        },
        mixins: [hunru]
    }
</script>

<style scoped>
    .sch{
        background-color: skyblue;
    }
</style>