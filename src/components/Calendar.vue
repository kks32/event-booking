<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs12 class="hidden-xs-only">
        <v-date-picker class="mt-3" v-model="date" :allowed-dates="allowedDates" landscape></v-date-picker>
         <v-btn v-if="this.date!=''" class="primary white--text" @click.native="setdate()">Accept: {{date}}<v-icon right>check_circle</v-icon></v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

export default {
  data () {
    return {
      date: ''
    }
  },
  methods: {
    setdate () {
      this.$store.dispatch('purchase/setdate', this.date)
    }
  }
}
</script>
