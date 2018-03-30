<template>
  <div id="app">
    <v-app id="inspire">
      <v-container fluid grid-list-lg>
        <v-layout row wrap class="text-xs-left">
          <v-flex lg8 offset-lg3 xs12 sm12>
            <v-toolbar class="blue darken" style="border-radius:7px 7px 0px 0px;height:52px">
              <h4>Hostel Details</h4>
            </v-toolbar>
            <div class="outer_part">
              <v-container>
                <v-layout row wrap>
                  <v-flex lg3 xs5 sm3>
                    <span>Hostel:</span>
                  </v-flex>
                  <v-flex>
                    <p v-show="hostel.hostel">Yes</p>
                    <p v-show="!hostel.hostel">No</p>
                  </v-flex>

                </v-layout>
                <v-layout row wrap>
                  <v-flex lg3 xs5 sm3>
                    <span>Hostel Name:</span>
                  </v-flex>
                  <v-flex lg3 xs6 sm3>
                    {{hostel.name}}
                  </v-flex>
                  <v-flex lg3 xs5 sm3>
                    <span>Block:</span>
                  </v-flex>
                  <v-flex lg3 xs6 sm3>
                    {{hostel.type}}
                  </v-flex>
                </v-layout>
                <v-layout row wrap>
                  <v-flex lg3 xs5 sm3>
                    <span>Room No.:</span>
                  </v-flex>
                  <v-flex lg3 xs6 sm3>
                    {{hostel.room}}
                  </v-flex>
                  <v-flex lg3 xs5 sm3>
                    <span>Room Type:</span>
                  </v-flex>
                  <v-flex lg3 xs6 sm3>
                    {{hostel.roomtype}}
                  </v-flex>


                </v-layout>
                <v-layout row wrap>
                  <v-flex lg3 xs5 sm3>
                    <span>Fee Amount:</span>
                  </v-flex>
                  <v-flex lg3 xs6 sm3>
                    {{hostel.amt}}
                  </v-flex>
                  <v-flex lg3 xs5 sm3>
                    <span>Pay Type:</span>
                  </v-flex>
                  <v-flex lg3 xs6 sm3>
                    {{hostel.paymentmode}}
                  </v-flex>

                </v-layout>
                <v-layout row wrap>

                  <v-flex lg3 xs5 sm3>
                    <span>Laundry:</span>
                  </v-flex>
                  <v-flex xs6>
                    <p v-if="hostel.laundry">Yes</p>
                    <p v-else>No</p>
                  </v-flex>

                </v-layout>
              </v-container>
              <v-container>
                <v-layout row wrap>
                  <v-flex lg12>
                  <div style="overflow-x:scroll;">
                    <table class="table">
                      <tr>
                        <th>Hostel Name</th>
                        <th>Type</th>
                        <th>Room No.</th>
                        <th>Amount</th>
                        <th>Laundary</th>
                        <th>Status</th>
                        <th>Assigned Date</th>
                        <th>User</th>
                      </tr>

                      <tr>
                        <td>{{hostel.name}}</td>
                        <td>{{hostel.type}}</td>
                        <td>{{hostel.room}}</td>
                        <td>{{hostel.amt}}</td>
                        <td v-if="hostel.laundry">Yes</td>
                        <td v-else>No</td>
                        <td v-if="hostel.status">Active</td>
                        <td v-else>Inactive</td>
                        <td>{{hostel.assdate}}</td>
                        <td>halls</td>
                      </tr>
                    </table>
                  </div>
                  </v-flex>
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
  name:'hostels',
  data(){
    return{
      hostel:{
        hostel:true,
        name:'Malligai',
        type:'F block',
        room:419,
        amt:150000,
        laundry:true,
        status:true,
        assdate:'2014-12-15 2:04:25PM',
        roomtype:'Two (Attached Non AC)',
        paymentmode:'Online'
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
      padding:5px 20px ;
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
