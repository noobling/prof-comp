<template>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-card-title>
          <h1 class="display-1">Settings</h1>
        </v-card-title>

        <v-card-text>
          <h2 class="headline">Delete Account</h2>
          <p class="body-1">If you delete your account you will permantly lose all your data.</p>
          <v-btn color="red" dark @click="deleteAccount">Delete Account</v-btn>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  import swal from 'sweetalert2'

  export default {
    created () {
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

    methods: {
      deleteAccount: function () {
        swal({
          title: 'Are you sure you want to delete account?',
          text: 'You won\'t be able to undo this.',
          showCancelButton: true,
          confirmButtonText: 'Yes delete it!',
          cancelButtonText: 'No, cancel',
          showCloseButton: true,
          postConfirm: this.sendDeleteRequest,
          reverseButtons: true
        }).then(result => {
            // If they clicked the confirm button
            if(result.value) {
              swal('Deleted', 'Your account has been deleted', 'success')
            }
        })
      },

      sendDeleteRequest: async function () {
        // const { data } = await axios.delete('/user')
        return
      }
    }
  }
</script>