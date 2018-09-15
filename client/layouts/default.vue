<template>
  <v-app :dark="isDarkMode">
    <NavDraw />
    <Toolbar />
    <InviteEmail />    
    <v-content class="hero-image">
      <v-container>
        <nuxt />
        <v-btn
          absolute
          fab
          bottom
          right
          color="primary"
          to="/sleeprecord/create"
          class="mb-5"
        >
          <v-icon>add</v-icon>
        </v-btn>
      </v-container>
    </v-content>
    <my-footer></my-footer>
  </v-app>
</template>

<script>
  import Toolbar from '@/components/ToolBar'
  import NavDraw from '@/components/NavDraw'
  import MyFooter from '@/components/Footer'
  import InviteEmail from '@/components/InviteEmail'

  export default {
    components: {
      Toolbar,
      NavDraw,
      MyFooter,
      InviteEmail
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
    background-image: url("https://cdn.vuetifyjs.com/images/parallax/material2.jpg"), linear-gradient(#f123a1, #ff13a3);
    background-position: center;
    background-size: cover;
     &:before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-image: linear-gradient(to top right,rgba(63,81,181, .7),rgba(25,32,72, .7));
      opacity: .6; 
    }
  },
  .v-card {
    border-radius: 5px;
    padding: 10px;
  }

</style>
