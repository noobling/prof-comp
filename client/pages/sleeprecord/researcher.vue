<template>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-list two-line v-if="sleeprecords">
          <template v-for="(item, index) in items">
            <v-list-tile :key="item.user" avatar ripple>
              <v-list-tile-content>
                <v-list-tile-title>User: {{ item.user }}</v-list-tile-title>
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
              name: 'User-'+user+'Sleep-Diary',
              formateDate: 'yyyy/mm/dd'
            });
          } catch (e) {
            console.error(e);
          }
        }
    },

    watch: {
      sleeprecords: function (val) {
        for (const key of Object.keys(val)) {
          const item = { user: key }
          item.numSleepRecords = 0
          const lastDate = null
          val[key].forEach(record => {
            item.numSleepRecords += 1
            lastDate = record.updated_at
          })
          item.lastDate = lastDate
          this.items.push(item)
        }
      }
    }
  };
</script>