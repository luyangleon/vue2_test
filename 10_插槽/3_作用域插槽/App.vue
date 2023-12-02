<template>
    <div class="container">
        <Category title="游戏">
            <template scope="dataList">
                <ul>
                    <li v-for="item in dataList.games" :key="item">{{item}}</li>
                </ul>
                <h4>{{dataList.msg}}</h4>
            </template>
        </Category>

        <Category title="游戏">
            <template scope="dataList">
                <ol>
                    <li v-for="item in dataList.games" :key="item">{{item}}</li>
                </ol>
                <h4>{{dataList.msg}}</h4>
            </template>
        </Category>

        <Category title="游戏">
            <template scope="dataList">
                <h4 v-for="item in dataList.games" :key="item">{{item}}</h4>
                <h4>{{dataList.msg}}</h4>
            </template>
        </Category>
    </div>
</template>

<script>
    import Category from './components/Category'
    export default {
        name: 'App',
        components: {
            Category
        }
    }
</script>

<style>
    .container,.foot{
        display: flex;
        justify-content: space-around;
    }
    h3{
        text-align: center;
        background-color: orange;
    }
    img{
        width: 100%;
        height: 50%;
    }
    video{
        width: 100%;
    }
    h4{
        text-align: center;
    }
</style>