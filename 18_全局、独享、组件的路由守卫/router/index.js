import VueRouter from "vue-router";
import Home from '../pages/Home'
import About from '../pages/About'
import News from '../pages/News'
import Messages from '../pages/Messages'
import Details from '../pages/Details'

const router = new VueRouter({
    routes: [
        {
            path: '/home',
            component: Home,
            meta:{title:'主页'},
            children: [
                {
                    path: 'news',
                    component: News,
                    meta:{isAuth:true,title:'新闻'},
                    children: [
                        {
                            name: 'details',
                            path: 'details/:id/:title',
                            component: Details,
                            meta:{title:'详情'},
                            props($route){
                                return {
                                    id: $route.params.id,
                                    title: $route.params.title
                                }
                                
                            },
                            // 独享路由守卫
                            beforeEnter(to,from,next){
                                console.log('调用独享前置路由守卫')
                                if (localStorage.getItem('lg') === 'ly') {
                                    next()
                                } else {
                                    alert('lg不对！！！')
                                }
                            }
                        }
                    ]
                },
                {
                    path:'messages',
                    component: Messages,
                    meta:{isAuth:true,title:'消息'},
                }
            ]
        },
        {
            name: 'guanyu',
            path: '/about',
            component: About,
            meta:{title:'关于'}
        },
    ]
})

// 全局前置路由守卫
router.beforeEach((to,from,next) => {
    console.log('调用全局前置路由守卫')
    if (to.meta.isAuth) {
        if (localStorage.getItem('name') === 'luyang' 
        || localStorage.getItem('name') === 'dfy') {
            next()
        } else {
            alert('无操作权限！')
        }
    } else {
        next()
    }
})
// 全局后置路由守卫
router.afterEach((to, from) => {
    console.log('调用全局后置路由守卫')
    document.title = to.meta.title
})

export default router