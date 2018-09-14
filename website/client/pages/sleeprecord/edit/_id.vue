<template>
  <v-layout>
    <v-flex xs12 sm10 offset-sm1>
      <v-scale-transition>
        <v-card v-if="form">
          <v-toolbar card>
            <v-btn icon to="/sleeprecord/user">
              <v-icon>arrow_back</v-icon>
            </v-btn>
            <v-toolbar-title class="body-2">Edit Sleep Record</v-toolbar-title>
          </v-toolbar>

            <v-form ref="form" v-model="valid" @submit="submit" lazy-validation="">
              <v-stepper v-model="currentStep" vertical style="box-shadow: none;">
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
                  <v-autocomplete
                    v-model="form.timeGotIntoBed"
                    label="What time did you get into bed?"
                    required
                    :rules="requiredRule"
                    :items="timeOfDays"
                    item-text="time"
                    item-value="value"
                    :filter="timeFilter">
                  </v-autocomplete>
                  
                  <v-autocomplete
                    v-model="form.timeToTrySleep"
                    label="What time did you try to go to sleep?"
                    required
                    :rules="requiredRule"
                    :items="timeOfDays"
                    item-text="time"
                    item-value="value"
                    :filter="timeFilter"
                    >
                  </v-autocomplete>
                  <v-autocomplete
                    v-model="form.timeWokenUp"
                    label="What time did you get out of bed for the day?"
                    required
                    :rules="requiredRule"
                    :items="timeOfDays"
                    item-text="time"
                    item-value="value"
                    :filter="timeFilter">
                  </v-autocomplete>
                  <v-autocomplete
                    v-model="form.timeTakenToSleepDuration"
                    label="How long did it take you to fall asleep"                  
                    :rules="requiredRule"
                    :items="timeDurationsArr"
                    item-text="time"
                    item-value="value"
                    :filter="timeFilter"
                  >
                  </v-autocomplete>
                  
                  <v-btn class="btn-spaced" :disabled="!valid" color="primary" @click="nextStep">Continue</v-btn>
                </v-stepper-content>

                <v-stepper-step step="2" :complete="currentStep > 2">
                  <span @click="currentStep = 2" class="stepper-header">Sleep Awakenings</span>
                </v-stepper-step>

                <v-stepper-content step="2" v-if="currentStep == 2">
                  <v-select
                    v-model="form.awakeningsNumber"
                    label="How many times did you wake up, not counting your final awakening?"
                    required
                    :rules="requiredRule"
                    :items="numbersList"
                    >
                  </v-select>
                  <v-autocomplete
                    v-model="form.awakeningsTotalDuration"
                    label="In total, how long did these awakenings last?"
                    :items="timeDurationsArr"
                    :rules="requiredRule"
                    item-text="time"
                    item-value="value"
                    v-if="form.awakeningsNumber && form.awakeningsNumber > 0"
                    required
                    :filter="timeFilter">
                  </v-autocomplete>
                
                  <v-autocomplete
                    v-model="form.awakeningsFinalTime"
                    label="What time was your final awakening?"
                    :items="timeOfDays"                  
                    required
                    :rules="requiredRule"
                    item-text="time"
                    item-value="value"
                    v-if="form.awakeningsNumber && form.awakeningsNumber > 0"
                    :filter="timeFilter"
                  >
                  </v-autocomplete>
                  <v-autocomplete
                    v-model="form.awakeningsFinalDuration"
                    label="After your final awakening how long did you spend in bed trying to sleep?"                  
                    :items="timeDurationsArr"
                    :rules="requiredRule"
                    item-text="time"
                    item-value="value"
                    v-if="form.awakeningsNumber && form.awakeningsNumber > 0"
                    required
                    :filter="timeFilter"
                  >
                  </v-autocomplete>
                  <v-checkbox label="Did you wake up earlier than planned?" v-model="form.earlyWakeUp"></v-checkbox>
                  <v-autocomplete
                    v-model="form.earlyWakeUpDuration"
                    label="How much earlier?"
                    :items="timeDurationsArr"
                    :rules="requiredRule"
                    item-text="time"
                    item-value="value"
                    v-if="form.earlyWakeUp"                  
                    required
                    :filter="timeFilter"
                    >

                  </v-autocomplete>
                  <v-btn class="btn-spaced" :disabled="!valid" color="primary" @click="nextStep">Continue</v-btn>                
                </v-stepper-content>

                <v-stepper-step step="3" :complete="currentStep > 3">
                  <span @click="currentStep = 3" class="stepper-header">Sleep Quality</span>
                </v-stepper-step>

                <v-stepper-content step="3" v-if="currentStep == 3">
                  <v-autocomplete
                    v-model="form.sleepDuration"
                    label="In total, how long did you sleep?"
                    :items="timeDurationsArr"
                    :rules="requiredRule"
                    item-text="time"
                    item-value="value"
                    required
                    :filter="timeFilter"
                  >
                  </v-autocomplete>
                  <v-select
                    v-model="form.sleepQuality"
                    label="How would you rate the quality of your sleep"
                    :rules="requiredRule"                                        
                    :items="['Very Poor', 'Poor', 'Fair', 'Good', 'Very good']">
                  </v-select>
                  <v-select
                    v-model="form.feeling"
                    :rules="requiredRule"                    
                    label="How rested or refreshed did you feel when you woke-up for the day?"
                    :items="['Not at all', 'Slightly rested', 'Somewhat rested', 'Well-rested', 'Very well-rested']">
                  </v-select>
                  <v-select
                    v-model="form.napDozeNum"
                    label="How many times did you nap or doze?"
                    :items="numbersList"
                    :rules="requiredRule"                    
                  >
                  </v-select>
                  <v-autocomplete
                    v-model="form.napDozeDuration"
                    label="In total, how long did you nap or doze?"
                    :items="timeDurationsArr"
                    item-text="time"
                    item-value="value"
                    v-if="form.napDozeNum > 0"
                    :filter="timeFilter"
                  >

                  </v-autocomplete>

                  <v-btn class="btn-spaced" :disabled="!valid" color="primary" @click="nextStep">Continue</v-btn>                  
                </v-stepper-content>

                <v-stepper-step step="4" :complete="currentStep > 4">
                  <span @click="currentStep = 4" class="stepper-header">Beverages & Medicine</span>
                </v-stepper-step>

                <v-stepper-content step="4" v-if="currentStep == 4">
                  <v-select
                    v-model="form.alcoholNum"  
                    label="How many drinks containing alcohol did you have?"
                    :items="numbersList"
                    :rules="requiredRule"   
                  >
                  </v-select>
                  
                  <v-autocomplete
                    v-model="form.alcoholTime"
                    label="What time was your last alcoholic drink?"
                    :items="timeOfDays"                  
                    :rules="requiredRule"
                    item-text="time"
                    item-value="value"
                    v-if="form.alcoholNum > 0"
                    :filter="timeFilter"
                  >
                  </v-autocomplete>

                   <v-select
                    v-model="form.caffeinatedNum"  
                    label="How many caffeinated drinks (coffee, tea, soda, energy drinks) did you have?"
                    :items="numbersList"
                    :rules="requiredRule"   
                  >
                  </v-select>

                   <v-autocomplete
                    v-model="form.caffeinatedTime"
                    label="What time was your last caffeinated drink?"
                    :items="timeOfDays"                  
                    :rules="requiredRule"
                    item-text="time"
                    item-value="value"
                    v-if="form.caffeinatedNum > 0"
                    :filter="timeFilter"
                  >
                  </v-autocomplete>
                  <v-checkbox label="Did you take any over-the-counter or prescription medication(s) to help you sleep?" v-model="form.otcMed"></v-checkbox>
                  <v-text-field 
                    v-if="form.otcMed && form.medicines"
                    v-for="(medicine, index) in form.medicines"
                    :key="index"
                    v-model="form.medicines[index]"
                    label="Medication, dose, and time taken e.g. Relaxo-Herb, 50 mg, 11 pm"
                  >
                  </v-text-field>
                  <v-btn @click="addMedicine" v-if="form.otcMed">
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
          // Don't submit this when empty Laravel does not handle this well
          if (this.form.medicines.length === 0) delete this.form['medicines']
          const { data } = await axios.patch('/sleeprecords/'+this.id, this.form)

          this.$router.push('/sleeprecord/user')
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
        delete this.form['user']
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
