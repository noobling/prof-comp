<template>
  <v-toolbar fixed app dark color="primary">
    <v-toolbar-side-icon @click="changeNavDraw"></v-toolbar-side-icon>
    <v-toolbar-title v-if="!user">Center for Sleep Science</v-toolbar-title>
    <v-toolbar-items v-else>
      <v-btn flat to="/home">
        <v-icon class="mr-1">home</v-icon>
        Home
      </v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    
    <v-toolbar-items>
      <v-btn flat to="/register" v-if="! user">Register</v-btn>
      <v-btn flat to="/login" v-if="! user">Login</v-btn>
      <v-btn flat :to="`/sleeprecord/user/${user.id}`" v-if="user">Sleep Journal</v-btn>
      <v-btn flat to="/sleeprecord/researcher" v-if="user && user.type === 'Researcher'">Patients</v-btn>
    </v-toolbar-items>
    <v-menu v-if="user">
      <v-btn icon slot="activator">
        <v-avatar size="38px">
          <img :src="$store.getters['auth/userImage']" alt="User Avatar">
        </v-avatar>
      </v-btn>

      <v-list>
        <v-list-tile to="/profile">
          <v-list-tile-action>
            <v-icon>person</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>
            Profile
          </v-list-tile-title>
        </v-list-tile>
        <v-list-tile @click="logout">
          <v-list-tile-action>
            <v-icon>logout</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            Logout
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-menu>

  </v-toolbar>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    methods: {
      changeNavDraw: function () {
        this.$store.dispatch('updateNavDraw', { navDraw: !this.navDraw })
      },

      logout: function () {
        this.$store.dispatch('auth/logout')
          .then(() => {
            this.$router.push('/')
          })
      }
    },

    computed: {
      navDraw() {
        return this.$store.getters.navDraw
      },

      user() {
        return this.$store.getters['auth/user']
      }
    }
  }
</script>