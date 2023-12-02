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
                            path: 'details',
                            component: Details
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
            path: '/about',
            component: About
        },
    ]
})