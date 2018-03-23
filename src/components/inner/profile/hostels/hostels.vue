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
                    <span>Yes</span>
                  </v-flex>

                </v-layout>
                <v-layout row wrap>
                  <v-flex lg3 xs5 sm3>
                    <span>Hostel Name:</span>
                  </v-flex>
                  <v-flex lg3 xs6 sm3>
                    Malligai
                  </v-flex>
                  <v-flex lg3 xs5 sm3>
                    <span>Block:</span>
                  </v-flex>
                  <v-flex lg3 xs6 sm3>
                    F BLOCK
                  </v-flex>
                </v-layout>
                <v-layout row wrap>
                  <v-flex lg3 xs5 sm3>
                    <span>Room No.:</span>
                  </v-flex>
                  <v-flex lg3 xs6 sm3>
                    407
                  </v-flex>
                  <v-flex lg3 xs5 sm3>
                    <span>Room Type:</span>
                  </v-flex>
                  <v-flex lg3 xs6 sm3>
                    Two (Attached Non AC)
                  </v-flex>


                </v-layout>
                <v-layout row wrap>
                  <v-flex lg3 xs5 sm3>
                    <span>Fee Amount:</span>
                  </v-flex>
                  <v-flex lg3 xs6 sm3>
                    150000.0
                  </v-flex>
                  <v-flex lg3 xs5 sm3>
                    <span>Pay Type:</span>
                  </v-flex>
                  <v-flex lg3 xs6 sm3>
                    Online
                  </v-flex>

                </v-layout>
                <v-layout row wrap>

                  <v-flex lg3 xs5 sm3>
                    <span>Laundary:</span>
                  </v-flex>
                  <v-flex xs6>
                    Yes
                  </v-flex>

                </v-layout>
              </v-container>
              <v-container>
                <v-layout row wrap>
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
                        <td>Malligai</td>
                        <td>F Block</td>
                        <td>407</td>
                        <td>150000</td>
                        <td>Yes</td>
                        <td>Active</td>
                        <td>2014-12-15 2:04:25PM</td>
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
export default {
  name:'hostels'
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

  .table,
  tr {
    border: 1px solid #ADA1A1;
    margin-top: 20px;
    border-collapse: collapse;

  }

  td {
    font-size: 12px;
    color: #615F5F;
    text-align: left;
    padding: 5px 20px;
  }

  th {
    padding: 5px 20px;
    font-size: 13px;
    color: white;
    background: #0E0EEB;

  }



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
