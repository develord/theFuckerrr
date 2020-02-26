<template>
<v-app id="inspire">


</v-app>
</template>

<script>
import Vue from 'vue'

  export default {
    name: 'backOfficeLayout',
    data: () => ({
    }),
    head () {
      return {
        title: 'test',
        meta: [
          // hid est utilisé comme identifiant unique. N'utilisez pas `vmid` car ça ne fonctionnera pas
          { hid: 'description', name: 'description', content: 'Ma description personnalisée' }
        ]
      }
    }
  }
</script>
