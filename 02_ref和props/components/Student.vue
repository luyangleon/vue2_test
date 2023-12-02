<template>
  <div class="sch">
    <h2>学生名称：{{ StudentName }}</h2>
    <h2 ref="addr">年龄：{{ age }}</h2>
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
        }
    }
</script>

<style>
    .sch{
        background-color: skyblue;
    }
</style>