<template>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-card-title>
          <h1 class="display-1">Send Reset Link</h1>
        </v-card-title>
        <v-card-text>
          <v-form ref="form" v-model="valid" @submit="submit" lazy-validation="">
            <h1 class="title">Enter your email so we can start resetting your password.</h1>
            <v-text-field
              v-model="form.email"
              :rules="emailRules"
              class="mt-2 mb-2"
              label="Email"
              required
            >
            </v-text-field>
            <v-btn color="primary" :disabled="!valid" type="submit" @click.prevent="submit" :loading="loading">Submit</v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
 
</template>

<script>
  import axios from 'axios'
  import { mapGetters } from 'vuex'
  import swal from 'sweetalert2'

  export default {
    head() {
      return { title: 'Send Reset Link' }
    },

    data() {
      return {
        emailRules: [
          v => !!v || 'E-mail is required',
          v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
        ],
        passwordRules: [v => (v && v.length >= 6) || 'Password must be at least 6 chracters'],
        visibleIcon: true,
        form: {},
        valid: true
      }
    },

    computed: {
      ...mapGetters([
        'loading'
      ])
    },

    methods: {
      submit: async function () {
        if (this.$refs.form.validate()) {
          // Submit the form.
          const { data } = await axios.post('/password/email', this.form)

          swal({
            title: 'Success',
            type: 'success',
            text: 'Sent reset link to your email please check your spam if you cannot find it.'
          })
        }
      }
    }
  }
</script>