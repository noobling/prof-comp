<template>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-card-title>
          <h1 class="display-1">Reset Password: {{ form.email }}</h1>
        </v-card-title>
        <v-card-text>
          <v-form ref="form" v-model="valid" @submit="submit" lazy-validation="">
            <v-text-field
              :append-icon="visibleIcon ? 'visibility' : 'visibility_off'"
              @click:append="() => (visibleIcon = !visibleIcon)"
              :rules="passwordRules"
              :type="visibleIcon ? 'password' : 'text'"
              label="Enter your password"
              hint="At least 6 characters"
              min="6"
              v-model="form.password"
              :counter="6"
              required
            ></v-text-field>

              <v-text-field
              :append-icon="visibleIcon ? 'visibility' : 'visibility_off'"
              @click:append="() => (visibleIcon = !visibleIcon)"
              :rules="passwordRules"
              :type="visibleIcon ? 'password' : 'text'"
              label="Password Confirmation"
              hint="At least 6 characters"
              min="6"
              v-model="form.password_confirmation"
              :counter="6"
              required
            ></v-text-field>
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

    created () {
      this.form.email = this.$route.query.email
      this.form.token = this.$route.params.id
    },

    data() {
      return {
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
          const { data } = await axios.post('/password/reset', this.form)

          swal({
            title: 'Success',
            type: 'success',
            text: 'Done, trying loggin in with your new password.'
          })
        }
      }
    }
  }
</script>