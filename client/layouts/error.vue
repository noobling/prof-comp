<template>
    <v-jumbotron
    :gradient="gradient"
    dark
    src="/404.jpg"
    height= "100%"
  >
    <v-container fill-height>
      <v-layout align-center>
        <v-flex text-xs-center>
          <v-btn large outline to="/">Back to home</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </v-jumbotron>
</template>
<script>
  export default {
    layout: 'main'
  }
</script>