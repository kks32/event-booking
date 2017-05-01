<template>
  <v-toolbar class="purple darken-4">
  <v-toolbar-title class="hidden-sm-and-down">{{title}}</v-toolbar-title>
  <v-toolbar-items v-for="(item,i) in items" :key="i">
    <v-toolbar-item :href="item.link" :router="item.router">{{item.title}}</v-toolbar-item>
  </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  name: 'Toolbar',
  data () {
    return {
      title: 'King\'s College, Cambridge',
      items: [
        {'title': 'shop', 'link': 'https://shop.kings.cam.ac.uk', 'router': false}
      ]
    }
  }
}
</script>
