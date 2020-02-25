<template>
    <v-card>
      <nuxt-link to="/tt">to page 2</nuxt-link>
      <h1>This is the front</h1>
    </v-card>
</template>

<script>
import Vue from 'vue'
import Vuetify from 'vuetify'

  export default {
    data: () => ({
    }),
    beforeMount () {
      Vue.use(Vuetify)
    }
  }
</script>

 <style scoped src="vuetify/dist/vuetify.min.css"></style>