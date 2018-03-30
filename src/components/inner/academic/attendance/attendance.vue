<template>
  <div id="app">
    <v-app id="inspire">
      <v-container fluid grid-list-lg>
        <v-layout row wrap class="text-xs-left">
          <v-flex lg8 offset-lg3 xs12>
            <v-toolbar class="blue darken" style="border-radius:7px 7px 0px 0px;height:52px">
              <h4>Attendance</h4>
            </v-toolbar>
            <div class="outer_part">
                <v-container>
                    <v-layout row wrap>
                      
                                <div style="overflow-x:scroll;">
                                   
                                    <table class="table">
                                    
                                        <tr>
                                            <th>Code</th>
                                            <th>Title</th>
                                            <th>Type</th>
                                            <th>Room No.</th>
                                            <th>Faculty</th>
                                            <th>Slot</th>
                                            <th>Max Hours</th>
                                            <th>Absent Hours</th>
                                            <th>Attendance %</th>
                                        </tr>

                                        <tr v-for="(i,j) in attendance" :key="j">
                                            <td>{{i.code}}</td>
                                            <td>{{i.name}}</td>
                                            <td>{{i.type}}</td>
                                            <td>{{i.room}}</td>
                                            <td>{{i.faculty}}</td>
                                            <td>{{i.slot}}</td>
                                            <td>{{i.hours}}</td>
                                            <td>{{i.absent}}</td>
                                            <td>{{i.percent}}%</td>
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
  data(){
      return{
          attendance:[
              {
                  name:'Mobile Application Development',
                  code:'15SE203',
                  type:'THEORY',
                  room:400,
                  faculty:'C Vijayakumaran',
                  slot:'F',
                  hours:16,
                  absent:4,
                  percent:75
              },
              {
                  name:'Mobile Application Development',
                  code:'15SE203',
                  type:'THEORY',
                  room:400,
                  faculty:'C Vijayakumaran',
                  slot:'F',
                  hours:16,
                  absent:4,
                  percent:75
              },
              {
                  name:'Mobile Application Development',
                  code:'15SE203',
                  type:'THEORY',
                  room:400,
                  faculty:'C Vijayakumaran',
                  slot:'F',
                  hours:16,
                  absent:4,
                  percent:75
              },
              {
                  name:'Mobile Application Development',
                  code:'15SE203',
                  type:'THEORY',
                  room:400,
                  faculty:'C Vijayakumaran',
                  slot:'F',
                  hours:16,
                  absent:4,
                  percent:75
              },
              {
                  name:'Mobile Application Development',
                  code:'15SE203',
                  type:'THEORY',
                  room:400,
                  faculty:'C Vijayakumaran',
                  slot:'F',
                  hours:16,
                  absent:4,
                  percent:75
              }
          ]
      }
  }
}
</script>



<style scoped>
    @import './../../style.css';

</style>
