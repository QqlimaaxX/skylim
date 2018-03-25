//lazy loading
const attendance = () => import('./attendance/attendance.vue')
const arrears = () => import('./arrears/arrears.vue')
const credits = () => import('./credits/credits.vue')
const performance = () => import('./performance/performance.vue')
const syllabus = () => import('./syllabus/syllabus.vue')
const calendar = () => import('./calendar/calendar.vue')
const academic = () => import('./academic.vue')

// import attendance from './attendance/attendance.vue';
// import arrears from './arrears/arrears.vue';
// import credits from './credits/credits.vue';
// import performance from './performance/performance.vue';
// import syllabus from './syllabus/syllabus.vue';
// import calendar from './calendar/calendar.vue';
// import academic from './academic.vue';

export default [
  	{	
  		path:"academic",
  		name:"academic",
  		component:academic,
  		children:[{
	        path: 'attendance',
	        name: 'attendance', 
	        component: attendance
  		},{
	        path: 'arrears', 
	        name: 'arrears', 
	        component: arrears
  		},{
	        path: 'credits', 
	        name: 'credits', 
	        component: credits
  		},{
	        path: 'calendar', 
	        name: 'calendar', 
	        component: calendar
  		},{
	        path: 'performance', 
	        name: 'performance', 
	        component: performance
  		},{
	        path: 'syllabus', 
	        name: 'syllabus', 
	        component: syllabus
  		}]
    }
]