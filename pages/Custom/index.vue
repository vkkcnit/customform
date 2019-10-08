<template>
  <v-content>
    <v-container>
          <!-- {{ this.$store.state.counter}} -->
        <h1>CreateForm</h1>
        <v-row>
          <v-col cols="12" sm="6">
            <v-text-field
              v-model="title"
              :rules="[rules.required, rules.counter]"
              label="Title"
              counter
              maxlength="20">
            </v-text-field>
          </v-col>
        </v-row>
    </v-container>
   
    <!-- <v-divider></v-divider> -->
    <!-- <v-container class="my-5 pa-3">
      <v-layout row>   

        <v-flex xs12 md6>
          <v-btn outline block class="primary">1</v-btn>
        </v-flex>

        <v-flex xs12 md6>
          <v-btn outline block class="primary">2</v-btn>
        </v-flex>

      </v-layout>
    </v-container> -->
    <!-- <v-row justify="center" >
      <v-col cols="12" md="4"></v-col>
          <v-col cols="12"
            md="4">
            <v-btn @click="increment" class="mx-2" fab dark left color="indigo">
                <v-icon dark>mdi-plus</v-icon>
            </v-btn> 
       </v-col>
    </v-row> -->
    <v-container class="my-5 pa-3">
     
      <v-layout row wrap>   

        <v-flex xs12 md6>
          <v-overflow-btn
            class="my-2"
            :items="dropdown_font"
            label="Input Type"
            target="#dropdown-example"
            v-model="drp"
            v-bind="getinputType" />
        </v-flex>

        <!-- <v-flex xs12 md6>
          <v-btn outline block class="primary">2</v-btn>
        </v-flex> -->

      </v-layout>
    </v-container>
    <v-row justify="center">
      <h1 id="dropdown-example">{{ drp }}</h1>
    </v-row>
     <TextBox/>
</v-content>
</template>

<script>
import {
    mdiAccount,
    mdiPencil,
    mdiShareVariant,
    mdiDelete,
  } from '@mdi/js'
  import TextBox from "./TextBox";
  

  export default {
    data () {
      return {
        icons: {
        mdiAccount,
        mdiPencil,
        mdiShareVariant,
        mdiDelete,
      },
        inputs: [
            {
                name: ''
            }
        ],
        textname:'',
        title: 'Untittled Form',
        drp:'',
        email: '',
        rules: {
          required: value => !!value || 'Required.',
          counter: value => value.length <= 20 || 'Max 20 characters',
        },

        dialog: false,
        dialog2: false,
        dialog3: false,
        notifications: false,
        sound: true,
        widgets: false,
        items: [
          {
            title: 'Text box',
          },
          {
            title: 'Radio Button',
          },
          {
            title: 'Text Area',
          },
          {
            title: 'File',
          },
        ],
        select: [
          { text: 'text box' },
          { text: 'Radio Button' },
          { text: 'Text Area' },
          { text: 'Drop Down' },
          { text: 'File' },
        ],
        dropdown_font: ['text box', 'Radio Button', 'Text Area', 'File'],

      }

    },
    methods: {
        add(index) {
            this.inputs.push({ name: '' });
        },
        remove(index) {
            this.inputs.splice(index, 1);
        },
        increment(){
          this.$store.commit('mutation');
        }
         
    
    },
    computed: {
          getinputType () {
          console.log(this.drp,'trr') ;

      },

    },
    components:{
      TextBox
    }




  }
</script>