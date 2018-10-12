<template>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-scale-transition>
        <v-card class="card red lighten-2" dark v-if="sleeprecords" >
          <v-toolbar class="headline red lighten-3">
            <v-toolbar-title>Sleep Journal for {{ sleeprecords[0].user.email }}</v-toolbar-title>
          </v-toolbar>

          <v-card-text v-if="!sleeprecords || sleeprecords.length < 1">
            <h2>No Sleep Records yet :(</h2>
          </v-card-text>

          <v-list class="red lighten-2">
            <template v-for="(record, index) in sleeprecords">
              <v-divider
                v-if="index != 0"
                :key="record.date"
              ></v-divider>
              <v-list-tile three-line :key="index" class="mt-2 mb-2">
                 <v-list-tile-action @click="gotoRoute(record)">
                  <v-btn icon>
                    <v-icon>edit</v-icon>
                  </v-btn>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>
                    {{ record.date }}
                  </v-list-tile-title>
                  <v-list-tile-sub-title>
                    Sleep Quality: {{ record.sleepQuality }}
                  </v-list-tile-sub-title>
                </v-list-tile-content>

               
                <v-list-tile-action @click="deleteSleepRecord(record)">
                  <v-btn icon>
                    <v-icon>delete</v-icon>
                  </v-btn>
                </v-list-tile-action>
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
      } else {
        this.fetchData()      
      }
    },

    methods: {
      fetchData: async function () {
        const { data } = await axios.get('user/' + this.$route.params.id + '/sleeprecords')
        this.sleeprecords = data
      },

      gotoRoute: function (sleeprecord) {
        this.$router.push('/sleeprecord/edit/' + sleeprecord.id)
      },

      deleteSleepRecord(record) {
         swal({
          title: 'Are you sure you want to delete this sleep record?',
          text: 'You won\'t be able to undo this.',
          showCancelButton: true,
          confirmButtonText: 'Yes delete it!',
          cancelButtonText: 'No, cancel',
          showCloseButton: true,
          postConfirm: this.sendDeleteRequest,
          reverseButtons: true
        }).then(result => {
          // If they clicked the confirm button
          if(result.value) {
            axios.delete('sleeprecords/' + record.id)
              .then(data => {
                this.sleeprecords = this.sleeprecords.filter(sleeprecord => sleeprecord != record)
              })
          }
        })
      }
    }
  }
</script>

<style scoped>
  .card {
    padding: 0
  }
</style>
