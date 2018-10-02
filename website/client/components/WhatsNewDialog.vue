<template>
  <div>
    <v-dialog v-model="whatsNewDialog" width="500">
      <v-card>
        <v-card-title class="headline grey lighten-2 color--white" primary-title>
          What's New 🎉
        </v-card-title>

        <v-card-text>
          <ul>
            <li v-for="(item, index) in whatsnew" :key="index" class="mb-2">{{item}}</li>
          </ul>
          <p>
             Stay tuned as we continue to improve the application 😀
          </p>
        </v-card-text>

        <v-card-actions>
          <v-btn @click="viewDialog" color="primary">
            Cool
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  import axios from 'axios'
  import swal from 'sweetalert2'

  export default {
    created () {
        this.whatsNewDialog = localStorage.getItem('whatsnewnumber') != this.whatsnewnumber 

    },

    data () {
      return {
        whatsnewnumber: '2', // This represents the most recent whats new version if the number is higher than the user's localstorage whatsnewnumber then we show them the whatsnewdialog
        whatsnew: ['You can now view a graph of the hours your have slept', 'Fixed bugs in converting JSON to excel', 'Researchers can view graphs of their patients', 'You can reset passwords', 'Production error logging (if you break something we will know 😉)', 'No support for IE yet :('],
        whatsNewDialog: false
      }
    },

    methods: {
      viewDialog() {
        localStorage.setItem('whatsnewnumber', '2')
        this.whatsNewDialog = false
      }
    }
  }
</script>