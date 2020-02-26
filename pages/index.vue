<template>
  <div> 
    <LazyHydrate when-visible>
      <router-link :to="{ path: 'ad-admin/overview' }">backOffice</router-link>
      <h1>this is the back base container</h1>
    </LazyHydrate>
  </div>
</template>

<script>
import LazyHydrate from 'vue-lazy-hydration'
export default {
  components: {
    LazyHydrate
  }
}
</script>