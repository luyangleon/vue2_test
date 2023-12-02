<template>
  <div class="category">
    <h3>{{title}}</h3>
    <slot :games="games" msg="hello">插槽1</slot>
  </div>
</template>

<script>
    export default {
        name: 'Category',
        props: ['title'],
        data() {
            return {
                foods: ['火锅','烤鱼','小龙虾','牛排'],
                games: ['红色警戒','英雄联盟','劲舞团','超级马里奥'],
                films: ['《教父》','《拆弹专家》','《你好，李焕英》','《肖申克的救赎》']
            }
        }
    }
</script>

<style>
    .category{
        background-color: skyblue;
        width: 200px;
        height: 300px;
    }
</style>