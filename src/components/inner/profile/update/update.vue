<template>

    <div id="app">
        <v-app id="inspire">
            
            <v-container text-xs-left style="margin-left:35px">
                <v-layout row wrap>
                    <v-flex xs12 lg6 offset-lg3>
                <v-tabs v-model="active" color="blue-grey darken-2" dark slider-color="white" grow class="border">
               
                    <v-tab v-for="(detail,i) in details" :key="i" ripple>
                      
                      <p class="tab-style">{{ detail }}</p>
                  
                  </v-tab>
                    
                    <v-tab-item color="white">
                        <v-card flat>
                        <v-form  v-model="valid" ref="form">
                       <v-container text-xs-left>
                           <v-layout row wrap>
                               
            
                               <v-flex lg11 xs11>
                                <v-text-field label="CONTACT" prepend-icon="phone" v-model="contact"  :rules="contactRules" :counter="10" required></v-text-field>
                               </v-flex>
                           
                           </v-layout>
                            <v-layout row wrap>
                                <v-flex lg11 xs11>
                                    <v-text-field label="ADDRESS" prepend-icon="edit_location" v-model="address"  :rules="addressRules" :counter="30"required></v-text-field>
                                </v-flex>
                            </v-layout>
                            <v-layout row wrap>
                                <v-flex lg5 xs5>
                                    <v-text-field label="CITY" prepend-icon="location_city" v-model="city" :rules="cityRules" required></v-text-field>
                                </v-flex>
                                <v-flex lg5 xs5 offset-xs1 offset-lg1>
                                    <v-text-field label="STATE" v-model="state" prepend-icon="home" :rules="stateRules" required></v-text-field>
                                </v-flex>
                            </v-layout>
                            <v-layout row wrap>
                                <v-flex lg5 xs5>
                                    <v-text-field label="PINCODE" prepend-icon="location_on" v-model="pincode" :rules="pinRules" required></v-text-field>
                                </v-flex>
                            </v-layout>
                            <v-layout row wrap class="pt-4">
                                <v-flex lg2 xs2 offset-x2 offset-lg3>
                                    <v-btn @click="submit" :disabled="!valid" color="blue-grey darken-2" large>
                                      <span class="button-color">submit</span>  
                                    </v-btn>
                                </v-flex>
                                <v-flex lg2 xs2 offset-xs4 offset-lg1>
                                    <v-btn @click="clear" color="blue-grey darken-2" large><span class="button-color">clear</span></v-btn>
                                </v-flex>
                            </v-layout>
                            
                       </v-container>
                    </v-form>
                   </v-card>
                    </v-tab-item>
                    <v-tab-item>
                        <v-card flat>
                            <v-form v-model="validPassword" ref="formPassword">
                           <v-container>
                               <v-layout row wrap>
                                   <v-flex lg11 xs11>
                                    <v-text-field label="OLD PASSWORD":append-icon="e1 ? 'visibility' : 'visibility_off'" :append-icon-cb="() => (e1 = !e1)" :type="e1 ? 'password' : 'text'" prepend-icon="lock" v-model="oldPassword" :rules="oldPasswordRules" required></v-text-field>
                                   </v-flex>

                               </v-layout>
                            <v-layout row wrap>
                                <v-flex lg11 xs11>
                                    <v-text-field label="NEW PASSWORD" :append-icon="e2 ? 'visibility' : 'visibility_off'" :append-icon-cb="() => (e2 = !e2)" :type="e2 ? 'password' : 'text'"  prepend-icon="vpn_key" v-model="newPassword" :rules="newPasswordRules" required></v-text-field>
                                </v-flex>

                            </v-layout>
                            <v-layout row wrap>
                                <v-flex lg11 xs11>
                                    <v-text-field label="CONFIRM PASSWORD" :append-icon="e3 ? 'visibility' : 'visibility_off'" :append-icon-cb="() => (e3 = !e3)" :type="e3 ? 'password' : 'text'" prepend-icon="vpn_key" v-model="confirmPassword" :rules="confirmPasswordRules" required></v-text-field>
                                </v-flex>
                                <v-layout row wrap class="pt-4">
                                    <v-flex lg2 xs2 offset-x2 offset-lg3>
                                        <v-btn @click="submitPassword" :disabled="!validPassword" color="blue-grey darken-2" large>
                                            <span class="button-color">submit</span>
                                        </v-btn>
                                    </v-flex>
                                    <v-flex lg2 xs2 offset-xs4 offset-lg1>
                                        <v-btn @click="clearPassword" color="blue-grey darken-2" large><span class="button-color">clear</span></v-btn>
                                    </v-flex>
                                </v-layout>

                            </v-layout>
                           </v-container>
                        </v-form>
                        </v-card>
                    </v-tab-item>
                </v-tabs>
                </v-flex>
                </v-layout>
            </v-container>

            
        </v-app>
    
    </div>

