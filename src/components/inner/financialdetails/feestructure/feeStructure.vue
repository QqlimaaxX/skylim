<template>
  <div id="app">
    <v-app id="inspire">
      <v-container fluid grid-list-lg>
        <v-layout row wrap class="text-xs-left">
          <v-flex lg8 offset-lg3 xs12 sm12>
            <v-toolbar class="blue darken" style="border-radius:7px 7px 0px 0px;height:52px">
              <h4>FEES STRUCTURE</h4>
            </v-toolbar>
            <div class="outer_part">
              
              <v-container>
                <v-layout row wrap v-for="i in records" :key=i>
                <div>{{i.type}}
                <table class="table mb-3">
                  <tr>
                  <th></th>
                  <th>1ST YR</th>
                  <th>2ND YR</th>
                  <th>3RD YR</th>
                  <th>4TH YR</th>
                  <th>GRAND TOTAL</th>
				  </tr>
                    
                    <tr v-for="m in i.sub" :key=m>
                      <td>{{m.name}}</td>
                      <td v-for="(j,k) in m.amt" :key="k">{{j}}</td>
              
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

  //            1ST YR  2ND YR  3RD 4TH GRAND TOTAL
  //ACADEMIC:
  //BOOK FEES
  //CDC FEES
  //TUITION FEES
  //TOTAL
  
  
  //HOSTEL:
  //AC ROOM FEES 
  //NON AC ROOM FEES
  //MESS FEES
  //LAUNDRY FEES
  //TOTAL

  //TRANSPORT:
  //TRANSPORT FEES



    export default {
      name:'FeesStructure',
      data() {
        return {
      l:0,
			fields:[],
			records:[
          { 
            type:"ACADEMIC",
            sub: [
              {
                name:'BOOK FEES',
                amt:[10000,10000,10000,10000,40000]
              },
              {
                name:'CDC FEES',
                amt:[10000,10000,10000,10000,40000]
              },
              {
                name:'TUITION FEES',
                amt:[10000,10000,10000,10000,40000]
              },
              {
                name:'TOTAL',
                amt:[40000,40000,40000,40000,160000]
              }
            ]
          },
          { 
            type:"HOSTEL",
            sub: [
              {
                name:'AC FEES',
                amt:[10000,10000,10000,10000,40000]
              },
              {
                name:'NON AC FEES',
                amt:[10000,10000,10000,10000,40000]
              },
              {
                name:'MESS FEES',
                amt:[10000,10000,10000,10000,40000]
              },
              {
                name:'TOTAL',
                amt:[30000,30000,30000,30000,120000]
              }
            ]
          },
          { 
            type:"TRANSPORT",
            sub: [
              {
                name:'TRAVEL FEES',
                amt:[10000,10000,10000,10000,40000]
              },
              {
                name:'TOTAL',
                amt:[10000,10000,10000,10000,160000]
              }
            ]
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

    td:nth-child(1) {  
  /* your stuff here */
    color: white;
  background: #0E0EEB;


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
