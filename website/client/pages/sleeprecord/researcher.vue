<template>
  <v-layout>
    <v-flex xs12 sm8 offset-sm2>
      <v-scale-transition>
        <v-card v-if="items.length > 0">
          <v-list two-line>
            <template v-for="(item, index) in items" v-if="inPageRange(index)">
              <v-list-tile :key="item.user.id *10000" avatar ripple>
                <v-list-tile-action>
                  <v-btn icon :to="`/sleeprecord/user/${item.user.id}`">
                    <v-avatar>
                      <img :src="userImage(item.user)" alt="User Image">
                    </v-avatar>
                  </v-btn>
                </v-list-tile-action>

                <v-list-tile-content>
                  <v-list-tile-title>User: {{ item.user.email }}</v-list-tile-title>
                  <v-list-tile-sub-title class="text--primary">Number of Sleep Records: {{ item.numSleepRecords }}</v-list-tile-sub-title>
                  <v-list-tile-sub-title>ID: {{ item.user.id }}</v-list-tile-sub-title>
                </v-list-tile-content>

                <v-list-tile-action>
                  <v-list-tile-action-text>Last Sleep Record: {{ item.lastDate }}</v-list-tile-action-text>

                  <v-layout justify-end align-end>
                    <v-flex xs2>
                        <v-icon @click="goToVisuals(item.user.id)">
                          insert_chart_outline
                        </v-icon>
                    </v-flex>

                    <v-flex xs2>
                      <v-icon @click="convertToCSV(item)">
                        cloud_download
                      </v-icon>
                    </v-flex>

                  </v-layout>

                </v-list-tile-action>

              </v-list-tile>
              <v-divider v-if="index + 1 < items.length" :key="index"></v-divider>
            </template>
          </v-list>
        </v-card>
      </v-scale-transition>

      <div class="text-xs-center mt-2">
        <v-pagination
          v-model="page"
          :length="numpages"
        >
        </v-pagination>
      </div>
    </v-flex>
  </v-layout>
</template>


<script>
  import axios from 'axios'
  import { json2excel } from 'js2excel';
  import swal from 'sweetalert2'

  export default {
    data() {
      return {
        sleeprecords: null,
        items: [],
        page: 1,
        pageSize: 6
      };
    },

    created() {
      if (this.$store.getters['auth/check'] && this.$store.getters["auth/user"].type === "Researcher") {
        this.fetchData()
      } else {
        swal({
          title: "Warning",
          text: "You need to be a researcher to view this",
          type: "warning"
        }).then(result => {
          this.$router.push("/");
        });
      }
    },

    computed: {
      numpages () {
        if (this.items.length > 0) {
          return Math.ceil(this.items.length / this.pageSize)
        } else {
          return 0
        }
      }
    },

    methods: {
      fetchData: async function () {
          const { data } = await axios.get("/sleeprecords/all");

          this.sleeprecords = data;
        },

        convertToCSV: function (item) {
          try {
            json2excel({
              data: this.sleeprecords[item.user.id],
              name: 'User ' + item.user.email.split('@')[0] + ' SleepDiary',
              formateDate: 'yyyy/mm/dd'
            });
          } catch (e) {
            console.error(e);
          }
        },

        userImage(user) {
          return user.avatar ? user.avatar : '/ali.png'
        },

        goToVisuals(userId) {
          this.$router.push('/visual/' + userId)
        },

        inPageRange(index) {
          return index < (this.page * this.pageSize) && index >= (this.page-1) * (this.pageSize)
        }
    },

    watch: {
      sleeprecords: function (allSleepRecords) {
        for (const key of Object.keys(allSleepRecords)) {
          const item = {}
          item.numSleepRecords = 0
          const lastDate = null
          allSleepRecords[key].forEach(record => {
            item.numSleepRecords += 1
            lastDate = record.updated_at
          })
          item.lastDate = lastDate
          item.user = allSleepRecords[key][0].user
          this.items.push(item)

          // Make the sleep records that will be converted into excel format more user friendly
          allSleepRecords[key].forEach(record => {
            record['What time did you get into bed?'] = record['timeGotIntoBed']
            record['What time did you try to go to sleep?'] = record['timeToTrySleep']
            record['What time did you get out of bed for the day?'] = record['timeWokenUp']
            record['How long did it take you to fall asleep'] = record['timeTakenToSleepDuration']
            record['How many times did you wake up, not counting your final awakening?'] = record['awakeningsNumber']
            record['In total, how long did these awakenings last?'] = record['awakeningsTotalDuration']
            record['What time was your final awakening?'] = record['awakeningsFinalTime']
            record['After your final awakening how long did you spend in bed trying to sleep?'] = record['awakeningsFinalDuration']
            record['Did you wake up earlier than planned?'] = record['earlyWakeUp']
            record['In total, how long did you sleep?'] = record['sleepDuration']
            record['How would you rate the quality of your sleep'] = record['sleepQuality']
            record['How rested or refreshed did you feel when you woke-up for the day?'] = record['feeling']
            record['How many times did you nap or doze?'] = record['napDozeNum']
            record['In total, how long did you nap or doze?'] = record['napDozeDuration']
            record['How many drinks containing alcohol did you have?'] = record['alcoholNum']
            record['What time was your last alcoholic drink?'] = record['alcoholTime']
            record['How many caffeinated drinks (coffee, tea, soda, energy drinks) did you have?'] = record['caffeinatedNum']
            record['What time was your last caffeinated drink?'] = record['caffeinatedTime']
            record['Did you take any over-the-counter or prescription medication(s) to help you sleep?'] = record['otcMed']
            record['Did you wake up earlier than planned?'] = record['earlyWakeUp']
            record['Did you wake up earlier than planned?'] = record['earlyWakeUpDuration']

            // Deconstruct the medicines array and add each element as a column e.g. medicine 1
            if (record['medicines'] && record['medicines'].length > 0) {
              for (let i = 0; i < record['medicines'].length; i++) {
                record['medicine ' + i] = record['medicines'][i]
              }
            }

            delete record['timeGotIntoBed']
            delete record['timeToTrySleep']
            delete record['timeWokenUp']
            delete record['timeTakenToSleepDuration']
            delete record['awakeningsNumber']
            delete record['awakeningsTotalDuration']
            delete record['awakeningsFinalTime']
            delete record['awakeningsFinalDuration']
            delete record['earlyWakeUp']
            delete record['sleepDuration']
            delete record['sleepQuality']
            delete record['feeling']
            delete record['napDozeNum']
            delete record['napDozeDuration']
            delete record['alcoholNum']
            delete record['alcoholTime']
            delete record['caffeinatedNum']
            delete record['caffeinatedTime']
            delete record['otcMed']
            delete record['earlyWakeUpDuration']
            delete record['id']
            delete record['created_at']
            delete record['user']
            delete record['medicines']
          })
        }
      }
    }
  };
</script>