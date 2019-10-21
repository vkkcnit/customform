<template>
    <v-form>
        <v-container>
            <v-row>
              <v-col cols="12" sm="6">
                <v-text-field 
                    label="CheckBox lable"
                  counter
                  maxlength="20"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
                <v-col cols="6" sm="6">
                    <div class="text-center">
                        <div class="my-4" v-for="(line, index) in lines" :key="index">
                            <v-text-field
                                    :label="'Checkbox '+index" 
                                    v-model="line.number"
                                    counter
                                    maxlength="20"
                                    >
                            </v-text-field>
                            <v-btn class="mx-2" @click.native="removeRadioInput(index)" fab dark small color="primary">
                                    <v-icon dark>mdi-minus</v-icon>
                            </v-btn>
                            <v-btn v-if="index + 1 === lines.length" @click.native="addRadioOption()" class="mx-2" fab dark color="indigo">
                                <v-icon dark>mdi-plus</v-icon>
                            </v-btn>
                        </div>

                        <div class="my-2">
                        
                        </div>
                        <div class="my-2">
                        
                        </div>
                        <div class="my-2">
                            <div class="my-2">
                              
                            </div>
                        </div>
                    </div>
                </v-col>
            </v-row>

                    


        </v-container>
      </v-form>
</template>

<script>
import {
    mdiAccount,
    mdiPencil,
    mdiShareVariant,
    mdiDelete,
  } from '@mdi/js'

  

    export default {
        name: 'RadioButton',
        data () {
        return {

            lines: [],
            blockRemoval: true,
            textBoxLable:'',
            inputUsageTypes: [
                {
                    label: '+90',
                    value: '+90'
                },
            ],
            inputValues: [
                {
                    label: 'Work', value: 'work'
                }, 
            ]
        }

    },
    methods: {
   
    addRadioOption () {
      let checkEmptyLines = this.lines.filter(line => line.number === null)
      //if (checkEmptyLines.length >= 1 && this.lines.length > 0) return
   //  console.log('add>checkEmptyLines.length>',checkEmptyLines.length)
      this.lines.push({
        inputVal: null,
        number: null,
        inputUsageType: null
      })

      console.log(this.lines,'lines');
    },

    removeRadioInput (lineId) {
        //console.log('lineid>>>>',lineId)
      if (!this.blockRemoval) this.lines.splice(lineId, 1);
    }

  },
  watch: {
    lines () {
      this.blockRemoval = this.lines.length <= 1
    }
  },
  mounted () {
    this.addRadioOption();
  }
}
</script>