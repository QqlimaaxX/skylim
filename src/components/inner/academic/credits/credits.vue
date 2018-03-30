<template>
  <div id="app">
    <v-app id="inspire">
      <v-container fluid grid-list-lg>
        <v-layout row wrap class="text-xs-left">
          <v-flex lg8 offset-lg3 xs12 sm12>
            <v-toolbar class="blue darken" style="border-radius:7px 7px 0px 0px;height:52px">
              <h4>CREDITS</h4>
            </v-toolbar>
            <div class="outer_part">
              
              <v-container>
                <v-layout row wrap>
              
                <div style="overflow-x:scroll;">
                <table class="table">
                  <tr>
                  <th>COURSE CODE</th>
                  <th>COURSE TITLE</th>
                  <th>TOTAL CREDITS</th>
                  <th>GRADE</th>
                  <th>GRADE POINT</th>
				  </tr>
                    
                    <tr v-for="(record,i) in records" :key=i>
                      <td>{{record.code}}</td>
                      <td>{{record.title}}</td>
                      <td>{{record.creds}}</td>
                      <td>{{record.grade}}</td>
                      <td>{{record.gradept}}</td>
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
      name:'credits',
      data() {
        return {
			records:[
			{
				code:"15SE203",
				title:"Software Engineering Principles",
				creds:3,
				grade:"A+",
				gradept:9
			},
			{
				code:"15SE203",
				title:"Mobile Application Development",
				creds:3,
				grade:"A+",
				gradept:9
			},
			{
				code:"15SE203",
				title:"Computer Networks",
				creds:3,
				grade:"A+",
				gradept:9
			},
			{
				code:"15SE203",
				title:"Computer System Architecture",
				creds:3,
				grade:"A+",
				gradept:9
			}
			]
        }
      }

    }

  </script>
  <style scoped>
    @import './../../style.css';

  </style>
