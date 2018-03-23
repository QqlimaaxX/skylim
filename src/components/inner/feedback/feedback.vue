<template>
  <div id="app">
    <v-app id="inspire">
      <v-container fluid grid-list-lg style="background-color:#EEEAEA">
        <v-layout row wrap class="text-xs-center">
          <v-flex lg7 offset-lg3 xs12>
            <v-toolbar class="blue darken" style="border-radius:7px 7px 0px 0px;height:52px">
              <h4>Feedback</h4>
            </v-toolbar>

            <v-container class="outer_body" style="background-color:#F8F6F6">
              <v-form v-model="valid" method="post" v-on:submit.prevent="getFormValues" style="margin-top:15px;">
                <v-layout row wrap>
                  <v-flex lg3 xs4 style="padding-top:26px">
                    <span>Type:</span>
                  </v-flex>
                  <v-flex lg9 xs8>
                    <v-select :items="type" v-model="a1" :rules="selectRules" label="Select" autocomplete class="select"></v-select>
                  </v-flex>
                </v-layout>
                <v-layout row wrap>
                  <v-flex lg3 xs4 style="padding-top:26px">
                    <span>Category:</span>
                  </v-flex>
                  <v-flex lg9 xs8>
                    <v-select :items="category" :rules="selectRules" v-model="a2" label="Select" autocomplete class="select"></v-select>
                  </v-flex>
                </v-layout>
                <v-layout row wrap>
                  <v-flex lg3 xs4 style="padding-top:26px">
                    <span>Subject:</span>
                  </v-flex>
                  <v-flex lg8 xs8>
                    <v-text-field class="textfield" :rules="subjectRules" v-model="subject" type="text"></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row wrap>
                  <v-flex lg3 xs4 style="padding-top:30px">
                    <span>Message:</span>
                  </v-flex>

                  <v-flex lg8 xs8>
                    <textarea rows="5" name="comment">
Enter text here...</textarea>
                  </v-flex>

                </v-layout>
                <v-layout row wrap>
                  <v-flex lg12 text-xs-right>
                    <v-btn  type="submit" @click="submit" :disabled="!valid" style="background:#42A5F5;color:white;margin-top:25px">OK</v-btn>
                  </v-flex>

                </v-layout>
              </v-form>
            </v-container>
          </v-flex>
        </v-layout>
      </v-container>

    </v-app>
  </div>

</template>
<script>
  import axios from 'axios'
  export default {
	  name:'Feedback',
    data() {
      return {
        a1: null,
        a2: null,
        valid:true,
        subject: '',
        selectRules: [v => !!v || '*Please select an option'],
        subjectRules: [v => !!v || '*Subject is required'],
        message: ' ',
        type: [
          'complaint', 'suggestion', 'query'
        ],
        category: [
          'Academy', 'Accounts', 'Transport', 'Examination'
        ]
      }
    },
    methods:{
        submit() {

        console.log('debug')
      },
       getFormValues(submitEvent) {
        axios.post(`http://jsonplaceholder.typicode.com/posts`, {
          type: this.type,
          category: this.category,
          subject:this.subject
        })
          .then(response => {
            console.log(response)
          })
          .catch(e => {
            this.selectRules.push(e),
              this.subjectRules.push(e)
          })

      }
    }
  }

</script>
<style scoped>
  .outer_body {
    padding: 20px;
    border-style: solid;
    border-width: 0px 1.5px 1.5px 1.5px;
    border-color: #42A5F5;
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 100;
    color: #5C5A5A;
    font-size: 16px;
  }

  .select {
    width: 70%;

  }

  textarea {
    border: 1px solid #867F7F;
    padding: 5px;
    width: 100%;
    margin-top: 20px;
  }

  .textfield {
    width: 80%;
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
    font-size: 16px;
    padding-left: 20px;
  }

</style>
