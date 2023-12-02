<template>
    <div>
      <h2>这是About页面</h2>
    </div>
  </template>
  
  <script>
      export default {
          name:'About',
          // 进入组件内路由守卫
          beforeRouteEnter (to, from, next) {
            console.log('进入组件内路由被调用');
            next()
          },
          // 离开组件内路由守卫
          beforeRouteLeave (to, from, next) {
            console.log('离开组件内路由被调用');
            next()
          }
      }
  </script>
  
  <style>
  
  </style>