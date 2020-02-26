<template>
<v-app id="inspire">


  <v-navigation-drawer
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      app>
      <v-list dense>
        <v-subheader>REPORTS</v-subheader>
        <v-list-item-group color="primary">
          <v-list-item>
            <v-list-item-icon>
              <v-icon >mdi-contacts</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Overview</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
  </v-navigation-drawer>

  <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      color="headerblue"
      dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title
        style="width: 300px"
        class="ml-0 pl-4">
        <span class="hidden-sm-and-down">The Fuckerrr</span>
      </v-toolbar-title>
      <v-text-field
        flat
        solo-inverted
        hide-details
        prepend-inner-icon="mdi-magnify"
        label="Search"
        class="hidden-sm-and-down"/>
      <v-spacer />
      <v-btn icon>
        <v-icon>mdi-apps</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-bell</v-icon>
      </v-btn>
      <v-btn
        icon
        large>
        <v-avatar
          size="32px"
          item
        >
          <v-img
            src="https://cornwallminingalliance.org/wp-content/uploads/2016/10/Placeholder-male-300x300.jpg"
            alt="Vuetify"
          /></v-avatar>
      </v-btn>
  </v-app-bar>


    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
       
      </v-container>
    </v-content>
</v-app>
</template>

<script>
import Vue from 'vue'

  export default {
    name: 'backOfficeLayout',
    data: () => ({
      drawer: null
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
