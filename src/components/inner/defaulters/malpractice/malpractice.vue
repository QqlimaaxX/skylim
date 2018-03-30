<template>
  <div id="app">
    <v-app id="inspire">
      <v-container fluid grid-list-lg>
        <v-layout row wrap class="text-xs-left">
          <v-flex lg8 offset-lg3 xs12 sm12>
            <v-toolbar class="blue darken" style="border-radius:7px 7px 0px 0px;height:52px">
              <h4>MALPRACTICE RECORD</h4>
            </v-toolbar>
            <div class="outer_part">
              
              <v-container>
                <v-layout row wrap>
                <div>
                <table class="table">
                  <tr>
                  <th>COURSE CODE</th>
                  <th>COURSE TITLE</th>
                  <th>EXAM DATE</th>
                  <th>SEMESTER</th>
                  <th>DESCRIPTION</th>
				  </tr>
                    
                    <tr v-for="(record,i) in records" :key=i>
                      <td>{{record.code}}</td>
                      <td>{{record.title}}</td>
                      <td>{{record.date}}</td>
                      <td>{{record.semester}}</td>
                      <td>{{record.desc}}</td>
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
      name:'Malpractice',
      data() {
        return {

			fields:[],
			records:[
				{
					code:"15SE201",
					title:"Software Engineering Principles",
					date:"29/9/15",
					semester:5,
					desc:"Copying in exam"
				},
				{
					code:"15SE201",
					title:"Software Engineering Principles",
					date:"29/9/15",
					semester:5,
					desc:"Copying in exam"
				},
				{
					code:"15SE201",
					title:"Software Engineering Principles",
					date:"29/9/15",
					semester:5,
					desc:"Copying in exam"
				},
				{
					code:"15SE201",
					title:"Software Engineering Principles",
					date:"29/9/15",
					semester:5,
					desc:"Copying in exam"
				},
				{
					code:"15SE201",
					title:"Software Engineering Principles",
					date:"29/9/15",
					semester:5,
					desc:"Copying in exam"
				}
			]
        }
      }

    }

  </script>
  <style scoped>
    @import './../../style.css';
  </style>
