<template>
  <v-layout>
    <v-flex xs12 sm10 offset-sm1>
      <v-scale-transition v-if="form">
        <v-card>
          <v-toolbar card>
            <v-btn icon to="/home">
              <v-icon>arrow_back</v-icon>
            </v-btn>
            <v-toolbar-title class="body-2">Edit Sleep Record</v-toolbar-title>
          </v-toolbar>

            <v-form ref="form" v-model="valid" @submit="submit" lazy-validation="">
              <v-progress-circular
                :size="70"
                :width="7"
                color="primary"
                indeterminate
                v-if="loading"
              ></v-progress-circular>
              <v-stepper v-model="currentStep" vertical style="box-shadow: none;" v-if="!loading">
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
                  <div class="row">
                    <v-text-field
                    v-model="form.timeGotIntoBed"
                    label="What time did you get into bed?"
                    required
                    :rules="requiredRule"
                    type="time"
                    hint="hh:mm am|pm">
                 
                  </v-text-field>
                   <v-tooltip left class="ml-2">
                    <v-icon
                      slot="activator"
                      color="primary"
                      dark
                    >info</v-icon>
                    <span>What time did you get into bed?</span>
                  </v-tooltip>
                  </div>
                  
                  <div class="row">
                    <v-text-field
                      v-model="form.timeToTrySleep"
                      label="What time did you try to go to sleep?"
                      required
                      :rules="requiredRule"
                      type="time"
                      >
                    </v-text-field>
                    <v-tooltip left class="ml-2">
                      <v-icon
                        slot="activator"
                        color="primary"
                        dark
                      >info</v-icon>
                      <span>What time did you try to go to sleep?</span>
                    </v-tooltip>
                  </div>

                  <div class="row">
                    <v-text-field
                      v-model="form.timeWokenUp"
                      label="What time did you get out of bed for the day?"
                      required
                      :rules="requiredRule"
                      type="time">
                    </v-text-field>

                    <v-tooltip left class="ml-2">
                      <v-icon
                        slot="activator"
                        color="primary"
                        dark
                      >info</v-icon>
                      <span>What time did you get out of bed for the day?</span>
                    </v-tooltip>
                  </div>
                  
                  <div class="row">
                    <v-text-field
                      v-model="form.timeTakenToSleepDuration"
                      label="How long did it take you to fall asleep"                  
                      :rules="requiredRule"
                      required
                      mask="time"
                      placeholder="hh:mm"
                      :hint="humanDurationText(form.timeTakenToSleepDuration)"
                      >
                    </v-text-field>

                    <v-tooltip left class="ml-2">
                      <v-icon
                        slot="activator"
                        color="primary"
                        dark
                      >info</v-icon>
                      <span>How long did it take you to fall asleep</span>
                    </v-tooltip>
                  </div>
                  
                  
                  <v-btn class="btn-spaced" :disabled="!valid" color="primary" @click="nextStep">Continue</v-btn>
                </v-stepper-content>

                <v-stepper-step step="2" :complete="currentStep > 2">
                  <span @click="currentStep = 2" class="stepper-header">Sleep Awakenings</span>
                </v-stepper-step>

                <v-stepper-content step="2" v-if="currentStep == 2">
                  <div class="row">
                    <v-select
                      v-model="form.awakeningsNumber"
                      label="How many times did you wake up, not counting your final awakening?"
                      required
                      :rules="requiredRule"
                      :items="numbersList"
                      >
                    </v-select>
                    <v-tooltip left class="ml-2">
                      <v-icon
                        slot="activator"
                        color="primary"
                        dark
                      >info</v-icon>
                      <span>How many times did you wake up, not counting your final awakening?</span>
                    </v-tooltip>
                  </div>
                  
                  <div class="row" v-if="form.awakeningsNumber && form.awakeningsNumber > 0">
                    <v-text-field
                      v-model="form.awakeningsTotalDuration"
                      label="In total, how long did these awakenings last?"
                      :rules="requiredRule"                      
                      required
                      :hint="humanDurationText(form.awakeningsTotalDuration)"
                      placeholder="hh:mm"
                      mask="time"
                      >
                    </v-text-field>
                    <v-tooltip left class="ml-2">
                      <v-icon
                        slot="activator"
                        color="primary"
                        dark
                      >info</v-icon>
                      <span>In total, how long did these awakenings last?</span>
                    </v-tooltip>
                  </div>
                  
                  <div class="row" v-if="form.awakeningsNumber && form.awakeningsNumber > 0">
                    <v-text-field
                      v-model="form.awakeningsFinalTime"
                      label="What time was your final awakening?"
                      required
                      :rules="requiredRule"
                      
                      type="time"
                      hint="hh:mm am|pm"
                    >
                    </v-text-field>
                    <v-tooltip left class="ml-2">
                      <v-icon
                        slot="activator"
                        color="primary"
                        dark
                      >info</v-icon>
                      <span>What time was your final awakening?</span>
                    </v-tooltip>                    
                  </div>
                 
                 <div class="row" v-if="form.awakeningsNumber && form.awakeningsNumber > 0">
                  <v-text-field
                      v-model="form.awakeningsFinalDuration"
                      label="After your final awakening how long did you spend in bed trying to sleep?"                  
                      :rules="requiredRule"
                      
                      required
                      mask="time"
                      placeholder="hh:mm"
                      :hint="humanDurationText(form.awakeningsFinalDuration)"
                    >
                    </v-text-field>

                    <v-tooltip left class="ml-2">
                      <v-icon
                        slot="activator"
                        color="primary"
                        dark
                      >info</v-icon>
                      <span>After your final awakening how long did you spend in bed trying to sleep?</span>
                    </v-tooltip>
                 </div>
                  
                  <div class="row">
                    <v-checkbox label="Did you wake up earlier than planned?" v-model="form.earlyWakeUp" color="primary"></v-checkbox>

                    <v-tooltip left class="ml-2">
                      <v-icon
                        slot="activator"
                        color="primary"
                        dark
                      >info</v-icon>
                      <span>Did you wake up earlier than planned?</span>
                    </v-tooltip>
                  </div>
                  <v-text-field
                    v-model="form.earlyWakeUpDuration"
                    label="How much earlier?"
                    :rules="requiredRule"
                    v-if="form.earlyWakeUp"                  
                    required
                    mask="time"
                    :hint="humanDurationText(form.earlyWakeUpDuration)"
                    aria-placeholder="hh:mm"
                    >

                  </v-text-field>
                  
                  <v-btn class="btn-spaced" :disabled="!valid" color="primary" @click="nextStep">Continue</v-btn>                
                </v-stepper-content>

                <v-stepper-step step="3" :complete="currentStep > 3">
                  <span @click="currentStep = 3" class="stepper-header">Sleep Quality</span>
                </v-stepper-step>

                <v-stepper-content step="3" v-if="currentStep == 3">
                  <div class="row">
                    <v-text-field
                      v-model="form.sleepDuration"
                      label="In total, how long did you sleep?"
                      :rules="requiredRule"
                      required
                      mask="time"
                      placeholder="hh:mm"
                      :hint="humanDurationText(form.sleepDuration)"
                    >
                    </v-text-field>

                    <v-tooltip left class="ml-2">
                      <v-icon
                        slot="activator"
                        color="primary"
                        dark
                      >info</v-icon>
                      <span>In total, how long did you sleep?</span>
                    </v-tooltip>
                  </div>
                  
                  <div class="row">
                    <v-select
                      v-model="form.sleepQuality"
                      label="How would you rate the quality of your sleep"
                      :rules="requiredRule"                                        
                      :items="['Very Poor', 'Poor', 'Fair', 'Good', 'Very good']">
                    </v-select>
                    <v-tooltip left class="ml-2">
                      <v-icon
                        slot="activator"
                        color="primary"
                        dark
                      >info</v-icon>
                      <span>How would you rate the quality of your sleep</span>
                    </v-tooltip>
                  </div>
                  
                  <div class="row">
                    <v-select
                      v-model="form.feeling"
                      :rules="requiredRule"                    
                      label="How rested or refreshed did you feel when you woke-up for the day?"
                      :items="['Not at all', 'Slightly rested', 'Somewhat rested', 'Well-rested', 'Very well-rested']">
                    </v-select>

                    <v-tooltip left class="ml-2">
                      <v-icon
                        slot="activator"
                        color="primary"
                        dark
                      >info</v-icon>
                      <span>How rested or refreshed did you feel when you woke-up for the day?</span>
                    </v-tooltip>
                  </div>
                  
                  <div class="row">
                    <v-select
                      v-model="form.napDozeNum"
                      label="How many times did you nap or doze?"
                      :items="numbersList"
                      :rules="requiredRule"
                      required             
                    >
                    </v-select>

                    <v-tooltip left class="ml-2">
                      <v-icon
                        slot="activator"
                        color="primary"
                        dark
                      >info</v-icon>
                      <span>How many times did you nap or doze?</span>
                    </v-tooltip>
                  </div>
                  
                  <div class="row" v-if="form.napDozeNum && form.napDozeNum > 0">
                    <v-text-field
                      v-model="form.napDozeDuration"
                      label="In total, how long did you nap or doze?"
                      :rules="requiredRule"
                      required                    
                      mask="time"
                      placeholder="hh:mm"
                      :hint="humanDurationText(form.napDozeDuration)"
                    >
                    </v-text-field>

                    <v-tooltip left class="ml-2">
                      <v-icon
                        slot="activator"
                        color="primary"
                        dark
                      >info</v-icon>
                      <span>In total, how long did you nap or doze?</span>
                    </v-tooltip>
                  </div>
                 

                  <v-btn class="btn-spaced" :disabled="!valid" color="primary" @click="nextStep">Continue</v-btn>                  
                </v-stepper-content>

                <v-stepper-step step="4" :complete="currentStep > 4">
                  <span @click="currentStep = 4" class="stepper-header">Beverages & Medicine</span>
                </v-stepper-step>

                <v-stepper-content step="4" v-if="currentStep == 4">
                  <div class="row">
                    <v-select
                      v-model="form.alcoholNum"  
                      label="How many drinks containing alcohol did you have?"
                      :items="numbersList"
                      :rules="requiredRule"   
                    >
                    </v-select>

                    <v-tooltip left class="ml-2">
                      <v-icon
                        slot="activator"
                        color="primary"
                        dark
                      >info</v-icon>
                      <span>How many drinks containing alcohol did you have?</span>
                    </v-tooltip>
                  </div>
                  
                  
                  <div class="row" v-if="form.alcoholNum > 0">
                    <v-text-field
                      v-model="form.alcoholTime"
                      label="What time was your last alcoholic drink?"
                      :rules="requiredRule"
                      type="time"
                      hint="hh:mm am|pm"
                    >
                    </v-text-field>

                    <v-tooltip left class="ml-2">
                      <v-icon
                        slot="activator"
                        color="primary"
                        dark
                      >info</v-icon>
                      <span>What time was your last alcoholic drink?</span>
                    </v-tooltip>
                  </div>
                  
                  <div class="row">
                    <v-select
                      v-model="form.caffeinatedNum"  
                      label="How many caffeinated drinks (coffee, tea, soda, energy drinks) did you have?"
                      :items="numbersList"
                      :rules="requiredRule"   
                    >
                    </v-select>

                    <v-tooltip left class="ml-2">
                      <v-icon
                        slot="activator"
                        color="primary"
                        dark
                      >info</v-icon>
                      <span>How many caffeinated drinks (coffee, tea, soda, energy drinks) did you have?</span>
                    </v-tooltip>
                  </div>
                   
                  
                  <div class="row" v-if="form.caffeinatedNum > 0">
                    <v-text-field
                      v-model="form.caffeinatedTime"
                      label="What time was your last caffeinated drink?"
                      :rules="requiredRule"
                      type="time"
                      hint="hh:mm am|pm"
                    >
                    </v-text-field>

                    <v-tooltip left class="ml-2">
                      <v-icon
                        slot="activator"
                        color="primary"
                        dark
                      >info</v-icon>
                      <span>What time was your last caffeinated drink?</span>
                    </v-tooltip>
                  </div>

                  <div class="row">
                    <v-checkbox label="Did you take any over-the-counter or prescription medication(s) to help you sleep?" v-model="form.otcMed" color="primary"></v-checkbox>
                    <v-tooltip left class="ml-2">
                      <v-icon
                        slot="activator"
                        color="primary"
                        dark
                      >info</v-icon>
                      <span>Did you take any over-the-counter or prescription medication(s) to help you sleep?</span>
                    </v-tooltip>
                  </div>
                   
                  <div class="row" 
                    v-if="form.otcMed && form.medicines"
                    v-for="(medicine, index) in form.medicines"
                    :key="index">
                    <v-text-field 
                      v-model="form.medicines[index]"
                      label="Medication, dose, and time taken e.g. Relaxo-Herb, 50 mg, 11 pm"
                    >
                    </v-text-field>

                    <v-tooltip left class="ml-2">
                      <v-icon
                        slot="activator"
                        color="primary"
                        dark
                      >info</v-icon>
                      <span>Medication, dose, and time taken e.g. Relaxo-Herb, 50 mg, 11 pm</span>
                    </v-tooltip>
                  </div>
                  
                  <v-btn class="btn-spaced" @click="addMedicine" v-if="form.otcMed">
                    <v-icon>add</v-icon>
                    Add Medicine
                  </v-btn>
                  <v-textarea
                    v-model="form.comments"
                    label="Comments (if applicable)"
                  >

                  </v-textarea>
                  <v-btn class="btn-spaced" :disabled="!valid" type="submit" @click.prevent="submit" :loading="loading" color="primary">Submit</v-btn>                  
                </v-stepper-content>
              </v-stepper>
            </v-form>
        </v-card>
      </v-scale-transition>
    </v-flex>
  </v-layout>
 
