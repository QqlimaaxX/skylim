const login = () => import(/* webpackChunkName: "loginPage" */'./login.vue')


export default[
    {
        path:'/login',
        name:'login',
        component:login,
        meta:{
            forVisitors:true
        }
    }
]