<template>
  <div id="app">
    <v-app id="inspire">
      <v-container fluid grid-list-lg>
        <v-layout row wrap class="text-xs-left">
          <v-flex lg8 offset-lg3 xs12 sm12>
            <v-toolbar class="blue darken" style="border-radius:7px 7px 0px 0px;height:52px">
              <h4>PERFORMANCE</h4>
            </v-toolbar>
            <div class="outer_part">
              
              <v-container>
                <v-layout row wrap>
                <div>
                <table class="table">
                  <tr>
                  <th>COURSE CODE</th>
                  <th>COURSE TITLE</th>
                  <th>FACULTY NAME</th>
                  <th>SURPRISE TEST</th>
                  <th>ASSIGNMENT</th>
                  <th>TEST 1</th>
                  <th>TEST 2</th>
				  </tr>
                    
                    <tr v-for="(record,i) in records" :key=i>
                      <td>{{record.code}}</td>
                      <td>{{record.title}}</td>
                      <td>{{record.facName}}</td>
                      <td>{{record.surpTest}}</td>
                      <td>{{record.assgn}}</td>
                      <td>{{record.test1}}</td>
                      <td>{{record.test2}}</td>
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
      name:'performance',
      data() {
        return {
			records:[
				{
					code:"15SE203",
					title:"Software Engineering Principles",
					facName:"Dr. Preetha Evangeline",
					surpTest:4,
					assgn:4,
					test1:13,
					test2:24
				},
				{
					code:"15SE203",
					title:"Software Engineering Principles",
					facName:"Dr. Preetha Evangeline",
					surpTest:4,
					assgn:4,
					test1:13,
					test2:24
				},
				{
					code:"15SE203",
					title:"Software Engineering Principles",
					facName:"Dr. Preetha Evangeline",
					surpTest:4,
					assgn:4,
					test1:13,
					test2:24
				},
				{
					code:"15SE203",
					title:"Software Engineering Principles",
					facName:"Dr. Preetha Evangeline",
					surpTest:4,
					assgn:4,
					test1:13,
					test2:24
				}
			]
        }
      }

    }

  </script>
  <style scoped>
    @import './../../style.css';

  </style>
