<template>
<div class="tickets">
    <h3>King's chapel visitor ticket</h3>
    <span>Morning session is from 9AM - 12PM: </span>
    <button class="ticket-button" :class="{ 'morning': active, 'afternoon': inactive }" @click="selected">{{ morning ? selectedText : ticketText }}</button>
    <br/>
    <span>Afternoon session is from 12PM - 5PM: </span>
    <button class="ticket-button" :class="{ 'morning': inactive, 'afternoon': active }" @click="selectedAfternoon">{{ afternoon ? selectedText : ticketText }}</button>
    <div v-if="active" class="ticket-selection">
        <div class="container">
            <div class="row">
                <div class="col">
                    Adult tickets:
                    <select v-model="ticket">
                        <option v-for="option in options" v-bind:value="option.value">
                            {{ option.text }}
                        </option>
                    </select>
                </div>
                <div class="col">
                    <span>Total: £ {{ ticket }}</span>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    Children tickets:
                    <select v-model="cticket">
                        <option v-for="option in coptions" v-bind:value="option.value">
                            {{ option.text }}
                        </option>
                    </select>
                </div>
                <div class="col">
                    <span>Total: £ {{ cticket }}</span>
                </div>
            </div>
            </div>
            <div class="row">
                <div class="col">
                    Guide books:
                    <select v-model="gbooks">
                        <option v-for="option in goptions" v-bind:value="option.value">
                            {{ option.text }}
                        </option>
                    </select>
                </div>
                <div class="col">
                    <span>Total: £ {{ gbooks }}</span>
                </div>
            </div>
            <div class="row">
                <button type="button" class="btn btn-default" @click=""><strong>Buy £{{ +ticket + +cticket + +gbooks }}</strong></button>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'booking',
  data () {
    return {
      active: false,
      afternoon: false,
      morning: false,
      selectedText: 'Selected',
      ticketText: 'Choose',
      ticket: 0,
      cticket: 0,
      gbooks: 0,
      options: [
        { text: '1', value: '9' },
        { text: '2', value: '18' },
        { text: '3', value: '27' },
        { text: '4', value: '36' },
        { text: '5', value: '45' }
      ],
      coptions: [
        { text: '0', value: '0' },
        { text: '1', value: '7' },
        { text: '2', value: '14' },
        { text: '3', value: '21' },
        { text: '4', value: '28' },
        { text: '5', value: '35' }
      ],
      goptions: [
        { text: '0', value: '0' },
        { text: '1', value: '3' },
        { text: '2', value: '6' },
        { text: '3', value: '9' },
        { text: '4', value: '12' },
        { text: '5', value: '15' }
      ]
    }
  },
  methods: {
    selected: function () {
      this.active = true
      this.morning = !this.morning
      this.afternoon = false
    },
    selectedAfternoon: function () {
      this.active = true
      this.morning = false
      this.afternoon = !this.afternoon
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

button.morning {
  background: #55acee;
  color: white;
}
button.afternoon {
  background: #55acee;
  color: white;
}
</style>
