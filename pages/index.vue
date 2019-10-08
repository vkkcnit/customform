<template>
  <div>
    <h1> Welcome to Home page</h1>

  </div>
</template>

<script>

import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
   head(){
        return {
            title:"About Custom Form Home Page",
            meta: [
                {
                    hid:"Description",
                    name:"Description",
                    content:"Best place for developed your custom form"
                }
            ]
        }
    }
}
</script>
