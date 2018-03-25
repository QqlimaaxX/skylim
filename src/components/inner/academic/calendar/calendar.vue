<template>
	<!-- Events Start-->
	<div class="ui padded grid stackable">
		<div class="sixteen wide column">
			<div class="ui seven column center aligned grid">
				<div class="ui sixteen wide column center aligned">
						<div class="ui icon left floated button" @click=prevMonth><i class="chevron left icon"></i></div>
						<span class="calender-title" id="title-graident-box">{{currentMonth.toUpperCase()}} {{currentYear}}</span>
						<div class="ui icon right floated button" @click=nextMonth><i class="chevron right icon"></i></div>
				</div>
				<div v-for="day in days" class="middle aligned column cal-title"><b>{{day}}</b></div>
				<div class="column" v-for="day in firstemptyDays" :class="{holiday:day==1||day==7}"></div>
				<div class="left aligned column" style="height: 150px;" v-for="day in daysInMonth" :class="{holiday:(firstemptyDays+day)%7==0||(firstemptyDays+day)%7==1||holidaysThisMonth[day]}">
					<span :class="{'ui circular blue label':eventsThisMonth[day],'ui circular green label':realtoday.date()==day && realtoday.year()==currentYear && realtoday.format('MMM')==currentMonth}">{{day}}</span>				
					<ul>
						<li v-for="event in eventsThisMonth[day]">{{event.title}}</li>
					</ul>
				</div>
				<div class="middle aligned column" v-for="day in lastemptyDays"></div>
			</div>
		</div>
	</div>
	<!-- Events End-->
</template>


<script>
	var axios = require('axios');
	var moment = require('moment');

	export default{
		data(){
			return{
			  	currentMonth:moment().format("MMM"),
			  	currentYear:moment().format("YYYY"),
			  	realtoday:moment(),
			  	selectedEvent:'',
				newz:[],
			    events:[],
			    days:['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
			    holidaysThisMonth:{29:true,30:true}
	  		}
		},
		computed:{
		  	daysInMonth:function(){
		  		return this.currentContext().daysInMonth();
		  	},
		  	firstemptyDays:function(){
		  		return this.currentContext().date(1).day();
		  	},
		  	lastemptyDays:function(){
				return 7-this.currentContext().endOf("month").day();		  		
		  	},
		  	eventsThisMonth:function(){
		  		var that = this;
			  		var newEvents = this.events.map(function(event){
			  			event.date = moment(event.date,"YYYY-MM-DD");
			  			if(event.date.format("MMM")==that.currentMonth && event.date.year()==that.currentYear){
			  				return event;
			  			}
			  		});
			  		var eventsThisMonth={}
			  		newEvents.forEach(function(event){
			  			if(event){
			  				if(!eventsThisMonth[event.date.date()]){
			  					eventsThisMonth[event.date.date()]=[];
			  				}
				  			eventsThisMonth[event.date.date()].push(event);
			  			}
			  		})
			  		return eventsThisMonth;
		  	}
		},
	 	methods:{
		  	prevMonth:function(){
		  		this.currentYear = this.currentContext().add(-1,'month').format("YYYY");
		  		this.currentMonth = this.currentContext().add(-1,'month').format("MMM");
		  		console.log(this.currentMonth+this.currentYear);
		  	},
		  	nextMonth:function(){
		  		this.currentYear = this.currentContext().add(1,'month').format("YYYY");
		  		this.currentMonth = this.currentContext().add(1,'month').format("MMM");
		  		console.log(this.currentMonth+this.currentYear);
		  	},
		  	currentContext:function(){
		  		return moment(this.currentMonth+this.currentYear,"MMMYYYY")
		  	},
		  	moment:function(){
		  		return moment();
		  	}
		},
		created:function(){
		  	var that=this
		  	axios.get('http://srmdsa.org/api/events').then(function(resp){
	  			that.events = resp.data;
		  	});
		}
	}

</script>

<style>
	
.cal-title{
	background: #222B4A;
	color:white;
}

.holiday{
	background: #E4E8F3;
}

ul{
	padding:0;
	list-style-type: none;
	display:inline-block;
	font-size: 70%;
}
</style>