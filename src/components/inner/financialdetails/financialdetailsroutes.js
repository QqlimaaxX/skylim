//lazy loading

const feeStructure = () => import('./feestructure/feeStructure.vue')
const feepaid = () => import('./feepaid/feepaid.vue')
const feedue = () => import('./feedue/feedue.vue')
const financialDetails = () => import('./financialDetails.vue')


// import feeStructure from './feeStructure/feeStructure.vue';
// import feepaid from './feepaid/feepaid.vue';
// import feedue from './feedue/feedue.vue';
// import financialDetails from './financialDetails.vue';

export default [
	{
		path:'/app/financialdetails',
		name:"financialdetails",
		component:financialDetails,		
	  	children:[{
	        path: 'feeStructure', 
	        name: 'feeStructure', 
	        component: feeStructure
	    },{
	        path: 'feedue', 
	        name: 'feedue', 
	        component: feedue
	    },{
	        path: 'feepaid', 
	        name: 'feepaid', 
	        component: feepaid
	    }]
	}
]