<template>
  <div class="category">
    <h3>{{title}}</h3>
    <slot name="center">插槽1</slot>
    <slot name="footer">插槽2</slot>
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