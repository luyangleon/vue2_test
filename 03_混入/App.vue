<template>
    <div>
        <School></School>
        <Student name="张三" :age="18"></Student>
    </div>
</template>

<script>
    import School from './components/School.vue'
    import Student from './components/Student.vue'
    export default {
        name: 'App',
        components: {
            School,
            Student
        }
    }
</script>
