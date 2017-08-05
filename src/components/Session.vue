<template>
  <v-container fluid>
    <v-row>
      <v-col xs12>
        <v-subheader>Select session: {{ this.$store.getters['purchase/getsession'] || 'Not selected' }}</v-subheader>
        <v-card class="grey lighten-4 elevation-1">
          <v-card-text>
            <v-radio label="Morning (9:30 - 12:00)" primary v-model="session" value="Morning" light />
            <v-radio label="Afternoon (12:00 - 15:30)" primary v-model="session" value="Afternoon" light />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  'name': 'Session',
  data () {
    return {
      session: 'Morning'
    }
  },
  mounted () {
    this.$store.dispatch('purchase/setsession', this.session)
  },
  watch: {
    session () {
      this.$store.dispatch('purchase/setsession', this.session)
    }
  }
}
</script>
