<template>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-scale-transition>
        <v-card dark v-if="sleeprecords" >
          <v-toolbar class="headline red lighten-3">
            <v-toolbar-title>Sleep Journal</v-toolbar-title>
          </v-toolbar>

          <v-list class="red lighten-2">
            <template v-for="(record, index) in sleeprecords">
              <v-divider
                v-if="index != 0"
                :key="record.date"
              ></v-divider>
              <v-list-tile three-line :key="index" class="mt-2 mb-2" @click="gotoRoute(record)">
                <v-list-tile-content>
                  <v-list-tile-title>
                    {{ record.date }}
                  </v-list-tile-title>
                  <v-list-tile-sub-title>
                    Sleep Quality: {{ record.sleepQuality }}
                  </v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
            </template>
          </v-list>
        </v-card>
      </v-scale-transition>
      
    </v-flex>
  </v-layout>
</template>


<script>
  import swal from 'sweetalert2'
  import axios from 'axios'

  export default {
    data () {
      return {
        sleeprecords: null
      }
    },

    created () {
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

    methods: {
      fetchData: async function () {
        const { data } = await axios.get('user/sleeprecords')
        this.sleeprecords = data
      },

      gotoRoute: function (sleeprecord) {
        this.$router.push({ path: '/sleeprecord/create', query: { sleeprecord }})
      }
    }
  }
</script>