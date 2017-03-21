<template>
  <div class="tickets">
    <button class="ticket-button" :class="{ 'active': active }" @click="liked">{{ active ? likedText : buttonText }}</button>
  </div>
</template>

<script>
export default {
  name: 'booking',
  data () {
    return {
      active: false,
      buttonText: 'Like this',
      likedText: 'You like this'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body {
  padding-top: 10px;
  padding-left: 5px;
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
