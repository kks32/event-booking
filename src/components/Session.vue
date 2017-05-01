<template>
  <v-container fluid>
    <v-row>
      <v-col xs12>
        <v-subheader>Select session: {{ session || 'Not selected' }}</v-subheader>
        <v-card class="grey lighten-4 elevation-1">
          <v-card-text>
            <v-radio label="Morning (9:00 - 12:00)" primary v-model="session" value="Morning" light />
            <v-radio label="Afternoon (12:00 - 17:00)" primary v-model="session" value="Afternoon" light />
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
  }
}
</script>
