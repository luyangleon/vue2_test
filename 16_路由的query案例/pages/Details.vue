<template>
  <div>
    新闻ID：{{ $route.query.id }}<br />
    新闻标题：{{ $route.query.title }}
  </div>
</template>

<script>
    export default {
        name:'Details'
    }
</script>

<style>

</style>