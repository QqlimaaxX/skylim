<template>
  <div id="app">
    <v-app id="inspire">
      <v-container fluid grid-list-lg>
        <v-layout row wrap class="text-xs-left">
          <v-flex lg8 offset-lg3 xs12 sm12>
            <v-toolbar class="blue darken" style="border-radius:7px 7px 0px 0px;height:52px">
              <h4>MISBEHAVIOUR RECORD</h4>
            </v-toolbar>
            <div class="outer_part">
              
              <v-container>
                <v-layout row wrap>
                <div>
                <table class="table">
                  <tr>
                  <th>DATE</th>
                  <th>DESCRIPTION</th>
                  <th>PUNISHMENT</th>
				  </tr>
                    
                    <tr v-for="(record,i) in records" :key=i>
                      <td>{{record.date}}</td>
                      <td>{{record.desc}}</td>
                      <td>{{record.pun}}</td>
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
      name:'Misbehaviour',
      data() {
        return {

			fields:[],
			records:[
				{
					date:"29/9/15",
					desc:"Copying in exam Non esse tempor nostrud magna pariatur reprehenderit enim.",
					pun:"Detained Ea sint est nostrud exercitation do ipsum et labore dolore cillum deserunt velit occaecat sit."
				},
				{
					date:"29/9/15",
					desc:"Copying in exam",
					pun:"Detained"
				},
				{
					date:"29/9/15",
					desc:"Copying in exam",
					pun:"Detained"
				},
				{
					date:"29/9/15",
					desc:"Copying in exam",
					pun:"Detained"
				},
				{
					date:"29/9/15",
					desc:"Copying in exam",
					pun:"Detained"
				}
			]
        }
      }

    }

  </script>
  <style scoped>
    @import './../../style.css';
  </style>
