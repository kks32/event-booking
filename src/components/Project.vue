<template>
  <div class="project">
    <!-- Cancel project notification -->
    <v-snackbar
      :timeout="3000"
      :top="true"
      v-model="cancelprj"
    >
      Project is cancelled!
      <v-btn flat class="pink--text" @click.native="cancelprj = false">Close</v-btn>
    </v-snackbar>

    <v-stepper v-model="prj">
      <v-stepper-header>
        <v-stepper-step step="1" v-bind:complete="prj > 1">Select or upload raw data</v-stepper-step>
        <v-divider />
        <v-stepper-step step="2" v-bind:complete="prj > 2">Select analysis type</v-stepper-step>
        <v-divider />
        <v-stepper-step step="3">Select compute and run analysis</v-stepper-step>
      </v-stepper-header>
      <v-stepper-content step="1">
        <v-card class="grey lighten-1 z-depth-1 mb-5" height="200px" />
        <v-btn primary @click.native="prj = 2">Continue</v-btn>
        <v-btn flat @click.native="cancelprj = true">Cancel</v-btn>
      </v-stepper-content>
      <v-stepper-content step="2">
        <v-card class="grey lighten-1 z-depth-1 mb-5" height="200px" />
        <v-btn primary @click.native="prj = 3">Continue</v-btn>
        <v-btn flat @click.native="prj = 1">Back</v-btn>
        <v-btn flat @click.native="cancelprj = true">Cancel</v-btn>
      </v-stepper-content>
      <v-stepper-content step="3">
        <v-card class="grey lighten-1 z-depth-1 mb-5" height="200px" />
        <v-btn primary @click.native="">Run</v-btn>
        <v-btn flat @click.native="prj = 2">Back</v-btn>
        <v-btn flat @click.native="cancelprj = true">Cancel</v-btn>
      </v-stepper-content>
    </v-stepper>
  </div>
</template>

<script>
export default {
  name: 'project',
  data () {
    return {
      cancelprj: false,
      prj: 0
    }
  }
}
</script>
