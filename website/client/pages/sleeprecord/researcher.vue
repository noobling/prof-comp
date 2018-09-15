<template>
  <v-layout>
    <v-flex xs12 sm8 offset-sm2>
      <v-scale-transition>
        <v-card v-if="sleeprecords">
          <v-list two-line >
            <template v-for="(item, index) in items">
              <v-list-tile :key="item.user.id + id" avatar ripple>
                <v-list-tile-action>
                  <v-btn icon :to="`/sleeprecord/user/${item.user.id}`">
                    <v-avatar>
                      <img :src="userImage(item.user)" alt="User Image">
                    </v-avatar>
                  </v-btn>
                </v-list-tile-action>

                <v-list-tile-content>
                  <v-list-tile-title>User: {{ item.user.id }}</v-list-tile-title>
                  <v-list-tile-sub-title class="text--primary">Number of Sleep Records: {{ item.numSleepRecords }}</v-list-tile-sub-title>
                  <v-list-tile-sub-title>Filler</v-list-tile-sub-title>
                </v-list-tile-content>

                <v-list-tile-action>
                  <v-list-tile-action-text>Last Sleep Record: {{ item.lastDate }}</v-list-tile-action-text>
                  <v-icon @click="convertToCSV(item)">
                    cloud_download
                  </v-icon>
                </v-list-tile-action>

              </v-list-tile>
              <v-divider v-if="index + 1 < items.length" :key="index"></v-divider>
            </template>
          </v-list>
        </v-card>
      </v-scale-transition>
      
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
        items: []
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

    methods: {
      fetchData: async function () {
          const { data } = await axios.get("/sleeprecords/all");

          this.sleeprecords = data;
        },

        convertToCSV: function (item) {
          try {
            json2excel({
              data: this.sleeprecords[item.user],
              name: 'User'+item.user+'SleepDiary',
              formateDate: 'yyyy/mm/dd'
            });
          } catch (e) {
            console.error(e);
          }
        },
        
        userImage(user) {
          return user.avatar ? user.avatar : '/ali.png'
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

          allSleepRecords[key].forEach(record => {
            record['What time did you get into bed?'] = record['timeGotIntoBed']
            record['What time did you try to go to sleep?'] = record['timeToTrySleep']
            record['']

            delete record['timeGotIntoBed']
            delete record['timeToTrySleep']
            delete record['id']
          })
        }
      }
    }
  };
</script>