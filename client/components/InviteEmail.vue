<template>
  <div>
    <v-dialog v-model="inviteDialog" width="500">
      <v-card>
        <v-card-title class="headline grey lighten-2" primary-title>
          Send Invite
        </v-card-title>

        <v-card-text>
          <v-text-field v-model="email" :rules="emailRules" label="Email" required>
          </v-text-field>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn @click="$store.state.inviteDialog = false">
            Cancel
          </v-btn>
          <v-btn color="primary" @click="submit" :loading="$store.state.loading">
            Send
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  import axios from 'axios'
  import swal from 'sweetalert2'

  export default {
    data() {
      return {
        email: null,
        emailRules: [
          v => !!v || 'E-mail is required',
          v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
        ]
      }
    },

    methods: {
      submit: async function () {
        const { data } = await axios.post('/invite', { email: this.email })

        this.$store.state.inviteDialog = false

        swal({
          toast: true,
          position: 'bottom-end',
          showConfirmButton: false,
          timer: 3000,
          type: 'success',
          title: 'Sent Invitation'
        })
      }
    },

    computed: {
      inviteDialog() {
        return this.$store.state.inviteDialog
      }
    }
  }
</script>