</template>

<script>
    import axios from 'axios'
    export default {

        name: 'ProfileUpdate',
        
       data() {
            return {
                valid: true,
                validPassword: true,
                active: null,
                contact: '',
                address: '',
                e1: false,
                e2: false,
                e3: false,
                city: '',
                state: '',
                pincode: '',
                oldPassword: '',
                newPassword: '',
                confirmPassword: '',
                errors: [],
                errorsPassword: [],
                details: ["CONTACT", "PASSWORD"],
                contents: ["BAIBHAB", "MONDAL"],
                oldPasswordRules: [
                     v => !!v || 'Old Password is required',
                ],
                newPasswordRules: [
                     v => !!v || 'New Password is required',
                ],
                confirmPasswordRules: [
                        v => !!v || 'confirmation is required',
                        v => (v && v.confirmPassword === this.newPassword) || 'Password should match'
                    ],
                 contactRules: [
                        v => !!v || 'Contact is required',
                        v => (v && v.length == 10) || 'Contact must be 10 characters'
                    ],
                   
                addressRules: [
                        v => !!v || 'Address is required',
                        v => (v && v.length <= 30) || 'Address must be less than 30 characters'
                    ],
              cityRules: [
                    v => !!v || 'City is required',
                   
                ],  
                stateRules: [
                        v => !!v || 'STATE is required',
                        
                    ],  
              pinRules: [
                    v => !!v || 'PINCODE is required',

                ],               
            }
        },
        methods: {
            next() {
                const active = parseInt(this.active)
                this.active = (active < 2 ? active + 1 : 0).toString()
            },
            submit () {
                    if (this.$refs.form.validate()) {
                        // Native form submission is not yet supported
                        axios.post('http://jsonplaceholder.typicode.com/posts', {
                            contact: this.contact,
                            address: this.address,
                            city: this.city,
                            state: this.state,
                            pincode: this.pincode,

                        })
                        .then(response => {  console.log(response) })
                        
                         .catch(e => {
                                this.errors.push(e)
                            })

                    }
                },
                clear() {
                    this.$refs.form.reset()
                },
                submitPassword(){
                    if (this.$refs.formPassword.validate()) {
                        // Native form submission is not yet supported
                        axios.post('http://jsonplaceholder.typicode.com/posts', {
                            oldPassword: this.oldPassword,
                            newPassword: this.newPassword,
                            confirmPassword: this.confirmPassword
                        })
                            .then(response => { console.log(response) })

                            .catch(e => {
                                this.errorsPassword.push(e)
                            })
                }
        },
         clearPassword() {
                    this.$refs.formPassword.reset()
                }
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
   
   #app{
       
       background: #ECEFF1;
   }
  
   .button-color{
       color: white;
   }
   .tab-style{
       padding-top: 5%;
       letter-spacing: 0.2rem;
   }

   .border{
       border-left: 2px solid #263238;
       border-right: 2px solid #263238;
       border-bottom: 2px solid #263238;
       width: 120%;
   }

   @media screen and (max-width: 480px){
       .border{
           width: 100%;
       }
   }
   
</style>