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
            <v-subheader v-text="'Email address to subscribe to mailing list'" />
          </v-flex>
          <v-flex xs6>
            <v-text-field
              label="someone@anonymous.com"
              counter
              v-model="email"
              min="5"
              max="255"
            />
          </v-flex>
        </v-layout>
        <v-layout row wrap>
          <v-flex xs6>
            <v-subheader v-text="'Gift aid'" />
          </v-flex>
          <v-flex xs6>
            <v-radio-group v-model="giftaid">
              <v-radio label="Yes, I pay taxes in the UK. Gift aid this purchase" primary v-model="giftaid" value="true" light color="purple darken-4" />
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
            <v-text-field label="postcode" counter v-model="postcode" min="5" max="10"/>
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
      country: '',
      giftaid: 'true',
      subscribe: 'true',
      uuid: '',
      countries: [
        'United Kingdom',
        'United States',
        'Afghanistan',
        'Åland Islands',
        'Albania',
        'Algeria',
        'American Samoa',
        'Andorra',
        'Angola',
        'Anguilla',
        'Antarctica',
        'Antigua and Barbuda',
        'Argentina',
        'Armenia',
        'Aruba',
        'Australia',
        'Austria',
        'Azerbaijan',
        'Bahamas',
        'Bahrain',
        'Bangladesh',
        'Barbados',
        'Belarus',
        'Belgium',
        'Belize',
        'Benin',
        'Bermuda',
        'Bhutan',
        'Bolivia',
        'Bosnia and Herzegovina',
        'Botswana',
        'Bouvet Island',
        'Brazil',
        'British Indian Ocean Territory',
        'Brunei Darussalam',
        'Bulgaria',
        'Burkina Faso',
        'Burundi',
        'Cambodia',
        'Cameroon',
        'Canada',
        'Cape Verde',
        'Cayman Islands',
        'Central African Republic',
        'Chad',
        'Chile',
        'China',
        'Christmas Island',
        'Cocos (Keeling) Islands',
        'Colombia',
        'Comoros',
        'Congo',
        'Cook Islands',
        'Costa Rica',
        'Cote D\'Ivoire',
        'Croatia',
        'Cuba',
        'Cyprus',
        'Czech Republic',
        'Denmark',
        'Djibouti',
        'Dominica',
        'Dominican Republic',
        'Ecuador',
        'Egypt',
        'El Salvador',
        'Equatorial Guinea',
        'Eritrea',
        'Estonia',
        'Ethiopia',
        'Falkland Islands (Malvinas)',
        'Faroe Islands',
        'Fiji',
        'Finland',
        'France',
        'French Guiana',
        'French Polynesia',
        'French Southern Territories',
        'Gabon',
        'Gambia',
        'Georgia',
        'Germany',
        'Ghana',
        'Gibraltar',
        'Greece',
        'Greenland',
        'Grenada',
        'Guadeloupe',
        'Guam',
        'Guatemala',
        'Guernsey',
        'Guinea',
        'Guinea-Bissau',
        'Guyana',
        'Haiti',
        'Heard Island and Mcdonald Islands',
        'Holy See (Vatican City State)',
        'Honduras',
        'Hong Kong',
        'Hungary',
        'Iceland',
        'India',
        'Indonesia',
        'Iran',
        'Iraq',
        'Ireland',
        'Isle of Man',
        'Israel',
        'Italy',
        'Jamaica',
        'Japan',
        'Jersey',
        'Jordan',
        'Kazakhstan',
        'Kenya',
        'Kiribati',
        'N. Korea',
        'S. Korea',
        'Kuwait',
        'Kyrgyzstan',
        'Lao People\'S Democratic Republic',
        'Latvia',
        'Lebanon',
        'Lesotho',
        'Liberia',
        'Libyan Arab Jamahiriya',
        'Liechtenstein',
        'Lithuania',
        'Luxembourg',
        'Macao',
        'Macedonia',
        'Madagascar',
        'Malawi',
        'Malaysia',
        'Maldives',
        'Mali',
        'Malta',
        'Marshall Islands',
        'Martinique',
        'Mauritania',
        'Mauritius',
        'Mayotte',
        'Mexico',
        'Micronesia',
        'Moldova',
        'Monaco',
        'Mongolia',
        'Montserrat',
        'Morocco',
        'Mozambique',
        'Myanmar',
        'Namibia',
        'Nauru',
        'Nepal',
        'Netherlands',
        'Netherlands Antilles',
        'New Caledonia',
        'New Zealand',
        'Nicaragua',
        'Niger',
        'Nigeria',
        'Niue',
        'Norfolk Island',
        'Northern Mariana Islands',
        'Norway',
        'Oman',
        'Pakistan',
        'Palau',
        'Palestinian Territory',
        'Panama',
        'Papua New Guinea',
        'Paraguay',
        'Peru',
        'Philippines',
        'Pitcairn',
        'Poland',
        'Portugal',
        'Puerto Rico',
        'Qatar',
        'Reunion',
        'Romania',
        'Russian Federation',
        'RWANDA',
        'Saint Helena',
        'Saint Kitts and Nevis',
        'Saint Lucia',
        'Saint Pierre and Miquelon',
        'Saint Vincent and the Grenadines',
        'Samoa',
        'San Marino',
        'Sao Tome and Principe',
        'Saudi Arabia',
        'Senegal',
        'Serbia and Montenegro',
        'Seychelles',
        'Sierra Leone',
        'Singapore',
        'Slovakia',
        'Slovenia',
        'Solomon Islands',
        'Somalia',
        'South Africa',
        'South Georgia and the South Sandwich Islands',
        'Spain',
        'Sri Lanka',
        'Sudan',
        'Suriname',
        'Svalbard and Jan Mayen',
        'Swaziland',
        'Sweden',
        'Switzerland',
        'Syrian Arab Republic',
        'Taiwan',
        'Tajikistan',
        'Tanzania',
        'Thailand',
        'Timor-Leste',
        'Togo',
        'Tokelau',
        'Tonga',
        'Trinidad and Tobago',
        'Tunisia',
        'Turkey',
        'Turkmenistan',
        'Turks and Caicos Islands',
        'Tuvalu',
        'Uganda',
        'Ukraine',
        'United Arab Emirates',
        'United Kingdom',
        'United States',
        'United States Minor Outlying Islands',
        'Uruguay',
        'Uzbekistan',
        'Vanuatu',
        'Venezuela',
        'Viet Nam',
        'Virgin Islands',
        'Wallis and Futuna',
        'Western Sahara',
        'Yemen',
        'Zambia',
        'Zimbabwe'
      ]
    }
  },
  computed: {
    qruuid () {
      return this.$store.getters['purchase/getuuid']
    }
  }
}
</script>
