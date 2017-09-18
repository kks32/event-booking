<template>
  <v-toolbar class="purple darken-4 white--text">
  <v-toolbar-title>{{title}}</v-toolbar-title>
  <v-spacer></v-spacer>
  <v-toolbar-side-icon class="hidden-md-and-up"></v-toolbar-side-icon>
  <v-toolbar-items class="hidden-sm-and-down" v-for="(item,i) in items" :key="i">
    <v-btn class="purple darken-4 white--text" :href="item.link" :router="item.router">{{item.title}}</v-btn>
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
