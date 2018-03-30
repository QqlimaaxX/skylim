<template>
  <div id="app">
    <v-app id="inspire">
      <v-container fluid grid-list-lg>
        <v-layout row wrap class="text-xs-left">
          <v-flex lg8 offset-lg3 xs12 sm12>
            <v-toolbar class="blue darken" style="border-radius:7px 7px 0px 0px;height:52px">
              <h4>FEE DUE</h4>
            </v-toolbar>
            <div class="outer_part">
              <v-container>
                <v-layout row wrap>
                  <v-flex lg3 xs5 sm3>
                    <span>Program:</span>
                  </v-flex>
                  <v-flex xs6>
                    <span>Bachelor's in Technology</span>
                  </v-flex>

                </v-layout>
                <v-layout row wrap>
                  <v-flex lg3 xs5 sm3>
                    <span>Discipline:</span>
                  </v-flex>
                  <v-flex lg3 xs6 sm3>
                    <span>Computer Science and Engineering</span>
                  </v-flex>
                  
                </v-layout>
                <v-layout row wrap>
                  <v-flex lg3 xs5 sm3>
                    <span>Last Date:</span>
                  </v-flex>
                  <v-flex lg3 xs6 sm3>
                    <span>27/07/16</span>
                  </v-flex>
                </v-layout>
                
              </v-container>
              <v-container>
                <v-layout row wrap>
                <div style="overflow-x:scroll;">
                <table class="table">
                  <tr>
                  <th>FEE TYPE</th>
                  <th>AMOUNT</th>
                  <th>PENALTY AMOUNT</th>
                  <th>LATE PROCESSING FEE</th>
                  <th>AMOUNT TO PAY</th>
				  </tr>
                    
                    <tr v-for="(record,i) in records" :key=i>
                      <td>{{record.type}}</td>
                      <td>{{record.amount}}</td>
                      <td>{{record.penAmt}}</td>
                      <td>{{record.lpf}}</td>
                      <td>{{record.amtToPay}}</td>
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
      name:'FeesDue',
      data() {
        return {
          records:[
          {
            type:"exam",
            amount:2750,
            penAmt:500,
            lpf:1000,
            amtToPay:2750
          },
          {
            type:"exam",
            amount:2750,
            penAmt:500,
            lpf:1000,
            amtToPay:2750
          },
          {
            type:"exam",
            amount:2750,
            penAmt:500,
            lpf:1000,
            amtToPay:2750
          },
          {
            type:"exam",
            amount:2750,
            penAmt:500,
            lpf:1000,
            amtToPay:2750
          }
          ]
        }
      }

    }

  </script>
  <style scoped>
    @import './../../style.css';

  </style>
