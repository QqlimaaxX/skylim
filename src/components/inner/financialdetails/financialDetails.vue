<template>
	<div class='financialDetails'>
      <!-- <h2>FinancialDetails</h2>
      <router-link :to="{name:'feestructure'}" class="ui button">FeeStructure</router-link>
      <router-link :to="{name:'feedue'}" class="ui button">FeeStructure</router-link>
      <router-link :to="{name:'feepaid'}" class="ui button">FeeStructure</router-link>
      <hr> -->
      <router-view></router-view>
	</div>
</template>

<script>
	export default{
		name:"FinancialDetails"
	}
</script>