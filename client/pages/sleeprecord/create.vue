<template>
  <v-layout>
    <v-flex xs12 sm8 offset-sm2>
      <v-scale-transition v-if="form">
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
                  <v-select
                    v-model="form.timeGotIntoBed"
                    label="What time did you get into bed?"
                    required
                    :rules="requiredRule"
                    :items="timeOfDays"
                    item-text="time"
                    item-value="value"
                    autocomplete>
                  </v-select>
                  <v-select
                    v-model="form.timeToTrySleep"
                    label="What time did you try to go to sleep?"
                    required
                    :rules="requiredRule"
                    :items="timeOfDays"
                    item-text="time"
                    item-value="value"
                    autocomplete
                    >
                  </v-select>
                  <v-select
                    v-model="form.timeWokenUp"
                    label="What time did wake up?"
                    required
                    :rules="requiredRule"
                    :items="timeOfDays"
                    item-text="time"
                    item-value="value"
                    autocomplete>
                  </v-select>
                  <v-select
                    v-model="form.timeTakenToSleepDuration"
                    label="How long did it take you to sleep"                  
                    :rules="requiredRule"
                    :items="timeDurationsArr"
                    item-text="time"
                    item-value="value"
                    autocomplete
                  >
                  </v-select>
                  
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
                    :items="timeDurationsArr"
                    :rules="requiredRule"
                    item-text="time"
                    item-value="value"
                    v-if="form.awakeningsNumber && form.awakeningsNumber > 0"
                    required
                    autocomplete>
                  </v-select>
                
                  <v-select
                    v-model="form.awakeningsFinalTime"
                    label="What time was your final awakening?"
                    :items="timeOfDays"                  
                    required
                    :rules="requiredRule"
                    item-text="time"
                    item-value="value"
                    v-if="form.awakeningsNumber && form.awakeningsNumber > 0"
                    autocomplete
                    >
                  </v-select>
                  <v-select
                    v-model="awakeningsFinalDuration"
                    label="After your final awakening how long did you spend in bed trying to sleep?"                  
                    :items="timeDurationsArr"
                    :rules="requiredRule"
                    item-text="time"
                    item-value="value"
                    v-if="form.awakeningsNumber && form.awakeningsNumber > 0"
                    required
                    autocomplete
                  >
                  </v-select>
                  <v-checkbox label="Did you wake up earlier than planned?" v-model="earlyWakeUp"></v-checkbox>
                  <v-select
                    v-model="earlyWakeUpDuration"
                    label="How much earlier?"
                    :items="timeDurationsArr"
                    :rules="requiredRule"
                    item-text="time"
                    item-value="value"
                    v-if="earlyWakeUp"                  
                    required
                    autocomplete
                    >

                  </v-select>
                  <v-btn class="btn-spaced" :disabled="!valid" color="primary" @click="nextStep">Continue</v-btn>                
                </v-stepper-content>

                <v-stepper-step step="3" :complete="currentStep > 3">
                  <span @click="currentStep = 3" class="stepper-header">Sleep Quality</span>
                </v-stepper-step>

                <v-stepper-content step="3" v-if="currentStep == 3">
                  <v-select
                    v-model="form.timeOutOfBed"
                    label="What time did you get out of bed for the day?"
                    :items="timeOfDays.reverse()"
                    :rules="requiredRule"
                    item-text="time"
                    item-value="value"
                    required
                    autocomplete
                    >
                  </v-select>
                  <v-select
                    v-model="form.sleepDuration"
                    label="In total, how long did you sleep?"
                    :items="timeDurationsArr"
                    :rules="requiredRule"
                    item-text="time"
                    item-value="value"
                    required
                    autocomplete
                  >
                  </v-select>
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
      </v-scale-transition>
     
    </v-flex>
  </v-layout>
 
</template>

<script>
  import axios from 'axios'
  import { mapGetters } from 'vuex'
  import timeMixin from '~/mixins/timeMixin'

  export default {
    head() {
      return { title: 'New Sleep Record' }
    },

    components: {},

    mixins: [timeMixin],

    created() {
      const currentDate = new Date()
      const day = currentDate.getDate()
      const month = currentDate.getMonth() + 1
      const year = currentDate.getFullYear()
      this.form.date = year + '-' + month.toString().padStart(2, '0') + '-' + day.toString().padStart(2, '0')

      if (this.$route.query.sleeprecord) {
        this.form = this.$route.query.sleeprecord
      }
    },

    data() {
      return {
        requiredRule: [v => !!v || 'Field is required'],
        form: {
          awakeningsFinalTime: '00:00'
        },
        earlyWakeUp: false,
        valid: true,
        awakeningsTotalDuration: '00:00',
        textawakeningsTotalDuration: '',
        awakeningsFinalDuration: '00:00',
        textawakeningsFinalDuration: '',
        earlyWakeUpDuration: '00:00',
        textearlyWakeUpDuration: '',
        currentStep: 1
      }
    },

    computed: {
      ...mapGetters([
        'loading'
      ]),

      timeOfDays () {
        return this.timeOfDayArr()
      },

      timeDurationsArr () {
        return this.timeDurations()
      }
    },

    watch: {
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
          this.form['awakeningsFinalDuration'] = this.awakeningsFinalDuration
          this.form['earlyWakeUpDuration'] = this.earlyWakeUpDuration
          const { data } = await axios.post('/user/sleeprecord', this.form)

          this.$router.push('/sleeprecord/user')
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
