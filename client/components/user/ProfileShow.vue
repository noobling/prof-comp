<template>
  <v-list two-line>
    <v-list-tile>
      <v-list-tile-action>
        <v-icon color="indigo">mail</v-icon>
      </v-list-tile-action>

      <v-list-tile-content>
        <v-list-tile-title>{{ user.email }}</v-list-tile-title>
        <v-list-tile-sub-title>Email</v-list-tile-sub-title>
      </v-list-tile-content>
    </v-list-tile>

    <v-list-tile>
      <v-list-tile-action>
        <v-icon color="primary">lock</v-icon>
      </v-list-tile-action>

      <v-list-tile-content>
        <v-list-tile-title>****</v-list-tile-title>
        <v-list-tile-sub-title>Password</v-list-tile-sub-title>
      </v-list-tile-content>
    </v-list-tile>
  </v-list>
</template>

<script>
  export default {
    computed: {
      user() {
        return this.$store.getters['auth/user']
      }
    }
  }
</script>