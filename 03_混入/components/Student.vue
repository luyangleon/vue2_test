<template>
  <div class="sch">
    <h2 class="atguigu">学生名称：{{ name }}</h2>
    <h2 ref="addr">年龄：{{ age }}</h2>
    <button @click="showName(name)">显示学生名称</button>
  </div>
</template>

<script>
    import {hunru} from '../mixin'
    export default {
        name: 'Student',
        props: {
            name: {
                type: String,
                required: true
            },
            age: {
                type: Number,
                required: true
            }
        },
        mixins: [hunru]
    }
</script>

<style lang="less">
    .sch{
        background-color: orange;
        .atguigu{
            font-size:40px;
        }
    }
</style>