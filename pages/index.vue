<template>
  <div> 
    <router-link :to="{ path: 'ad-admin/overview' }">backOffice</router-link>
    <v-lazy when-visible>
      <h1>this is the back base container</h1>
    </v-lazy>
  </div>
</template>

<script>
import VLazy from 'vue-lazy-hydration'
export default {
  components: {
    VLazy
  }
}
</script>