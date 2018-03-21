<template>
	<div class='ui container segment'>
      <h2>PROFILE PAGE</h2>
      <router-link :to="{name:'general'}" class="ui button">General</router-link>
      <router-link :to="{name:'update'}" class="ui button">Update</router-link>
      <router-link :to="{name:'hostels'}" class="ui button">Hostels</router-link>
      <router-link :to="{name:'transport'}" class="ui button">Transport</router-link>
      <hr>
      <router-view></router-view>
	</div>
</template>