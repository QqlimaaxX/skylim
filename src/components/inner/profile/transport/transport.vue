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
                    <span>Transport</span>
                  </v-flex>
                  <v-flex xs6>
                    <p v-show="transport.transport">Yes</p>
                    <p v-show="!transport.transport">No</p> 
                  </v-flex>

                </v-layout>
                <v-layout row wrap>
                  <v-flex lg3 xs5 sm3>
                    <span>Route Name:</span>
                  </v-flex>
                  <v-flex lg3 xs6 sm3>
                    {{transport.route}}
                  </v-flex>
                
                </v-layout>
                <v-layout row wrap>
                  <v-flex lg3 xs5 sm3>
                    <span>Vehicle:</span>
                  </v-flex>
                  <v-flex lg3 xs6 sm3>
                    {{transport.vehicle}}
                  </v-flex>
                 

                </v-layout>
                <v-layout row wrap>
                  <v-flex lg3 xs5 sm3>
                    <span>Amount:</span>
                  </v-flex>
                  <v-flex lg3 xs6 sm3>
                    {{transport.amt}}
                  </v-flex>
                  

                </v-layout>
                <v-layout row wrap>

                  <v-flex lg3 xs5 sm3>
                    <span>Stop Name:</span>
                  </v-flex>
                  <v-flex xs7>
                    {{transport.stop}}
                  </v-flex>

                </v-layout>
              </v-container>
              <v-container>
                <v-layout row wrap>
                <div style="overflow-x:scroll;">
                <table class="table" >
                  <tr>
                  <th>Route Name</th>
                  <th>Vehicle No.</th>
                  <th>Amount</th>
                  <th>Stop Name</th>
                  <th>Status</th>
                  <th>Assigned Date</th>
                  <th>User</th>
                    </tr>
                    
                    <tr>
                      <td>{{transport.route}}</td>
                      <td>{{transport.vehicle}}</td>
                      <td>{{transport.amt}}</td>
                      <td>{{transport.stop}}</td>
                      <td v-if="transport.status">Active</td>
                      <td v-else>Inactive</td>
                      <td>{{transport.assdate}}</td>
                      <td>halls</td>
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
    //VALID TILL?
    export default {
      name:'transport',
      data() {
        return {
          transport:{
            transport:true,
            route:'LB Nagar-KPHB',
            vehicle:'TN-1J-1513',
            amt:3570,
            stop:'MMnagar 6:00PM',
            assdate:'2014-12-15 2:04:25PM',
            status:true
          }
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







