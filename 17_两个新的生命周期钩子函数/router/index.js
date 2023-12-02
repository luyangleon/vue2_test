import VueRouter from "vue-router";
import Home from '../pages/Home'
import About from '../pages/About'
import News from '../pages/News'
import Messages from '../pages/Messages'
import Details from '../pages/Details'

export default new VueRouter({
    routes: [
        {
            path: '/home',
            component: Home,
            children: [
                {
                    path: 'news',
                    component: News,
                    children: [
                        {
                            name: 'details',
                            path: 'details/:id/:title',
                            component: Details,
                            props($route){
                                return {
                                    id: $route.params.id,
                                    title: $route.params.title
                                }
                                
                            }
                        }
                    ]
                },
                {
                    path:'messages',
                    component: Messages
                }
            ]
        },
        {
            name: 'guanyu',
            path: '/about',
            component: About
        },
    ]
})