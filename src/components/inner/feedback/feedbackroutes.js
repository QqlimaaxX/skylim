//lazy loading
const feedback = () => import('./feedback.vue')

// import feedback from './feedback.vue'

export default [
    {
        path: '/app/feedback', 
        name: 'feedback', 
        component: feedback,
    }
]