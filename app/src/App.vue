<template>
  <v-app>
    <v-app-bar
      app
    >
      <div class="d-flex align-center">
        <v-img
          alt="Logo"
          class="shrink mr-2"
          contain
          src="./assets/logo.png"
          transition="scale-transition"
          width="40"          
        />
        <v-toolbar-title class="shrink" style="font-size:inherit">#vamostodosficarbem</v-toolbar-title>
      </div>
      
      <v-spacer></v-spacer>
      <v-btn icon href="https://www.facebook.com/groups/610291493152992/" target="_blank">
        <v-icon color="#4267b2">mdi-facebook</v-icon>
      </v-btn>
      <v-btn icon href="https://docs.google.com/spreadsheets/d/1hXJqJDKPOogwcmxF1qKhMTdUQsTWAB0TFlzPKjW6ZCc" target="_blank">
        <v-icon color="#0F9D58">mdi-google-spreadsheet</v-icon>
      </v-btn>
    </v-app-bar>
    <v-content>
      <Welcome/>
      <div class="text-right">
        <v-btn href="https://github.com/jdsantos" target="_blank" fab dark x-small class="mb-4 mr-4">
          <v-icon dark>mdi-github</v-icon>
        </v-btn>
      </div>
    </v-content>
  </v-app>
</template>

<script>
import Welcome from './components/Welcome';

export default {
  name: 'App',

  components: {
    Welcome,
  },

  data: () => ({
    //
  }),
};
</script>

<style>
  html {
    scroll-behavior: smooth;
  }
</style>
