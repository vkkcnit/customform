<template>
  <v-content>
    <v-container>
         
        <h1> {{ this.$store.state.custom.title}}</h1>
        <v-row>
          <v-col cols="12" sm="6">
            <v-text-field
              v-model="fromTitle"
              :rules="[rules.required, rules.counter]"
              label="From Title"
              counter
              maxlength="20">
            </v-text-field>
            <v-text-field
              v-model="formDescription"
              :rules="[rules.required, rules.counter]"
              label="Form Description"
              counter
              maxlength="20">
            </v-text-field>
          </v-col>
        </v-row>
    </v-container>
   
    <v-container fluid class="pa-0">
      <TextBox v-if="inputValue == 'Text box'"/>
      <RadioButton v-if="inputValue == 'Radio Button'"/>
      <CheckBox  v-if="inputValue == 'CheckBox'"/>
   
      <v-row align="center">
        <v-col cols="12" sm="6">
          <div class="text-center">
            <div class="my-2">
              
            </div>
            <div class="my-2">
            </div>
          </div>
        </v-col>
        <v-col cols="12" sm="6">
          <div class="text-center">
            <div class="my-2">
              <v-overflow-btn
              class="my-2"
              :items="inputTypeList"
              label="Input Type"
              target="#dropdown-example"
              v-model="inputValue"
              v-bind="getinputType" />
            </div>
            <div class="my-2">
              
            </div>
            <div class="my-2">
            
            </div>
            <div class="my-2">
              
            </div>
            <div class="my-2">
              
            </div>
          </div>
        </v-col>
      </v-row>
  </v-container>
  <v-container>
     <v-row align="center">
      <v-col cols="12" sm="6">
        <div class="text-center">
          <div class="my-2">
               <v-btn @click="saveFormData" v-if="inputValue"  color="primary" dark>Save</v-btn>
          </div>
         
        </div>
      </v-col>
     </v-row>
  </v-container>
</v-content>
</template>

<script>
import {
    mdiAccount,
    mdiPencil,
    mdiShareVariant,
    mdiDelete,
  } from '@mdi/js'
  import { mapMutations } from 'vuex';
  import TextBox from "./TextBox";
  import RadioButton from "./RadioButton";
  import TextArea from "./TextArea";
  import CheckBox from "./CheckBox";

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
        fromTitle: 'Untittled Form',
        formDescription: '',
        inputValue:'',
        email: '',
        rules: {
          required: value => !!value || 'Required.',
          counter: value => value.length <= 20 || 'Max 20 characters',
        },
        inputType:'',
        selection:'',
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
        },
       saveFormData(){
          this.fieldsData = [
                {
                    fieldType: 'text', value: 'name'
                }, 
          ]
        //this.$store.state.custom.fields.push(this.fieldsData);
        //console.log(this.$store.state.custom.fields)
        console.log('fromTitle',this.fromTitle,'formDescription',this.formDescription)
      }
    },
    computed: {
          getinputType () {
          console.log(this.inputValue,'trr') ;
      },

      inputTypeList () {
        return this.$store.state.custom.select ;
      }
    },
    components:{
      TextBox,
      RadioButton,
      TextArea,
      CheckBox
    }

  }
</script>