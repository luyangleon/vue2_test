<template>
    <div class="container">
        <Category title="美食">
            <img slot="center" src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F257de8c4-1239-41db-a86e-0a3ceab39a5a%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1703911234&t=b4bd6708b7f96bc2964026892da27c83" alt="">
            <a slot="footer" href="http://www.baidu.com">更多美食</a>
        </Category>
        
        <Category title="游戏">
            <ul slot="center">
                <li v-for="item in games" :key="item">{{item}}</li>
            </ul>
            <div class="foot" slot="footer">
                <a href="http://www.baidu.com">单机游戏</a>
                <a href="http://www.baidu.com">网络游戏</a>
            </div>
        </Category>
        
        <Category title="电影">
            <video slot="center" controls src="https://v.qq.com/x/page/l0047xa7xjt.html"></video>
            <template v-slot:footer>
            <div class="foot">
                <a href="http://www.baidu.com">热门</a>
                <a href="http://www.baidu.com">经典</a>
                <a href="http://www.baidu.com">推荐</a>
            </div>
            <h4>欢迎观影</h4>
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
        },
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