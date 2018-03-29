<template>
  <v-app>
    <div class="main">

      <v-container fluid grid-list-lg>

        <v-layout row wrap class="text-xs-left">

          <v-flex lg7 offset-lg3>
            <v-toolbar  style="border-radius:7px 7px 0px 0px;height:52px;background-color:#77ae42">
              <h4>General Profile</h4>
            </v-toolbar>
            <div class="outer_body">
                  <img src="http://cameracornergreenbay.com/wp-content/uploads/2017/04/passport2.png" style="margin-top:50px;margin-left:20px;width:140px;height:180px;float:left">
              <v-container style="font-size:18px;margin-left:20px">
                <v-layout row wrap>
                  <v-flex lg4 offset-lg2 xs6>
                    <span>Name:</span>
                  </v-flex>
                  <v-flex lg6 xs6>
                    JOHN DOE
                  </v-flex>
                </v-layout>
                <v-layout row wrap>
                  <v-flex lg4 offset-lg2 xs6>

                    <span>Registration No.:</span>
                  </v-flex>
                  <v-flex lg6 xs-6>

                    RA16740005012
                  </v-flex>
                </v-layout>

                <v-layout row wrap>
                  <v-flex lg4 offset-lg2 xs6>
                    <span>Course:</span>
                  </v-flex>
                  <v-flex lg6 xs6>
                    B.Tech
                  </v-flex>
                </v-layout>
                <v-layout row wrap>
                  <v-flex lg4 offset-lg2 xs6>
                    <span> Branch:</span>
                  </v-flex>
                  <v-flex lg6 xs6>
                    Computer Science And Engineering
                  </v-flex>
                </v-layout>
                <v-layout row wrap>
                  <v-flex lg4 offset-lg2 xs6>
                    <span> Semester:</span>
                  </v-flex>
                  <v-flex lg6 xs6>
                    IV
                  </v-flex>
                </v-layout>
                <v-layout row wrap>
                  <v-flex lg4 offset-lg2 xs6>
                    <span>Email:</span>
                  </v-flex>
                  <v-flex lg6 xs6>
                    johndoe@gmail.com
                  </v-flex>

                </v-layout>
              </v-container>
              <hr class="style14">
              <v-container style="font-size:16px" class="pb-0">

                <v-layout row wrap>

                  <v-flex lg3 xs3>
                    <span>Date Of Birth:</span>
                  </v-flex>
                  <v-flex lg4 xs3>
                    15-May-1995
                  </v-flex>

                  <v-flex lg2 xs3>
                    <span> Gender:</span>
                  </v-flex>
                  <v-flex lg3 xs3>
                    Female
                  </v-flex>
                </v-layout>
                <hr>
                <v-layout row>
                  <v-flex lg3 xs3>
                    <span>Blood Group:</span>
                  </v-flex>
                  <v-flex lg4 xs3>
                    B +ve
                  </v-flex>
                  <v-flex lg2 xs3>
                    <span>Contact:</span>
                  </v-flex>
                  <v-flex lg3 xs3>
                    9854620013
                  </v-flex>
                </v-layout>
                <hr>
                <v-layout row wrap>
                  <v-flex lg3 xs3>
                    <span>Address:</span>
                  </v-flex>
                  <v-flex lg9 xs9>
                    FA-3A,Block-A,Chennai
                  </v-flex>
                </v-layout>

                <!-- <v-layout row wrap>
                  <v-flex lg3>
                   <span>City:</span>
                  </v-flex>
                  <v-flex lg4>
                    Chennai
                  </v-flex>
                  <v-flex lg2>
                   <span> State:</span>
                  </v-flex>
                  <v-flex lg3>
                    Tamil-Nadu
                  </v-flex>
                </v-layout> -->
                <hr>
                <v-layout row wrap>
                  <v-flex lg3 xs3>
                    <span> Pincode:</span>
                  </v-flex>
                  <v-flex lg4 xs3>
                    603203
                  </v-flex>
                  <v-flex lg2 xs3>
                    <span> State:</span>
                  </v-flex>
                  <v-flex lg3 xs3>
                    Tamil-Nadu
                  </v-flex>
                </v-layout>
                <hr>
                <v-layout row wrap>
                  <v-flex lg3 xs3>
                    <span>Father Name:</span>
                  </v-flex>
                  <v-flex lg9 xs9>
                    Father's Name
                  </v-flex>

                </v-layout>
                <hr>
                <v-layout row wrap >
                  <v-flex lg3 xs3>
                    <span>Mother Name:</span>
                  </v-flex>
                  <v-flex lg9 xs9>
                    Mother's Name
                  </v-flex>

                </v-layout>

              </v-container>
            </div>
          </v-flex>

        </v-layout>
      </v-container>
    </div>
  </v-app>
</template>
<script>
  export default {
    name:'general',
    data() {
      return {

      }
    }
  }

</script>
<style scoped>
  .outer_body {
    /* border:1px solid red; */
    padding: 20px;
    border-style: solid;
    border-width: 0px 1.5px 1.5px 1.5px;
    border-color: #77ae42;
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 100;
    color: #5C5A5A
  }

  hr {
    border-top: 1px dotted #B3A8A8;
  }

  hr.style14 {
    height: 8px;
    border: 0;
    box-shadow: 0 10px 10px -10px #B4AFAF inset;
  }

  h4 {
    color: white;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 20px;
    padding-left: 25px;
  }

  /* hr{
     border:1px solid #9B9696;
  } */

  span {
    font-weight: 1000px;
    color: #0C0C0C;
  }

</style>
