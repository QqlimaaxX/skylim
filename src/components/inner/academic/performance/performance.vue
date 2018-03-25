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
                  <th>TOTAL CREDITS</th>
                  <th>GRADE</th>
                  <th>GRADE POINT</th>
				  </tr>
                    
                    <tr>
                      <td>15SE203</td>
                      <td>SOFTWARE ENGINEERING PRINCIPLES</td>
                      <td>3</td>
                      <td>A+</td>
                      <td>9</td>
                    </tr>
                    <tr>
                      <td>15SE203</td>
                      <td>SOFTWARE ENGINEERING PRINCIPLES</td>
                      <td>3</td>
                      <td>A+</td>
                      <td>9</td>
                    </tr>
                    <tr>
                      <td>15SE203</td>
                      <td>SOFTWARE ENGINEERING PRINCIPLES</td>
                      <td>3</td>
                      <td>A+</td>
                      <td>9</td>
                    </tr>
                    <tr>
                      <td>15SE203</td>
                      <td>SOFTWARE ENGINEERING PRINCIPLES</td>
                      <td>3</td>
                      <td>A+</td>
                      <td>9</td>
                    </tr>
                    <tr>
                      <td>15SE203</td>
                      <td>SOFTWARE ENGINEERING PRINCIPLES</td>
                      <td>3</td>
                      <td>A+</td>
                      <td>9</td>
                    </tr>
                    <tr>
                      <td>15SE203</td>
                      <td>SOFTWARE ENGINEERING PRINCIPLES</td>
                      <td>3</td>
                      <td>A+</td>
                      <td>9</td>
                    </tr>
                    <tr>
                      <td>15SE203</td>
                      <td>SOFTWARE ENGINEERING PRINCIPLES</td>
                      <td>3</td>
                      <td>A+</td>
                      <td>9</td>
                    </tr>
                    <tr>
                      <td>15SE203</td>
                      <td>SOFTWARE ENGINEERING PRINCIPLES</td>
                      <td>3</td>
                      <td>A+</td>
                      <td>9</td>
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
      margin-top:10px;
	  /* margin-left: 60px; */
      border-collapse: collapse;
      
    }
    
    td{
      font-size:12px;
      color:#615F5F;
      text-align:left;
      padding:5px 20px ;
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
