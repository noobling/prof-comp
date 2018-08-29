<template>
  <v-layout>
    <v-flex xs12 sm8 offset-sm2>
      <v-card>
        <v-toolbar card>
          <v-btn icon>
            <v-icon>arrow_back</v-icon>
          </v-btn>
          <v-toolbar-title class="body-2">New Sleep Record</v-toolbar-title>
        </v-toolbar>
        <!-- <v-card-title>
          <h1 class="display-1">New Sleep Record</h1>
        </v-card-title> -->

        <v-card-text>
          <v-form ref="form" v-model="valid" @submit="submit" lazy-validation="">
            <v-stepper v-model="currentStep" vertical>
              <v-stepper-step step="1" :complete="currentStep > 1" @click="currentStep = 1">
                <span @click="currentStep = 1" class="stepper-header">Sleep Times</span>
              </v-stepper-step>
              <v-stepper-content step="1" v-if="currentStep == 1">
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
                    :rules="requiredRule"
                    required
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
                <v-btn class="btn-spaced" :disabled="!valid" color="primary" @click="nextStep">Continue</v-btn>
              </v-stepper-content>

              <v-stepper-step step="2" :complete="currentStep > 2">
                <span @click="currentStep = 2" class="stepper-header">Sleep Awakenings</span>
              </v-stepper-step>

              <v-stepper-content step="2" v-if="currentStep == 2">
                <v-text-field
                  v-model="form.awakeningsNumber"
                  label="How many times did you wake up, not counting your final awakening?"
                  required
                  :rules="requiredRule"
                  type="number">
                </v-text-field>
                <v-menu
                  ref="menu3"
                  :close-on-content-click="false"
                  v-model="menu3"
                  :return-value.sync="awakeningsTimeTotal"
                  lazy
                  full-width
                  transition="scale-transition"
                  v-if="form.awakeningsNumber && form.awakeningsNumber > 0"
                >
                  <v-text-field
                    slot="activator"
                    v-model="textAwakeningsTimeTotal"
                    :rules="requiredRule"
                    required
                    label="In total, how long did these awakenings last?"
                    hint="hh:mm format"
                    persistent-hint
                    readonly
                  ></v-text-field>
                  <v-time-picker
                    v-if="menu3"
                    v-model="awakeningsTimeTotal"
                    @change="$refs.menu3.save(awakeningsTimeTotal)"
                    format="24hr"
                  ></v-time-picker>
                </v-menu>
                <v-text-field
                  v-model="form.awkeningsTimeFinal"
                  label="What time was your final awakening?"
                  required
                  :rules="requiredRule"
                  type="time"
                  v-if="form.awakeningsNumber && form.awakeningsNumber > 0"
                  >
                </v-text-field>
                <v-menu
                  ref="menu4"                
                  :close-on-content-click="false"
                  v-model="menu4"
                  :return-value.sync="awakeningsFinalTimeLength"
                  lazy
                  full-width
                  transition="scale-transition"
                  v-if="form.awakeningsNumber && form.awakeningsNumber > 0" 
                >
                  <v-text-field
                    slot="activator"
                    v-model="textAwakeningsFinalTimeLength"
                    :rules="requiredRule"
                    required
                    label="After your final awakening how long did you spend in bed trying to sleep?"
                    hint="hh:mm format"
                    persistent-hint
                    readonly
                  ></v-text-field>
                  <v-time-picker
                    v-if="menu4"
                    v-model="awakeningsFinalTimeLength"
                    @change="$refs.menu4.save(awakeningsFinalTimeLength)"
                    format="24hr"
                  ></v-time-picker>
                </v-menu>
                <v-checkbox label="Did you wake up earlier than planned?" v-model="earlyWakeUp"></v-checkbox>
                <v-menu
                  ref="menu5"                
                  :close-on-content-click="false"
                  v-model="menu5"
                  :return-value.sync="earlyWakeUpTime"
                  lazy
                  full-width
                  transition="scale-transition"
                  v-if="earlyWakeUp"
                >
                  <v-text-field
                    slot="activator"
                    v-model="textEarlyWakeUpTime"
                    :rules="requiredRule"
                    required
                    label="How much earlier?"
                    hint="hh:mm format"
                    persistent-hint
                    readonly
                  ></v-text-field>
                  <v-time-picker
                    v-if="menu5"
                    v-model="earlyWakeUpTime"
                    @change="$refs.menu5.save(earlyWakeUpTime)"
                    format="24hr"
                  ></v-time-picker>
                </v-menu>
                <v-btn class="btn-spaced" :disabled="!valid" color="primary" @click="nextStep">Continue</v-btn>                
              </v-stepper-content>

              <v-stepper-step step="3" :complete="currentStep > 3">
                <span @click="currentStep = 3" class="stepper-header">Sleep Quality</span>
              </v-stepper-step>

              <v-stepper-content step="3" v-if="currentStep == 3">
                <v-text-field
                  v-model="form.timeOutOfBed"
                  label="What time did you get out of bed for the day?"
                  type="time"
                  persistent-hint
                  >
                </v-text-field>
                <v-text-field
                  v-model="form.durationOfSleep"
                  label="In total, how long did you sleep?"
                  :hint="timeToTextNew(form.durationOfSleep)? timeToTextNew(form.durationOfSleep) : 'hh:mm format'"
                  mask="time"
                  persistent-hint
                >
                </v-text-field>
                <v-select
                  v-model="form.qualityOfSleep"
                  label="How would you rate the quality of your sleep"
                  :items="['Very Poor', 'Poor', 'Fair', 'Good', 'Very good']">

                </v-select>
                <v-select
                  v-model="form.feeling"
                  label="How rested or refreshed did you feel when you woke-up for the day?"
                  :items="['Not at all', 'Slightly rested', 'Somewhat rested', 'Well-rested', 'Very well-rested']">

                </v-select>
                <v-btn class="btn-spaced" :disabled="!valid" type="submit" @click.prevent="submit" :loading="loading" color="primary">Submit</v-btn>
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
        requiredRule: [v => !!v || 'Field is required'],
        form: {
        },
        earlyWakeUp: false,
        valid: true,
        menu2: false,
        textTimeTakenToSleep: '',
        timeTakenToSleep: '00:00',
        awakeningsTimeTotal: '00:00',
        textAwakeningsTimeTotal: '',
        menu3: false,
        awakeningsFinalTimeLength: '00:00',
        textAwakeningsFinalTimeLength: '',
        menu4: false,
        earlyWakeUpTime: '00:00',
        textEarlyWakeUpTime: '',
        menu5: false,
        currentStep: 1
      }
    },

    computed: {
      ...mapGetters([
        'loading'
      ])
    },

    watch: {
      timeTakenToSleep (val) {
        this.textTimeTakenToSleep = this.timeToText(val)
      },

      awakeningsTimeTotal (val) {
        this.textAwakeningsTimeTotal = this.timeToText(val)
      },

      awakeningsFinalTimeLength (val) {
        this.textAwakeningsFinalTimeLength  = this.timeToText(val)
      },

      earlyWakeUpTime(val) {
        this.textEarlyWakeUpTime = this.timeToText(val)
      }
    },

    methods: {
      submit: async function () {
        if (this.$refs.form.validate()) {
          // Add this data to form submission
          this.form['awakeningsTimeTotal'] = this.awakeningsTimeTotal
          this.form['timeTakenToSleep'] = this.timeTakenToSleep
          this.form['awakeningsFinalTimeLength'] = this.awakeningsFinalTimeLength
          this.form['earlyWakeUpTime'] = this.earlyWakeUpTime
          const { data } = await axios.post('/sleeprecord', this.form)

          console.log(data)
        }
      },

      nextStep: function () {
        if (this.$refs.form.validate()) {
          this.currentStep += 1
        }
      },

      // Takes time in hh:mm format and outputs it in a human friendly way
      timeToText: function (time) {
        let hour = time.split(':')[0]
        let minutes = time.split(':')[1]
        // Remove leading zeros
        hour = parseInt(hour, 10)
        minutes = parseInt(minutes, 10)

        return hour + ' hours ' + minutes + ' minutes'
      },
      // In the following format 0131
      timeToTextNew: function(time) {
        if (time && time.length === 4) {
          let hours = time.substring(0,2)
          let minutes = time.substring(2,4)

          // Remove leading zeros
          hours = parseInt(hours, 10)
          minutes = parseInt(minutes, 10)

          return hours + ' hours ' + minutes + ' minutes'          
        } else {
          return false
        }
      }
    }
  }
</script>

<style scoped>
  .stepper-header:hover {
    cursor: pointer;
  }
  .btn-spaced {
    margin-left: 0;
    margin-top: 20px;
  }
</style>
