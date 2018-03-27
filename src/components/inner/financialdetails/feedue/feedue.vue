<template>
  <div id="app">
    <v-app id="inspire">
      <v-container fluid grid-list-lg>
        <v-layout row wrap class="text-xs-left">
          <v-flex lg8 offset-lg3 xs12 sm12>
            <v-toolbar class="blue darken" style="border-radius:7px 7px 0px 0px;height:52px">
              <h4>Transport Details</h4>
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
    .outer_part {
      padding: 20px;
      border-style: solid;
      border-width: 0px 1.5px 1.5px 1.5px;
      border-color: #42A5F5;
      font-family: 'Source Sans Pro', sans-serif;
      font-weight: 100;
      color: #5C5A5A;
      font-size: 16px;
    }
    .table,tr{
      border:1px solid #ADA1A1;
      margin-top:20px;
      border-collapse: collapse;
      text-align: center;

    }
    
    td{
      font-size:12px;
      color:#615F5F;
      text-align:left;
      padding:5px 20px;
      text-align: center;

    }
    th{
      padding:5px 20px;
      font-size:13px;
 color: white;
 background: #0E0EEB;

    }
    tr:nth-child(even){background-color: #f2f2f2}

    h4 {
      color: white;
      font-family: Arial, Helvetica, sans-serif;
      font-size: 20px;
      padding-left: 25px;
    }
    

    span {
      font-weight: 1000px;
      color: #0C0C0C;
      font-size: 15px;
    }

  </style>
