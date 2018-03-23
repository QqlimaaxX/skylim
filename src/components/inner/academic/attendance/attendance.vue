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
                                    <h3>Semester-1</h3>
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

                                        <tr>
                                            <td>15016J</td>
                                            <td>OOPS</td>
                                            <td>Theory</td>
                                            <td>150</td>
                                            <td>Hallys</td>
                                            <td>D</td>
                                            <td>52</td>
                                            <td>8</td>
                                            <td>94</td>
                                        </tr>
                                        <tr>
                                            <td>15016J</td>
                                            <td>OOPS</td>
                                            <td>Theory</td>
                                            <td>150</td>
                                            <td>Hallys</td>
                                            <td>D</td>
                                            <td>52</td>
                                            <td>8</td>
                                            <td>94</td>
                                        </tr>
                                        <tr>
                                            <td>15016J</td>
                                            <td>OOPS</td>
                                            <td>Theory</td>
                                            <td>150</td>
                                            <td>Hallys</td>
                                            <td>D</td>
                                            <td>52</td>
                                            <td>8</td>
                                            <td>94</td>
                                        </tr>
                                        <tr>
                                            <td>15016J</td>
                                            <td>OOPS</td>
                                            <td>Theory</td>
                                            <td>150</td>
                                            <td>Hallys</td>
                                            <td>D</td>
                                            <td>52</td>
                                            <td>8</td>
                                            <td>94</td>
                                        </tr>
                                        <tr>
                                            <td>15016J</td>
                                            <td>OOPS</td>
                                            <td>Theory</td>
                                            <td>150</td>
                                            <td>Hallys</td>
                                            <td>D</td>
                                            <td>52</td>
                                            <td>8</td>
                                            <td>94</td>
                                        </tr>
                                        <tr>
                                            <td>15016J</td>
                                            <td>OOPS</td>
                                            <td>Theory</td>
                                            <td>150</td>
                                            <td>Hallys</td>
                                            <td>D</td>
                                            <td>52</td>
                                            <td>8</td>
                                            <td>94</td>
                                        </tr>
                                        <tr>
                                            <td>15016J</td>
                                            <td>OOPS</td>
                                            <td>Theory</td>
                                            <td>150</td>
                                            <td>Hallys</td>
                                            <td>D</td>
                                            <td>52</td>
                                            <td>8</td>
                                            <td>94</td>
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
    h4 {
    color: white;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 20px;
    padding-left: 25px;
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
</style>
