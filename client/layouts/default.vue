<template>
  <v-app :dark="isDarkMode">
    <NavDraw />
    <Toolbar />
    <v-content class="hero-image">
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <my-footer></my-footer>
  </v-app>
</template>

<script>
  import Toolbar from '@/components/ToolBar'
  import NavDraw from '@/components/NavDraw'
  import MyFooter from '@/components/Footer'

  export default {
    components: {
      Toolbar,
      NavDraw,
      MyFooter
    },

    data() {
      return {
        isDarkMode: false
      }
    }
  }
</script>

<style>
  .swal2-popup {
    font-family: 'Roboto'
  }
  .hero-image {
    background-image: url("https://cdn.vuetifyjs.com/images/parallax/material.jpg");
    height: 100%;
  }
</style>
