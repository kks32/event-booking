<template>
<div id="summary">
  <v-card class="grey lighten-4 elevation-1">
    <v-card-title class="purple darken-4 white--text">
      <h5>Booking summary</h5>
    </v-card-title>
    <v-card-text class="grey lighten-4 elevation-1">
      <v-container fluid>
        <v-layout row wrap>
          <qr-code :text=qruuid></qr-code>
        </v-layout>
        <v-layout row wrap>
          <v-flex xs6>
            <v-subheader v-text="'Booking reference'"/>
          </v-flex>
          <v-flex xs6>
            <v-subheader>{{this.$store.getters['purchase/getuuid']}}</v-subheader>
          </v-flex>
        </v-layout>
        <v-layout row wrap>
          <v-flex xs6>
            <v-subheader v-text="'Booking date and sessions'"/>
          </v-flex>
          <v-flex xs6>
            <v-subheader>{{this.$store.getters['purchase/getdate']}} {{this.$store.getters['purchase/getsession']}}</v-subheader>
          </v-flex>
        </v-layout>
        <v-layout row wrap>
          <v-flex xs6>
            <v-subheader>Total for {{this.$store.getters['purchase/getntickets']}} tickets and  {{this.$store.getters['purchase/get_nguidebooks']}} guides is:</v-subheader>
          </v-flex>
          <v-flex xs6>
            <v-subheader> £{{parseFloat(this.$store.getters['purchase/gettotal']).toFixed(2)}}</v-subheader>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card-text>
  </v-card>
  <v-card class="grey lighten-4 elevation-1">
    <v-card-title class="purple darken-4 white--text">
      <h6>Personal details</h6>
      <v-spacer></v-spacer>
    </v-card-title>
    <v-card-text class="grey lighten-4 elevation-1">
      <v-container fluid>
        <v-layout row wrap>
          <v-flex xs6>
            <v-subheader v-text="'Full name'" />
          </v-flex>
          <v-flex xs6>
            <v-text-field
              label="Full name"
              counter
              v-model="name"
              min="5"
              max="255"
              required
            />
          </v-flex>
        </v-layout>
        <v-layout row wrap>
          <v-flex xs6>
            <v-subheader v-text="'Email address to subscribe to the mailing list'" />
          </v-flex>
          <v-flex xs6>
            <v-text-field
              label="someone@anonymous.com"
              counter
              v-model="email"
              min="5"
              max="255"
              :rules="[() => testemail || 'Please enter a valid email address']"
            />
          </v-flex>
        </v-layout>
        <v-layout row wrap>
          <v-flex xs6>
            <v-subheader v-text="'Gift aid'" />
          </v-flex>
          <v-flex xs6>
            <v-radio-group v-model="giftaid">
              <v-radio label="Yes, I wish to Gift Aid my donation." primary value="true" light color="purple darken-4" />
              <p>
                I wish to Gift Aid my donation to King's College,
                Cambridge, registered as a charity in the UK (1139422).
                <br/>
                I am a UK taxpayer and understand that if I pay less Income Tax
                and/or Capital Gains Tax in the current tax year than the amount
                of Gift Aid claimed on all my donations it is my responsibility to
                pay any difference.
                <br/>
                I will notify you if I want to cancel this declaration, change my
                name or home address, or no longer pay sufficient tax on my income
                and/or capital gains.
              </p>
              <v-radio label="No" value="false" light color="purple darken-4"/>
            </v-radio-group>

          </v-flex>
        </v-layout>
        <v-layout row wrap v-if="giftaid==='true'">
          <v-flex xs6>
            <v-subheader v-text="'Subscribe'" />
          </v-flex>
          <v-flex xs6>
            <v-radio-group v-model="subscribe">
              <v-radio class="pb-4" label="We would like to thank you for your support and keep you
              informed of news, events and opportunities at King's College. Please tick
              if you wish us to use your aress and email for this purpose." value="true" light color="purple darken-4"/>
              <v-radio class="pt-4" label="My gift is anonymous - please do not include me in public
              list of donors." value="false" light color="purple darken-4"/>
          </v-radio-group>
          </v-flex>
        </v-layout>
        <v-layout row wrap v-if="giftaid==='true'">
          <v-flex xs6>
            <v-subheader v-text="'Address'" />
          </v-flex>
          <v-flex xs6>
            <v-text-field label="address" counter v-model="address" min="5" max="255"/>
          </v-flex>
          <v-flex xs6>
            <v-subheader v-text="'city'" />
          </v-flex>
          <v-flex xs6>
            <v-text-field label="city" counter v-model="city" min="5" max="255"/>
          </v-flex>
          <v-flex xs6>
            <v-subheader v-text="'postcode'" />
          </v-flex>
          <v-flex xs6>
            <v-text-field label="postcode" counter v-model="postcode" min="5" max="10" :rules="[() => testpostcode || 'Please enter a valid postcode']"/>
          </v-flex>
          <v-flex xs6>
            <v-subheader v-text="'country'" />
          </v-flex>
          <v-flex xs6>
            <v-select label="Select a country" v-bind:items="countries" v-model="country"
              max-height="200" light item-value="number" single-line auto />
          </v-flex>
        </v-layout>
      </v-container>
    </v-card-text>
</v-card>

</div>
</template>

<script>
export default {
  'name': 'Summary',
  data () {
    return {
      name: '',
      email: '',
      address: '',
      city: '',
      postcode: '',
      country: 'United Kingdom',
      giftaid: 'true',
      subscribe: 'true',
      testpostcode: 'false',
      testemail: 'false',
      uuid: '',
      countries: []
    }
  },
  created () {
    this.countries = this.$store.getters['countries/getcountries']
  },
  watch: {
    email () {
      const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      this.testemail = regex.test(this.email)
    },
    postcode () {
      this.evaluatepostcode()
    },
    countries () {
      this.evaluatepostcode()
    }
  },
  methods: {
    evaluatepostcode () {
      if (this.country === 'United Kingdom') {
        const ukpostcode = this.postcode.replace(/\s/g, '')
        const regex = /^[A-Z]{1,2}[0-9]{1,2}[A-Z]{0,1} ?[0-9][A-Z]{2}$/i
        this.testpostcode = regex.test(ukpostcode)
      } else {
        this.testpostcode = true
      }
    }
  },
  computed: {
    qruuid () {
      return this.$store.getters['purchase/getuuid']
    }
  }
}
</script>
