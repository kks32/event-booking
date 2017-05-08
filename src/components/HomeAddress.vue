<template>
  <div id="homeaddress">
      <p><i>myInstanceAddress</i> Property</p>
      <pre>{{ myInstanceAddress | json }}</pre>
      <input id="addressInput" type="text" />
  </div>
</template>

<script>
import googleAutocomplete from '../googleAutocomplete'
export default {
  name: 'HomeAddress',
  data () {
    return {
      myInstanceAddress: {
        address: null,
        city: null,
        state: null,
        zipcode: null,
        country: null
      },
      googleAutoCompleteInput: 'addressInput',
      url: null
    }
  },
  methods: {
    updateAddress () {
      // assign required values to my instance property
      this.myInstanceAddress.address = this.googleAddress.street_number + ' ' + this.googleAddress.street_name
      this.myInstanceAddress.city = this.googleAddress.city
      this.myInstanceAddress.state = this.googleAddress.state
      this.myInstanceAddress.zipcode = this.googleAddress.zipcode
      this.myInstanceAddress.country = this.googleAddress.country
    }
  },
  mixins: [googleAutocomplete]
}
</script>
