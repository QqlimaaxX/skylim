<template>
  <div id="app">
    <v-app id="inspire">
      <v-container fluid grid-list-lg>
        <v-layout row wrap class="text-xs-left">
          <v-flex lg8 offset-lg3 xs12 sm12>
            <v-toolbar class="blue darken" style="border-radius:7px 7px 0px 0px;height:52px">
              <h4>FEES PAID</h4>
            </v-toolbar>
            <div class="outer_part">
              
              <v-container>
                <v-layout row wrap>
                <div>
                <table class="table">
                  <tr>
                  <th>DATE</th>
                  <th>DESCRIPTION</th>
                  <th>PUNISHMENT</th>
				  </tr>
                    
                    <tr v-for="(record,i) in records" :key=i>
                      <td>{{record.date}}</td>
                      <td>{{record.desc}}</td>
                      <td>{{record.pun}}</td>
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
      name:'Misbehaviour',
      data() {
        return {

			fields:[],
			records:[
				{
					date:"29/9/15",
					desc:"Copying in exam",
					pun:"Detained"
				},
				{
					date:"29/9/15",
					desc:"Copying in exam",
					pun:"Detained"
				},
				{
					date:"29/9/15",
					desc:"Copying in exam",
					pun:"Detained"
				},
				{
					date:"29/9/15",
					desc:"Copying in exam",
					pun:"Detained"
				},
				{
					date:"29/9/15",
					desc:"Copying in exam",
					pun:"Detained"
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
      margin-top:10px;
	  /* margin-left: 60px; */
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
