<template>
    <v-form>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6">
                <v-text-field
                  v-model="textBoxLable"
                  label="TextBox Lable"
                  counter
                  maxlength="20"
                ></v-text-field>
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
        data () {
        return {
            textBoxLable:''
        }

    }
}
</script>