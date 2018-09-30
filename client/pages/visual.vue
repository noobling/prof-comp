<template>
  <v-layout>
    <v-flex sm6 xs12>
      <line-chart v-if="lineChartData" :data="lineChartData" :options="options">

      </line-chart>
    </v-flex>
  </v-layout>
</template>

<script>

import LineChart from '~/components/line-chart.js'
import axios from 'axios'

export default {
  head() {
    return { title: 'Sleep Diary App - Visualise'}
  },

  components: {
    LineChart
  },

  created () {
    this.fetchData()
  },

  data() {
    return {
      lineChartData: null,

      options: {
        responsive: true,
        maintainAspectRatio: false,
        title: {
          display: true,
          fontColor: '#fff',
          fontSize: '18',
          text: 'Sleep Duration History'
        },
        legend: {
          labels: {
            fontColor: '#fff'
          }
        },
        scales: {
          xAxes: [{
            gridLines: {
              color: '#fffff'
            },
            scaleLabel: {
              display: true,
              labelString: 'Dates',
              fontColor: '#fff'
            },
            ticks: {
              fontColor: '#fff'
            }
          }],

          yAxes: [{
            gridLines: {
              color: '#fff'
            },
            scaleLabel: {
              display: true,
              labelString: 'Hours',
              fontColor: '#fff'
            },
            ticks: {
              fontColor: '#fff',
              beginAtZero: true
            }
          }]
        }
      }
    }
  },

  methods: {
    async fetchData () {
      const id = this.$store.getters['auth/user'].id
      const { data } = await axios.get('user/' + id + '/sleeprecords')
      const labels = []
      const chartData = []
      data.forEach(record => {
        labels.push(record.date)
        chartData.push(this.strTimeToNumTime(record.sleepDuration))
      })

      this.lineChartData = {
        labels,
         datasets: [
          {
            label: 'Sleep Duration',
            backgroundColor: '#f87979',
            data: chartData
          }
        ]
      }
    },

    strTimeToNumTime(strTime) {
      const timeSplit = strTime.split(':')
      const hour = parseInt(timeSplit[0], 10)
      const minute = parseInt(timeSplit[1], 10) / 60
      return hour + minute
    }
  }
}
</script>

<style>
.line-chart {
  position: fixed;
}
</style>