</template>

<script>
  import axios from 'axios'
  import { mapGetters } from 'vuex'
  import timeMixin from '~/mixins/timeMixin'
  import swal from 'sweetalert2'

  export default {
    head() {
      return { title: 'Edit Sleep Record' }
    },

    components: {},

    mixins: [timeMixin],

    created() {
      if (!this.$store.getters['auth/check']) {
         swal({
          title: "Warning",
          text: "You need to login to view this page",
          type: "warning"
        }).then(result => {
          this.$router.push("/login");
        });
      }
      
      this.fetchData()      

    },

    data() {
      return {
        requiredRule: [ v => (v == 0 || !!v) || 'Field is required'],
        form: {
          medicines: []
        },
        earlyWakeUp: false,
        valid: true,
        currentStep: 1,
        toProcess: ['timeTakenToSleepDuration', 'awakeningsTotalDuration', 'awakeningsFinalDuration', 'earlyWakeUpDuration', 'napDozeDuration', 'sleepDuration']        
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
      },

      id () {
          return this.$route.params.id
      }
    },

    watch: {
    
    },

    methods: {
      submit: async function () {
        if (this.$refs.form.validate()) {
          this.processForm()
          // Don't submit this when empty Laravel does not handle this well
          if (this.form.medicines.length === 0) delete this.form['medicines']
          const { data } = await axios.patch('/sleeprecords/'+this.id, this.form)

          this.$router.push('/sleeprecord/user/' + this.$store.getters['auth/user'].id)
        }
      },

      nextStep: function () {
        if (this.$refs.form.validate()) {
          this.currentStep += 1
        }
      },

      timeFilter (item, queryText, itemText) {
        const time = item.time.toLowerCase()
        const value = item.value.toLowerCase()
        const searchText = queryText.toLowerCase()

        return time.indexOf(searchText) > -1 || 
          value.indexOf(searchText) > -1 ||
          item.quickFindText.indexOf(searchText) > -1
      },

      addMedicine: function () {
        this.form.medicines.push('')
      },

      fetchData: async function () {
        const { data } = await axios.get('/sleeprecords/' + this.$route.params.id)

        this.form = data
        if (!data.medicines) this.form.medicines = []
        this.removeUnwantedAttr()
        
        this.preProcessForm()
      },

      removeUnwantedAttr() {
        delete this.form['user']
        delete this.form['updated_at']
      },

       processForm: function () {
        for (let index in this.toProcess) {
          if (this.form[this.toProcess[index]] && this.form[this.toProcess[index]].indexOf(':') === -1) {
            const time = this.getCorrectDurationText(this.form[this.toProcess[index]])
            this.form[this.toProcess[index]] = time.slice(0, 2) + ':' + time.slice(2)
          }
        }
      },

      preProcessForm: function () {
        for (let index in this.toProcess) {
          if (this.form[this.toProcess[index]]) {
            const time = this.form[this.toProcess[index]]
            this.form[this.toProcess[index]] = time.split(':').join('')  
          }
        }
      },

      humanDurationText(dur) {
        if (dur) {
          const duration = this.getCorrectDurationText(dur)          
          const hours = duration.substring(0,2)
          const minutes = duration.substring(2)
          return hours + ' hour(s) ' + minutes + ' minute(s)'
        } else {
          return ''
        }
      },

      getCorrectDurationText(duration){
        if (duration) {
          let text = duration
          if (duration.length === 1) {
            text = duration.padStart(2, '0')
          }
          return text.padEnd(4, '0')
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
  .row {
    display: flex
  }
</style>
