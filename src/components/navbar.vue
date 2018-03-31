<template>
  <div id="app">
    <v-app id="inspire">
      <v-navigation-drawer fixed :clipped="$vuetify.breakpoint.mdAndUp" app v-model="drawer" class="scroll grey lighten-3">
        <div class="sticky">
          <v-container fluid align-baselined style="padding: 5% 0;" class="blue-grey lighten-1">
            <v-layout row wrap text-xs-left>
              <v-flex lg12 xs12>
                <h3 class="pt-1 pb-1 nav-text">
                  harry porter
                </h3>
              </v-flex>

            </v-layout>
            <v-layout row wrap text-xs-left>
              <v-flex lg12 xs12>
                <h3 class="pt-1 pb-1 nav-text">
                  {{ reg }}
                </h3>
              </v-flex>

            </v-layout>
          </v-container>
          <!-- <hr> -->
          <v-container style="padding: 3% 0;">
            <v-layout row>
              <v-flex lg4 xs4>
                <v-btn small block fab flat depressed class="center" color="white">
                  <v-icon medium>date_range</v-icon>
                </v-btn>
              </v-flex>
              <v-flex lg4 xs4>
                <v-btn small block fab flat depressed class="center" color="white">
                  <v-icon medium>event</v-icon>
                </v-btn>
              </v-flex>
              <v-flex lg4 xs4>
                <v-btn small block fab flat depressed @click="nikalo" class="center" color="white">
                  <v-icon medium>power_settings_new</v-icon>
                </v-btn>
              </v-flex>
            </v-layout>

          </v-container>
        </div>
        <v-divider></v-divider>

        <v-list dense>
          <v-expansion-panel focusable>

            <v-expansion-panel-content v-for="(item,i) in items" :key="i" class="grey lighten-3">
              <div slot="header">
				<router-link :to="item.link">
                <v-icon class="mr-4" style="font-size:20px">{{item.icon}}</v-icon><span class="pl-4">{{item.title}}</span>
				</router-link>
				</div>

              <div class="grey lighten-2">
                <v-expansion-panel focusable class="shift">
                  <v-expansion-panel-content v-for="(sitem,j) in item.smenu1" :key="j" class="grey lighten-2" hide-actions>
                    <div slot="header">
					<router-link :to="sitem.link">
					  <v-icon class="mr-4" style="font-size:20px">{{sitem.icon}}</v-icon><span class="pl-4">{{sitem.title}}</span>
					</router-link>
					</div>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </div>
            </v-expansion-panel-content>
          </v-expansion-panel>

        </v-list>
        </v-list>
      </v-navigation-drawer>
      <v-toolbar color="blue-grey darken-2" dark app :clipped-left="$vuetify.breakpoint.mdAndUp" fixed>
        <v-toolbar-title style="width: 100px" class="ml-0 pl-0">
          <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
          <span class="hidden-sm-and-down">{{ logo }}</span>
        </v-toolbar-title>
      </v-toolbar>



    </v-app>
  </div>

</template>

<script>
  export default {
    data: () => ({
      name: "Harry Porter",
      logo: "logo",

      drawer: null,
      reg: "RA16111000031",
      items: [{
          title: "PROFILE",
		  icon: "account_circle",
		  link:{name:'general'},
          smenu1: [{
              title: "GENERAL",
			  icon: "person",
			  link:{name:'general'}
            },
            {
              title: "HOSTELS",
			  icon: "home",
			  link:{name:'hostels'}
            },
            {
              title: "TRANSPORT",
			  icon: "directions_bus",
			  link:{name:'transport'}
            },
            {
              title: "EDIT PROFILE",
			  icon: "mode_edit",
			  link:{name:'update'}
            }
          ]
        },
        {
          title: "ACADEMIC",
		  icon: "school",
    	  link:{name:'attendance'},
          smenu1: [{
              title: "ATTENDANCE",
			  icon: "perm_contact_calendar",
			  link:{name:'attendance'}
            },
            {
              title: "CREDIT/MARKS",
			  icon: "insert_chart",
			  link:{name:'credits'}
			  
            },
            {
              title: "ARREARS",
			  icon: "sentiment_neutral",
			  link:{name:'arrears'}
            },
            {
              title: "PERFORMANCE",
			  icon: "trending_up",
			  link:{name:'performance'}
            },
            {
              title: "SYLLABUS",
			  icon: "picture_as_pdf",
			  link:{name:'syllabus'}
            }
          ]
        },
        {
          title: "FEES DETAILS",
		  icon: "payment",
		  link:{name:'feeStructure'},
          smenu1: [{
              title: "FEE STRUCTURE",
			  icon: "payment",
			  link:{name:'feeStructure'}
            },
            {
              title: "FEE PAID",
			  icon: "payment",
			  link:{name:'feepaid'}
            },
            {
              title: "FEE DUE",
			  icon: "payment",
			  link:{name:'feedue'}
            }
          ]
        },
        {
          title: "DEFAULTERS",
		  icon: "assignment_late",
		  link:{name:'malpractice'},
          smenu1: [{
              title: "MALPRACTICE",
			  icon: "sentiment_very_dissatisfied",
			  link:{name:'malpractice'}
            },
            {
              title: "DETENTION",
			  icon: "face",
    	      link:{name:'detention'}

            },
            {
              title: "MISBEHAVIOUR",
			  icon: "error_outline",
    	      link:{name:'misbehaviour'}
            }
          ]
        },
        {
          title: "FEEDBACK",
		  icon: "comment",
		  link:{name:'feedback'}
        }
      ],
      right: null
    }),
    props: {
      source: String
    },methods:{
      nikalo(){
        window.localStorage.removeItem('username')
        this.$router.push({path:'/login'})
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #app {
    margin-left: 0;
	
    position: absolute;
    /* width: 20%; */
  }

  .nav-text {
    letter-spacing: 0.2em;
    text-align: center;
    text-transform: uppercase;
    color: white;
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 20ƒpx

  }

  /* .name-reg{
     background: #546E7A
  }  */

	a{
		text-decoration: none
	}

  .shift {
    padding-left: 10px;
    margin-left: 0;
  }

  .scroll::-webkit-scrollbar {
    /* width: 2px!important; */
    display: none !important;

  }

  .center {
    margin: 0 auto;
    margin-top: 5px;
  }

  .sticky {
    background: #455A64;
    position: sticky;
    top: 0;
    z-index: 999;
    width: 100%;
    /* border-bottom: 1px solid black; */
    padding: 0px;
    margin: 0;

  }

</style>