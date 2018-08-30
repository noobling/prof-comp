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
                  :return-value.sync="timeTakenToSleepDuration"
                  lazy
                  transition="scale-transition"
                  offset-y
                  full-width
                  max-width="290px"
                  min-width="290px"
                >
                  <v-text-field
                    slot="activator"
                    v-model="texttimeTakenToSleepDuration"
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
                    v-model="timeTakenToSleepDuration"
                    @change="$refs.menu.save(timeTakenToSleepDuration)"
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
                <v-select
                  v-model="awakeningsTotalDuration"
                  label="In total, how long did these awakenings last?"
                  :items="timeLengths"
                  :rules="requiredRule"
                  item-text="time"
                  item-value="value"
                  required>
                </v-select>
               
                <v-text-field
                  v-model="form.awakeningsFinalTime"
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
                  :return-value.sync="awakeningsFinalDuration"
                  lazy
                  full-width
                  transition="scale-transition"
                  v-if="form.awakeningsNumber && form.awakeningsNumber > 0" 
                >
                  <v-text-field
                    slot="activator"
                    v-model="textawakeningsFinalDuration"
                    :rules="requiredRule"
                    required
                    label="After your final awakening how long did you spend in bed trying to sleep?"
                    hint="hh:mm format"
                    persistent-hint
                    readonly
                  ></v-text-field>
                  <v-time-picker
                    v-if="menu4"
                    v-model="awakeningsFinalDuration"
                    @change="$refs.menu4.save(awakeningsFinalDuration)"
                    format="24hr"
                  ></v-time-picker>
                </v-menu>
                <v-checkbox label="Did you wake up earlier than planned?" v-model="earlyWakeUp"></v-checkbox>
                <v-menu
                  ref="menu5"                
                  :close-on-content-click="false"
                  v-model="menu5"
                  :return-value.sync="earlyWakeUpDuration"
                  lazy
                  full-width
                  transition="scale-transition"
                  v-if="earlyWakeUp"
                >
                  <v-text-field
                    slot="activator"
                    v-model="textearlyWakeUpDuration"
                    :rules="requiredRule"
                    required
                    label="How much earlier?"
                    hint="hh:mm format"
                    persistent-hint
                    readonly
                  ></v-text-field>
                  <v-time-picker
                    v-if="menu5"
                    v-model="earlyWakeUpDuration"
                    @change="$refs.menu5.save(earlyWakeUpDuration)"
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
                  v-model="form.sleepDuration"
                  label="In total, how long did you sleep?"
                  :hint="timeToTextNew(form.sleepDuration)? timeToTextNew(form.sleepDuration) : 'hh:mm format'"
                  mask="time"
                  persistent-hint
                >
                </v-text-field>
                <v-select
                  v-model="form.sleepQuality"
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
        texttimeTakenToSleepDuration: '',
        timeTakenToSleepDuration: '00:00',
        awakeningsTotalDuration: '00:00',
        textawakeningsTotalDuration: '',
        menu3: false,
        awakeningsFinalDuration: '00:00',
        textawakeningsFinalDuration: '',
        menu4: false,
        earlyWakeUpDuration: '00:00',
        textearlyWakeUpDuration: '',
        menu5: false,
        currentStep: 1,
        timeLengths: [
          { time: '15 minutes', value: '00:15'},
          { time: '30 minutes', value: '00:30'},
          { time: '45 minutes', value: '00:45'},
          { time: '1 hour', value: '01:00'},
          { time: '1 hour 15 minutes', value: '01:15'},
          { time: '1 hour 30 minutes', value: '01:30'},
          { time: '1 hour 45 minutes', value: '01:45'},
          { time: '2 hours', value: '02:00'},
          { time: '2 hours 15 minutes', value: '02:15'},
          { time: '2 hours 30 minutes', value: '02:30'},
          { time: '2 hours 45 minutes', value: '02:45'},
          { time: '3 hours', value: '03:00'},
          { time: '3 hours 15 minutes', value: '03:15'},
          { time: '3 hours 30 minutes', value: '03:30'},
          { time: '3 hours 45 minutes', value: '03:45'},
          { time: '4 hours', value: '04:00'},
          { time: '4 hours 15 minutes', value: '04:15'},
          { time: '4 hours 30 minutes', value: '04:30'},
          { time: '4 hours 45 minutes', value: '04:45'},
          { time: '5 hours', value: '05:00'},
          { time: '5 hours 15 minutes', value: '05:15'},
          { time: '5 hours 30 minutes', value: '05:30'},
          { time: '5 hours 45 minutes', value: '05:45'},
          { time: '6 hours', value: '06:00'}
        ]
      }
    },

    computed: {
      ...mapGetters([
        'loading'
      ])
    },

    watch: {
      timeTakenToSleepDuration (val) {
        this.texttimeTakenToSleepDuration = this.timeToText(val)
      },

      awakeningsTotalDuration (val) {
        this.textawakeningsTotalDuration = this.timeToText(val)
      },

      awakeningsFinalDuration (val) {
        this.textawakeningsFinalDuration  = this.timeToText(val)
      },

      earlyWakeUpDuration(val) {
        this.textearlyWakeUpDuration = this.timeToText(val)
      }
    },

    methods: {
      submit: async function () {
        if (this.$refs.form.validate()) {
          // Add this data to form submission
          this.form['awakeningsTotalDuration'] = this.awakeningsTotalDuration
          this.form['timeTakenToSleepDuration'] = this.timeTakenToSleepDuration
          this.form['awakeningsFinalDuration'] = this.awakeningsFinalDuration
          this.form['earlyWakeUpDuration'] = this.earlyWakeUpDuration
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
