<template>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        {{ sleeprecords }}
      </v-card>
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
        console.log(data)
      }
    }
  }
</script>