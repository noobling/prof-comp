<template>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3 v-if="$store.getters['auth/user']">
      <v-card>
        <ProfileImage @open-profile-edit="showEdit = true"/>

        <v-container v-if="showEdit">
          <ProfileEdit @close-profile-edit="showEdit = false"/>
        </v-container>

        <ProfileShow v-else />
        
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  import ProfileEdit from '~/components/user/ProfileEdit'
  import ProfileShow from '~/components/user/ProfileShow'
  import ProfileImage from '~/components/user/ProfileImage'
  import swal from 'sweetalert2'

  export default {
    head() {
      return { title: 'Profile' }
    },

    components: {
      ProfileEdit,
      ProfileShow,
      ProfileImage
    },

    created() {
      // Shouldn't be on the profile page if not user exists
      if (! this.$store.getters['auth/user']) {
        swal({
          title: 'Warning',
          text: "You need to be logged in to view this",
          type: 'warning',
        }).then((result) => {
          this.$router.push('/login')          
        })
      }
    },

    data() {
      return {
        showEdit: false
      }
    }
  }
</script>