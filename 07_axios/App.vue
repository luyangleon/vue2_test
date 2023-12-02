<template>
    <div>
        <button @click="getDatas">点击获取数据</button>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'App',
    data() {
        return {
            
        }
    },
    methods: {
        getDatas() {
            axios.get('http://localhost:8080/ly/customer/home/gettestdata').then(
                response => {
                    console.log(response.data)
                },
                error => {
                    console.log(error.message)
                }
            )
        }
    }
}
</script>
