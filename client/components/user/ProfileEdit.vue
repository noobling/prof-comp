<template>
  <v-form ref="form" v-model="valid" @submit="submit" lazy-validation="">
    <v-text-field
      v-model="form.name"
      :rules="[v => !!v || 'Name is required']"
      label="Name"
      required>
    </v-text-field>

    <v-text-field
      v-model="form.email"
      :rules="emailRules"
      label="Email"
      required>
    </v-text-field>

    <v-flex>
      <v-btn color="primary" :disabled="!valid" type="submit" @click.prevent="submit" :loading="loading">Submit</v-btn>
      <v-btn @click="emitCloseProfileEdit">Cancel</v-btn>
    </v-flex>
  </v-form>
</template>

<script>
  import axios from 'axios'
  import { mapGetters } from 'vuex'
  import swal from 'sweetalert2'

  export default {
    head() {
      return { title: 'Profile Edit' }
    },

    created() {
      // Pre fill the form data with current user data
      Object.keys(this.user).forEach(key => {
        this.form[key] = this.user[key]
      })
    },

    data() {
      return {
        emailRules: [
          v => !!v || 'E-mail is required',
          v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
        ],
        form: {},
        valid: true
      }
    },

    computed: {
      ...mapGetters([
        'loading'
      ]),

      user() {
        return this.$store.getters['auth/user']
      }
    },

    methods: {
      submit: async function () {
        if (this.$refs.form.validate()) {
          const { data } = await axios.patch('/user', this.form)

          this.$store.dispatch('auth/updateUser', { user: data })

          this.$emit('close-profile-edit')

          swal({
            toast: true,
            position: 'bottom-end',
            showConfirmButton: false,
            timer: 3000,
            type: 'success',
            title: 'Updated Profile'
          })
        }
      },

      emitCloseProfileEdit: function () {
        this.$emit('close-profile-edit')
      },


    }
  }
</script>