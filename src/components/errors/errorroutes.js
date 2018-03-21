//lazy loading
const fnf = () => import('./fnf.vue')

// import fnf from './fnf.vue'

export default [
    {
        path: '*', 
        name: 'fnf',
        component:fnf
    },
]