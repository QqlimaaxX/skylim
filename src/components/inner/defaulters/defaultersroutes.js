//lazy loading

const defaulters = () => import('./defaulters.vue')
const malpractice = () => import('./malpractice/malpractice.vue')
const misbehaviour = () => import('./misbehaviour/misbehaviour.vue')
const detention = () => import('./detention/detention.vue')

// import malpractice from './malpractice/malpractice.vue'
// import misbehaviour from './misbehaviour/misbehaviour.vue'
// import detention from './detention/detention.vue'
// import defaulters from './defaulters.vue'

export default [
	{
		path:"defaulters",
		name:"defaulters",
		component:defaulters,
		children:[{
	        path: 'malpractice', 
	        name: 'malpractice', 
	        component: malpractice
		},{
	        path: 'detention', 
	        name: 'detention', 
	        component: detention
		},{
	        path: 'misbehaviour', 
	        name: 'misbehaviour', 
	        component: misbehaviour
		}
		],
    }
]