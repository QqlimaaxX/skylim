<template>
  <div id="app">
    <v-app id="inspire">
      <v-container fluid grid-list-lg>
        <v-layout row wrap class="text-xs-left">
          <v-flex lg8 offset-lg3 xs12 sm12>
            <v-toolbar class="blue darken" style="border-radius:7px 7px 0px 0px;height:52px">
              <h4>FEES PAID</h4>
            </v-toolbar>
            <div class="outer_part">
              
              <v-container>
                <v-layout row wrap>
                <div class="tableContainer">
                <table class="table">
                  <tr>
                  <th>COLLEGE TRANSACTION ID</th>
                  <th>BANK TRANSACTION ID</th>
                  <th>FEE TYPE</th>
                  <th>TOTAL AMOUNT</th>
                  <th>TRANSACTION ID</th>
				  </tr>
                    
                    <tr v-for="(record,i) in records" :key=i>
                      <td>{{record.clgtrid}}</td>
                      <td>{{record.bnktrid}}</td>
                      <td>{{record.type}}</td>
                      <td>{{record.amt}}</td>
                      <td>{{record.date}}</td>
                    </tr>
                    
                </table>
                </div>
</v-layout>

              </v-container>
            </div>
          </v-flex>
        </v-layout>
      </v-container>
    </v-app>
  </div>
  </template>
  <script>
    export default {
      name:'FeesPaid',
      data() {
        return {

			fields:[],
			records:[
				{
					clgtrid:1142,
					bnktrid:1298,
					type:"Exam",
					amt:2750,
					date:"27/7/18"
				},
				{
					clgtrid:1142,
					bnktrid:1298,
					type:"Exam",
					amt:2750,
					date:"27/7/18"
				},
				{
					clgtrid:1142,
					bnktrid:1298,
					type:"Exam",
					amt:2750,
					date:"27/7/18"
				},
				{
					clgtrid:1142,
					bnktrid:1298,
					type:"Exam",
					amt:2750,
					date:"27/7/18"
				}
			]
        }
      }

    }

  </script>
  <style scoped>
    @import './../../style.css';
  </style>
