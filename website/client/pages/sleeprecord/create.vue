<template>
  <v-layout>
    <v-flex xs12 sm8 offset-sm2>
      <v-card>
        <v-card-title>
          <h1 class="display-1">New Sleep Record</h1>
        </v-card-title>

        <v-card-text>
          <v-form ref="form" v-model="valid" @submit="submit" lazy-validation="">
            <v-stepper v-model="currentStep" vertical>
              <v-stepper-step step="1" :complete="currentStep > 1">
                Sleep Times
              </v-stepper-step>
              <v-stepper-content step="1">
                <v-text-field
                  v-model="form.date"
                  label="Date of Sleep Record"
                  required
                  :rules="requiredRule"
                  type="date">
                </v-text-field>
                <v-text-field
                  v-model="form.timeGotIntoBed"
                  label="What time did you get into bed?"
                  required
                  :rules="requiredRule"
                  type="time">
                </v-text-field>
                <v-text-field
                  v-model="form.timeToTrySleep"
                  label="What time did you try to go to sleep?"
                  required
                  :rules="requiredRule"
                  type="time">
                </v-text-field>
                <v-text-field
                  v-model="form.timeWokenUp"
                  label="What time did wake up?"
                  required
                  :rules="requiredRule"
                  type="time">
                </v-text-field>
                <v-menu
                  ref="menu"
                  :close-on-content-click="false"
                  v-model="menu2"
                  :nudge-right="40"
                  :return-value.sync="timeTakenToSleep"
                  lazy
                  transition="scale-transition"
                  offset-y
                  full-width
                  max-width="290px"
                  min-width="290px"
                >
                  <v-text-field
                    slot="activator"
                    v-model="textTimeTakenToSleep"
                    label="How long did it take you to sleep"
                    prepend-icon="access_time"
                    hint="hh:mm format"
                    persistent-hint
                    readonly
                  ></v-text-field>
                  <v-time-picker
                    v-if="menu2"
                    v-model="timeTakenToSleep"
                    @change="$refs.menu.save(timeTakenToSleep)"
                    format="24hr"
                  ></v-time-picker>
                </v-menu>
                <v-btn color="primary" @click="currentStep = 2">Continue</v-btn>
              </v-stepper-content>

              <v-stepper-step step="2" :complete="currentStep > 2">
                Sleep Awakenings
              </v-stepper-step>

              <v-stepper-content step="2">
                <v-btn color="primary" @click="currentStep = 3">Continue</v-btn>                
              </v-stepper-content>

              <v-stepper-step step="3" :complete="currentStep > 3">
                Sleep Quality
              </v-stepper-step>

              <v-stepper-content step="3">
                <v-text-field
                  v-model="form.email"
                  :rules="emailRules"
                  label="Email"
                  required>
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
                ></v-text-field>
                <v-btn :disabled="!valid" type="submit" @click.prevent="submit" :loading="loading" color="primary">Submit</v-btn>
              </v-stepper-content>
            </v-stepper>
            
            

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
      return { title: 'New Sleep Record' }
    },

    components: {},

    created() {
      const currentDate = new Date()
      const day = currentDate.getDate()
      const month = currentDate.getMonth() + 1
      const year = currentDate.getFullYear()
      this.form.date = year + '-' + month.toString().padStart(2, '0') + '-' + day.toString().padStart(2, '0')
    },

    data() {
      return {
        emailRules: [
          v => !!v || 'E-mail is required',
          v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
        ],
        requiredRule: [v => !!v || 'Field is required'],
        passwordRules: [v => (v && v.length >= 6) || 'Password must be at least 6 chracters'],
        visibleIcon: true,
        form: {
        },
        valid: true,
        menu2: false,
        textTimeTakenToSleep: '',
        timeTakenToSleep: null
      }
    },

    computed: {
      ...mapGetters([
        'loading'
      ])
    },

    watch: {
      timeTakenToSleep (val) {
        let hour = val.split(':')[0]
        let minutes = val.split(':')[1]
        // Remove leading zeros
        hour = parseInt(hour, 10)
        minutes = parseInt(minutes, 10)

        this.textTimeTakenToSleep = hour + ' hours ' + minutes + ' minutes'
      }
    },

    methods: {
      submit: async function () {
        if (this.$refs.form.validate()) {
          const { data } = await axios.post('/register', this.form)

          const { data: { token } } = await axios.post('/login', { email: this.form.email, password: this.form.password })

          this.$store.dispatch('auth/saveToken', { token })

          await this.$store.dispatch('auth/updateUser', { user: data })

          this.$router.push('/')
        }
      }
    }
  }
</script>