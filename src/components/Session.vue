<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex>
        <v-subheader>Select session: {{ this.$store.getters['purchase/getsession'] || 'Not selected' }}</v-subheader>
        <v-card class="grey lighten-4 elevation-1">
          <v-card-text>
            <v-radio-group v-model="session" :mandatory="false">
              <v-radio label="Morning (9:30 - 12:00)" value="Morning"/>
              <v-radio label="Afternoon (12:00 - 15:30)" value="Afternoon"/>
            </v-radio-group>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
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
