<template>
  <div id="date">
  	<div class="example">
  		<h6>Check ticket sales date range</h6>
  		<datepicker :disabled="disabled"></datepicker>
  		<code>&lt;datepicker :disabled="disabled"&gt;&lt;/datepicker&gt;</code>
  		<div class="settings">
  			<h5>Settings</h5>
  			<div class="form-group">
  				<label>Start date:</label>
  				<datepicker v-on:selected="disableTo"></datepicker>
  			</div>
  			<div class="form-group">
  				<label>End date:</label>
  				<datepicker v-on:selected="disableFrom"></datepicker>
  			</div>
  			<pre>selected: {{ disabled }}</pre>
  		</div>
  	</div>
  </div>
</template>


<script>
import Datepicker from 'vuejs-datepicker'

var state = {
  date1: new Date()
}

export default {
  components: {
    Datepicker
  },
  data () {
    return {
      format: 'd MMMM yyyy',
      disabled: {},
      eventMsg: null,
      state: state
    }
  },
  methods: {
    disableTo (val) {
      console.log(val)
      if (typeof this.disabled.to === 'undefined') {
        this.disabled = {
          to: null,
          from: this.disabled.from
        }
      }
      this.disabled.to = val
    },
    disableFrom (val) {
      if (typeof this.disabled.from === 'undefined') {
        this.disabled = {
          to: this.disabled.to,
          from: null
        }
      }
      this.disabled.from = val
    }
  }
}
</script>

<style>
body {
  font-family: 'Helvetica Neue Light', Helvetica, sans-serif;
  padding: 0em 1em 1em;
}

input,
select {
  padding: .74em .4em;
  font-size: 99%;
  border: 0px solid white;
  width: 99%
}

select {
  height: 1.4em;
}

.example {
  background: #f1f1f1;
  border: 0px solid #ddd;
  padding: -1em 0em 0em;
  margin-bottom: 1em;
}

code,
pre {
  margin: 0em -1;
  padding: 0em;
  border: 0px solid #bbb;
  display: block;
  background: #ddd;
  border-radius: 2px;
}

.settings {
  margin: 1em -1;
  /*padding: -1 0.4em 0.4em;*/
  border-top: 0px solid #bbb;
  background: #eee;
}

h4 {
  font-size: 99%;
  padding: -1;
}

.form-group {
  margin-bottom: 0em;
}

.form-group label {
  font-size: 79%;
  display: block;
}
</style>
