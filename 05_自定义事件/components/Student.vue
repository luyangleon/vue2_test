<template>
  <div class="sch">
    <h2>学生名称：{{ StudentName }}</h2>
    <h2 ref="addr">年龄：{{ age }}</h2>
    <button @click="sendStudentName">显示学生名称</button>
    <button @click="unbind">点击解绑事件</button>
  </div>
</template>

<script>
    export default {
        name: 'Student',
        props: {
            StudentName: {
                type: String,
                required: true
            },
            age: {
                type: Number,
                required: true
            }
        },
        methods: {
            sendStudentName() {
                this.$emit('CallStudent', this.StudentName, '18', 'male', 'dfy')
            },
            unbind(){
                this.$off(['CallStudent'])
            }
        }
    }
</script>

<style>
    .sch{
        background-color: skyblue;
    }
</style>