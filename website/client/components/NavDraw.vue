<template>
  <v-navigation-drawer :mini-variant.sync="mini" v-model='$store.state.navDraw' fixed app>
    <v-toolbar flat>
      <v-list>
        <v-list-tile>
          <v-list-tile-title class="title" v-text="mini? 'App': 'Application'">
          </v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-toolbar>

    <v-divider></v-divider>

    <v-list>
      <v-list-tile to="/">
        <v-list-tile-action>
          <v-icon>home</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          Home
        </v-list-tile-content>
      </v-list-tile>
    </v-list>

    <v-list-tile v-if="user" to="/sleeprecord/create">
      <v-list-tile-action>
        <v-icon>edit</v-icon>
      </v-list-tile-action>
      <v-list-tile-content>
        New Sleep Record
      </v-list-tile-content>
    </v-list-tile>

    <v-list-tile v-if="user" :to="`/sleeprecord/user/${user.id}`">
      <v-list-tile-action>
        <v-icon>library_books</v-icon>
      </v-list-tile-action>
      <v-list-tile-content>
        Sleep Journal
      </v-list-tile-content>
    </v-list-tile>

    <v-list>
      <v-list-tile v-if="user" to="/profile">
        <v-list-tile-action>
          <v-icon>person</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          Profile
        </v-list-tile-content>
      </v-list-tile>
    </v-list>

    <v-list>
      <v-list-tile v-if="user" to="/settings">
        <v-list-tile-action>
          <v-icon>settings</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          Settings
        </v-list-tile-content>
      </v-list-tile>
    </v-list>

     <v-list>
      <v-list-tile v-if="user" @click="openInviteDialog">
        <v-list-tile-action>
          <v-icon>send</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          Invite
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
    
    <v-list v-if="user">
      <v-list-tile @click="logout">
        <v-list-tile-action>
          <v-icon>logout</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          Logout
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    computed: {
      mini() {
        return this.$vuetify.breakpoint.name === 'xs'
      },

      user() {
        return this.$store.getters['auth/user']
      }
    },

    methods: {
      logout: function () {
        this.$store.dispatch('auth/logout')
          .then(() => {
            this.$router.push('/')            
          }) 
      },

      openInviteDialog: function () {
        this.$store.state.inviteDialog = true
      }
    }
  }
</script>

<style>
</style>