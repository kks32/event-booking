<template>
<div id="summary">
  <v-snackbar
    :timeout="5000"
    :bottom="true"
    v-model="notification"
  > {{message}}
    <v-btn flat class="pink--text">Close</v-btn>
  </v-snackbar>
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
              <v-radio class="pb-4" label="Subscribe" value="true" light color="purple darken-4"/>
              <p>
                We would like to thank you for your support and keep you
                informed of news, events and opportunities at King's College. Please tick
                if you wish us to use your aress and email for this purpose.
              </p>
              <v-radio class="pt-4" label="Opt-out" value="false" light color="purple darken-4"/>
              <p>
                My gift is anonymous - please do not include me in public
                list of donors.
              </p>
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
          <v-flex xs6>
            <v-subheader v-text="'credit card'" />
          </v-flex>
          <v-flex xs6>
            <v-text-field label="credit card number" :mask="mask" v-model="value"></v-text-field>
          </v-flex>
          <v-flex xs6>
            <v-subheader v-text="'cvv'" />
          </v-flex>
          <v-flex xs6>
            <v-text-field label="cvv" v-model="cvv" min="3" max="3"></v-text-field>
          </v-flex>
          <v-flex xs6>
            <v-subheader v-text="'month/year'" />
          </v-flex>
          <v-flex xs3>
            <v-select v-bind:items="months" v-model="month" label="Select" light single-line auto />
          </v-flex>
          <v-flex xs3>
            <v-select v-bind:items="years" v-model="year" label="Select" light single-line auto />
          </v-flex>

          <v-flex xs12>
            <v-btn
              @click.native="createbooking()"
              color="green"
              dark
              >Save booking
              <v-icon right dark>cloud_upload</v-icon>
            </v-btn>
          </v-flex>
          <form action="https://secure-test.worldpay.com/wcc/purchase" method="POST" style="margin-bottom: 10em;" class="back">
            <input type="hidden" name="testMode" value="100" />
            <input type="hidden" name="country" value="GB">
            <input type="hidden" name="instId" value="296635" />
            <input type="hidden" name="cartId" value="ResidentCard">
            <input type="hidden" name="amount" value="100">
            <input type="hidden" name="currency" value="GBP" />
            <input type="hidden" name="hideCurrency" value="true" />
            <input type=hidden name="noLanguageMenu" value="true">
            <input type="submit" value="Checkout" class="rounded" />
          </form>
        </v-layout>
      </v-container>
    </v-card-text>
</v-card>

</div>
</template>

<script>
import {HTTP} from '../http-common'
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
      countries: [],
      notification: false,
      message: '',
      mask: 'credit-card',
      value: '0000000000000000',
      cvv: '000',
      month: 0,
      year: 2018,
      months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      years: [2017, 2018, 2019, 2020, 2021, 2022, 2023],
      booking: {
        uuid: '',
        name: '',
        date: '',
        session: '',
        total: 0,
        ntickets: 0,
        nadults: 0,
        nchild: 0,
        nconcession: 0,
        nguides: 0,
        guidebooks: []
      }
    }
  },
  created () {
    this.countries = this.$store.getters['countries/getcountries']
  },
  watch: {
    name () {
      this.booking.name = this.name
      console.log(this.booking.name)
    },
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
    },
    fetchbooking () {
      this.booking.uuid = this.$store.getters['purchase/getuuid'].toString()
      this.booking.date = this.$store.getters['purchase/getdate'].toString()
      this.booking.session = this.$store.getters['purchase/getsession'].toString()
      this.booking.total = Number(this.$store.getters['purchase/gettotal'])
      this.booking.ntickets = Number(this.$store.getters['purchase/getntickets'])
      this.booking.nadults = Number(this.$store.getters['purchase/getnadults'])
      this.booking.nchild = Number(this.$store.getters['purchase/getnchild'])
      this.booking.nconcession = Number(this.$store.getters['purchase/getnconcession'])
      this.booking.nguides = Number(this.$store.getters['purchase/get_nguidebooks'])
      this.booking.guidebooks = this.$store.getters['purchase/get_guidebooks']
    },
    createbooking () {
      this.fetchbooking()
      console.log('bookings/' + this.booking.uuid)
      HTTP.post('bookings/' + this.booking.uuid, this.booking)
        .then(response => {
          this.notification = true
          if (response.data === '') {
            this.message = 'Success!'
          } else {
            this.message = response.data
          }
        })
        .catch(e => {
          this.errors.push(e)
        })
    }
  },
  computed: {
    qruuid () {
      return this.$store.getters['purchase/getuuid']
    }
  }
}
</script>
