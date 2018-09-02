<template>
 <v-jumbotron
    :gradient="gradient"
    dark
    src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg"
    height= "100%"
  >
    <v-container fill-height>
      <v-layout align-center>
        <v-flex text-xs-center>
          <h3 class="display-2 mb-4">Center for Sleep Science Sleep Diary App</h3>
          <v-btn large outline to="/login">Get Started</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </v-jumbotron>
</template>

<script>
  export default {
    layout: 'main',
    head() {
      return { title: 'Sleep Diary App' }
    },
    data: () => ({
      gradient: 'to top right, rgba(63,81,181, .7), rgba(25,32,72, .7)'
    }),

    created() {
      if (this.$store.getters['auth/check'] && this.$store.getters['auth/user'].type === 'Researcher') {
        this.$router.push('/sleeprecord/researcher')
      }
    }
  }
</script>