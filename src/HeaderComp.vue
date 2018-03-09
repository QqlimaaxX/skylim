<template>
	<div>
	<div class="ui horizontal segments">
		<router-link class="ui center aligned segment" to="/profile">Profile</router-link>
		<router-link class="ui center aligned segment" to="/defaulters">Defaulters</router-link>
		<router-link class="ui center aligned segment" to="/financialdetails">Financial Details</router-link>
		<router-link class="ui center aligned segment" to="/academic">Academic</router-link>
		<router-link class="ui center aligned segment" to="/feedback">Feedback</router-link>
	</div>
	<h2 class="ui container segment">Current Path-{{$route.path}}</h2>
	</div>
</template>