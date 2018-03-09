//lazy loading
const update = () => import('./update/update.vue')
const general = () => import('./general/general.vue')
const profile = () => import('./profile.vue')
const hostels = () => import('./hostels/hostels.vue')
const transport = () => import('./transport/transport.vue')


// import update from './update/update.vue'
// import general from './general/general.vue'
// import profile from './profile.vue'
// import hostels from './hostels/hostels.vue'
// import transport from './transport/transport.vue'

export default [
    {
        path: '/profile', 
        name: 'profile', 
        component: profile,
        children:[{
            path: 'general', 
            name: 'general', 
            component: general
            },
            {
            path: 'update', 
            name: 'update', 
            component: update
            },
            {
            path: 'hostels', 
            name: 'hostels', 
            component: hostels
            },
            {
            path: 'transport', 
            name: 'transport', 
            component: transport
            }
        ]
    },
]