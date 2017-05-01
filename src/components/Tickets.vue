<template>
  <v-card class="grey lighten-4 elevation-0">
    <v-card-text>
      <v-container fluid>
        <v-row>
          <v-col xs6>
            <v-subheader v-text="'Adult tickets'" />
          </v-col>
          <v-col xs6>
            <v-select
              label="Select"
              v-bind:items="items"
              v-model="adult"
              v-bind:rules="[() => adult && adult > 0 || 'Please select at least one ticket']"
              light
              item-value="number"
            />
          </v-col>
          <v-col xs6>
            <v-subheader v-text="'Children'" />
          </v-col>
          <v-col xs6>
            <v-select
              v-bind:items="items"
              v-model="children"
              label="Select"
              class="input-group--focused"
              light
              item-value="number"
            />
          </v-col>

        </v-row>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  'name': 'Tickets',
  data () {
    return {
      adult: 1,
      children: 0,
      items: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    }
  }
}
</script>
