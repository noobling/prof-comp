<template>
<div>
  <v-layout row wrap>
    <v-flex sm6 xs12>
      <line-chart v-if="lineChartSleepDuration" :data="lineChartSleepDuration" :options="optionsSleepDuration">
      </line-chart>
    </v-flex>

    <v-flex sm6 xs12>
      <line-chart v-if="lineChartAwakeningsNumber" :data="lineChartAwakeningsNumber" :options="optionsAwakeningsNumber"></line-chart>
    </v-flex>
  </v-layout>

  <v-layout row wrap>
    <v-flex sm6 xs12 v-for="(chart, index) in charts" :key="index">
      <bar-chart v-if="chart.data" :data="chart.data" :options="chart.options"></bar-chart>
    </v-flex>
  </v-layout>
</div>

</template>

<script>

import LineChart from '~/components/line-chart.js'
import BarChart from '~/components/bar-chart.js'
import axios from 'axios'

export default {
  head() {
    return { title: 'Sleep Diary App - Visualise'}
  },

  components: {
    LineChart,
    BarChart
  },

  created () {
    this.userId = this.$route.params.id

    this.attributes.forEach(attribute => {
      this.charts[attribute] = {}
      this.charts[attribute].datasetData = []
    })

    this.fetchData()
  },

  data() {
    return {
      charts: {},
      attributes: ['sleepDuration', 'awakeningsTotalDuration', 'timeTakenToSleepDuration', 'napDozeDuration'],
      userId: null,

      lineChartSleepDuration: null,
      lineChartAwakeningsNumber: null,
      optionsSleepDuration: null,
      optionsAwakeningsNumber: null,
      optionsDefault: {
        responsive: true,
        maintainAspectRatio: false,
        title: {
          display: true,
          fontColor: '#fff',
          fontSize: '18',
          text: 'Default title'
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
      this.optionsSleepDuration = this.optionsDefault
      this.optionsSleepDuration.title.text = 'Sleep Duration History'

      this.optionsAwakeningsNumber = this.optionsDefault
      this.optionsAwakeningsNumber.title.text = 'Number of Sleep awakenings'

      this.attributes.forEach(attribute => {
        this.charts[attribute]['options'] = {
        responsive: true,
        maintainAspectRatio: false,
        title: {
          display: true,
          fontColor: '#fff',
          fontSize: '18',
          text: attribute
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
      })

      const { data } = await axios.get('user/' + this.userId + '/sleeprecords')
      const labels = []
      const sleepDurationData = []
      const awakeningsNumber = []
      data.forEach(record => {
        labels.push(record.date)
        this.attributes.forEach(attribute => {
          if (record[attribute]) {
            this.charts[attribute]['datasetData'].push(this.strTimeToNumTime(record[attribute]))
          } else {
            this.charts[attribute]['datasetData'].push(0)
          }
        })
        sleepDurationData.push(this.strTimeToNumTime(record.sleepDuration))
        awakeningsNumber.push(parseInt(record.awakeningsNumber, 10))
        
      })

      this.attributes.forEach(attribute => {
        this.charts[attribute].data = {
          labels,
          datasets: [
            {
              label: attribute,
              backgroundColor: '#f87979',
              data: this.charts[attribute].datasetData
            }
          ]
        }
      })

      this.lineChartSleepDuration = {
        labels,
         datasets: [
          {
            label: 'Sleep Duration',
            backgroundColor: '#f87979',
            data: sleepDurationData
          }
        ]
      }

      

      this.lineChartAwakeningsNumber = {
        labels,
        datasets: [
          {
            label: 'Sleep Awakenings Number',
            backgroundColor: '#f87979',
            data: awakeningsNumber
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
