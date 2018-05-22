<template>
  <v-layout row wrap>
    <v-flex xs12>
      <h3>Report generation</h3>      
    </v-flex>
    <v-flex xs12 lg6>
      <v-menu
        lazy
        :close-on-content-click="false"
        v-model="menu"
        transition="scale-transition"
        offset-y
        full-width
        :nudge-right="40"
        max-width="290px"
        min-width="290px"
      >
        <v-text-field
          slot="activator"
          v-model="startdate"
          label="Start date"
          persistent-hint
          prepend-icon="event"
        ></v-text-field>
        <v-date-picker v-model="startdate" no-title></v-date-picker>
      </v-menu>
      <p>Date: <strong>{{ startdate }}</strong></p>
    </v-flex>
    <v-flex xs12 lg6>
      <v-menu
        lazy
        :close-on-content-click="false"
        v-model="menu"
        transition="scale-transition"
        offset-y
        full-width
        :nudge-right="40"
        max-width="290px"
        min-width="290px"
      >
        <v-text-field
          slot="activator"
          v-model="enddate"
          label="End date"
          persistent-hint
          prepend-icon="event"
        ></v-text-field>
        <v-date-picker v-model="enddate" no-title></v-date-picker>
      </v-menu>
      <p>Date: <strong>{{ enddate }}</strong></p>
    </v-flex>
    HelloW!
  </v-layout>
</template>

<script>
export default {
  name: 'reports',
  data () {
    return {
      date: null,
      startdate: null,
      enddate: null
    }
  }
}
</script>
