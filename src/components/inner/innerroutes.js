import academicroutes from './academic/academicroutes.js';
import defaultersroutes from './defaulters/defaultersroutes.js';
import feedbackroutes from './feedback/feedbackroutes.js';
import financialdetailsroutes from './financialdetails/financialdetailsroutes.js';
import profileroutes from './profile/profileroutes.js';

export default[
	...academicroutes,
	...defaultersroutes,
	...feedbackroutes,
	...financialdetailsroutes,
	...profileroutes
]