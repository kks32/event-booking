<template>
  <v-container fluid>
    <v-row>
      <v-col xs12>
        <v-subheader>Select session</v-subheader>
        <v-card class="grey lighten-4 elevation-0">
          <v-card-text>
            <p>{{ session || 'Not selected' }}</p>
            <v-radio label="Morning" primary v-model="session" value="Morning" light />
            <v-radio label="Afternoon" primary v-model="session" value="Afternoon" light />
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
