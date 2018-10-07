<template>
  <v-app :dark="isDarkMode">
    <NavDraw />
    <Toolbar />
    <InviteEmail />
    <WhatsNewDialog />
    <v-content class="hero-image">
      <v-container>
        <nuxt />
        
       
      </v-container>

      <v-speed-dial
          v-model="fab"
          right
          bottom
          fixed
          direction="top"
        >
          <v-btn
            slot="activator"
            v-model="fab"
            color="primary"
            dark
            fab
          >
            <v-icon>more_vert</v-icon>
            <v-icon>close</v-icon>
          </v-btn>

          <v-btn
            fab
            small
            color="primary"
            to="/sleeprecord/create"
          >
            <v-icon>add</v-icon>
          </v-btn>
          <v-btn
            fab
            small
            color="primary"
            to="/home"
            class="mb-7"
          >
            <v-icon>home</v-icon>
          </v-btn>
        </v-speed-dial>
    </v-content>
    <my-footer></my-footer>
  </v-app>
</template>

<script>
  import Toolbar from '@/components/ToolBar'
  import NavDraw from '@/components/NavDraw'
  import MyFooter from '@/components/Footer'
  import InviteEmail from '@/components/InviteEmail'
  import WhatsNewDialog from '@/components/WhatsNewDialog'

  export default {
    components: {
      Toolbar,
      NavDraw,
      MyFooter,
      InviteEmail,
      WhatsNewDialog
    },

    data() {
      return {
        isDarkMode: false,
        fab: false
      }
    }
  }
</script>

<style>
  .swal2-popup {
    font-family: 'Roboto'
  }
  .hero-image {
    background-image: url("/material2.jpg"), linear-gradient(#f123a1, #ff13a3);
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
