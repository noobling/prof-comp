<template>
  <div>
    <p>Your manual can view manual here: </p>
    <hr>    
    <h1 class="white--text">Common issues and solutions</h1>
    <hr>
    <v-expansion-panel v-model="show" expand>
      <v-expansion-panel-content v-for="(item, index) in items" :key="index">
        <div slot="header">
          {{item.header}}
        </div>
        <v-card>
          <v-card-text>
            {{ item.text }}
          </v-card-text>
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </div>
</template>

<script>
  export default {
    created () {
      this.show = [...Array(this.items).keys()].map(_ => true)
    },
    data () {
      return {
        items: [
          {
            header: 'Cannot understand words/sentences or cannot find links',
            text: 'View your phone in landscape. If the screen size is small some things may get truncated.'
          },
          {
            header: 'I cannot understand the questions when creating a sleep record',
            text: 'Click on icon next to the question for more info'
          },
          {
            header: 'How do I download the app on my phone?',
            text: 'Ask your researcher to download the app on your phone for you.'
          }
        ],
        show: [...Array(this.items).keys()].map(_ => true),

        markdownDocument: ''
      }
    }
  }
</script>
