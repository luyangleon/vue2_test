<template>
    <div>
        <School :getSchoolName="getSchoolName" @click.native="clickSchool" />
        <Student StudentName="luyang" 
            :age="18" 
            ref="student"
            @CallStudent="getStudentName"
        />
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
        },
        methods: {
            getSchoolName(name){
                console.log(name)
            },
            getStudentName(name, ...params){
                console.log(name,params)
            },
            clickSchool(){
                alert('点击School组件')
            }
        },
        mounted(){
            // this.$refs.student.$on('CallStudent', this.getStudentName)
        }
    }
</script>
