<template>
  <div>
    新闻ID：{{id}}<br />
    新闻标题：{{title}}
  </div>
</template>

<script>
    export default {
        name:'Details',
        props: ['id', 'title']
    }
</script>

<style>

</style>