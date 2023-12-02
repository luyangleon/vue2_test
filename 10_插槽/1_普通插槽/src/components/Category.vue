<template>
  <div class="category">
    <h3>{{title}}</h3>
    <slot></slot>
  </div>
</template>

<script>
    export default {
        name: 'Category',
        props: ['title']
    }
</script>

<style>
    .category{
        background-color: skyblue;
        width: 200px;
        height: 300px;
    }
</style>