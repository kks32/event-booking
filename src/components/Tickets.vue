<template>
  <div class="tickets">
   <h3>King's chapel visitor ticket</h3>
   <span>Morning session is from 9AM - 12PM: </span>
   <button class="ticket-button" :class="{ 'active': active }" @click="selected">{{ active ? selectedText : ticketText }}</button>
  </div>
</template>

<script>
export default {
  name: 'booking',
  data () {
    return {
      active: false,
      selectedText: 'Selected',
      ticketText: 'Buy now'
    }
  },
  methods: {
    selected: function () {
      this.active = !this.active
    }
  }
}
</script> 

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

body {
  padding-top: 10px;
}
button {
  background: white;
  border: 1px #ddd solid;
  width: 130px;
  height: 40px;
  font-size: 16px;
  color: #222;
  outline: 0;
  cursor: pointer;
}

button.active {
  background: #55acee;
  color: white;
}
</style>
