<template>
	<div>
		<div class="ui horizontal segments">
			<router-link class="ui center aligned segment" :to="{name:'profile'}">Profile</router-link>
			<router-link class="ui center aligned segment" :to="{name:'defaulters'}">Defaulters</router-link>
			<router-link class="ui center aligned segment" :to="{name:'financialdetails'}">Financial Details</router-link>
			<router-link class="ui center aligned segment" :to="{name:'academic'}">Academic</router-link>
			<router-link class="ui center aligned segment" :to="{name:'feedback'}">Feedback</router-link>
		</div>
		<h2 class="ui container segment">Current Path-{{$route.path}}</h2>
	</div>
</template>