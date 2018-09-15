<template>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-card-title>
          <h1 class="display-1">Login</h1>
        </v-card-title>
        <v-card-text>
          <v-form ref="form" v-model="valid" @submit="submit" lazy-validation="">
            <v-text-field
              v-model="form.email"
              :rules="emailRules"
              label="Email"
              required
              outline>
            </v-text-field>

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
              outline
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

  export default {
    head() {
      return { title: 'Login' }
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
          const { data } = await axios.post('/login', this.form)

          // Save the token.
          this.$store.dispatch('auth/saveToken', {
            token: data.token,
            remember: this.remember
          })

          // Fetch the user.
          await this.$store.dispatch('auth/fetchUser')

          // Redirect home.
          this.$router.push('/home')
        }
      }
    }
  }
</script>