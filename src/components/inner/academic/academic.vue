<template>
	<div class='ui container segment'>
      <h2>Academic</h2>
      <router-link :to="{name:'attendance'}" class="ui button">Attendance</router-link>
      <router-link :to="{name:'arrears'}" class="ui button">Arrears</router-link>
      <router-link :to="{name:'credits'}" class="ui button">Credits</router-link>
      <router-link :to="{name:'performance'}" class="ui button">Performance</router-link>
      <router-link :to="{name:'syllabus'}" class="ui button">Syllabus</router-link>
      <router-link :to="{name:'calendar'}" class="ui button">Calendar</router-link>
      <hr>
      <router-view></router-view>
	</div>
</template>

<script>
	export default{
		name:"Academic"
	}
</script>