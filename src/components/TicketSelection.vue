<template>
  <div class ="ticketselection">
   <select v-model="selected">
    <option v-for="option in options" v-bind:value="option.value">
      {{ option.text }}
    </option>
   </select>
   <span>Selected: {{ selected }}</span>
   <select v-model="selected">
    <option v-for="option in options" v-bind:value="option.value">
      {{ option.text }}
    </option>
   </select>
   <span>Selected: {{ selected }}</span>
  </div>
</template>

<script>
export default {
  name: 'ticketselection',
  data () {
    return {
      selected: '1',
      options: [
        { text: '1', value: '£9' },
        { text: '2', value: '£18' },
        { text: '3', value: '£27' }
      ]
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
