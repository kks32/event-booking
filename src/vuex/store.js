import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// Authentication modules
const authmodule = {
  namespaced: true,
  state: {
    // authentication status
    status: false
  },
  getters: {
    getstatus: (state) => {
      return state.status
    }
  },
  mutations: {
    activate (state) {
      state.status = true
    },
    deactivate (state) {
      state.status = false
    }
  },
  actions: {
    setstatus ({ commit, state }, userstatus) {
      state.status = userstatus
    }
  }
}

// App module
const purchasemodule = {
  namespaced: true,
  state: {
    // Date
    uuid: '',
    date: '',
    session: '',
    ticketvalidation: false,
    ntickets: 0,
    nadults: 0,
    nchild: 0,
    nconcession: 0,
    maxtickets: 0,
    nguidebooks: 0,
    total: 0,
    guidebooks: []
  },
  getters: {
    getuuid: (state) => {
      return state.uuid
    },
    getdate: (state) => {
      return state.date
    },
    getsession: (state) => {
      return state.session
    },
    getntickets: (state) => {
      return state.ntickets
    },
    getnadults: (state) => {
      return state.nadults
    },
    getnchild: (state) => {
      return state.nchild
    },
    getnconcession: (state) => {
      return state.nconcession
    },
    getmaxtickets: (state) => {
      return state.maxtickets
    },
    gettotal: (state) => {
      return state.total
    },
    get_ticketvalidation: (state) => {
      return state.ticketvalidation
    },
    get_nguidebooks: (state) => {
      return state.nguidebooks
    },
    get_guidebooks: (state) => {
      return state.guidebooks
    }
  },
  actions: {
    setuuid: ({commit, state}, id) => {
      state.uuid = id
    },
    setdate: ({commit, state}, value) => {
      state.date = value
    },
    setsession: ({commit, state}, value) => {
      state.session = value
    },
    setntickets: ({commit, state}, number) => {
      state.ntickets = number
    },
    setnadults: ({commit, state}, number) => {
      state.nadults = number
    },
    setnchild: ({commit, state}, number) => {
      state.nchild = number
    },
    setnconcession: ({commit, state}, number) => {
      state.nconcession = number
    },
    setmaxtickets: ({commit, state}, number) => {
      state.maxtickets = number
    },
    settotal: ({commit, state}, tot) => {
      state.total = tot
    },
    set_ticketvalidation: ({commit, state}, bool) => {
      state.ticketvalidation = bool
    },
    set_nguidebooks: ({commit, state}, number) => {
      state.nguidebooks = number
    },
    set_guidebooks: ({commit, state}, languages) => {
      state.guidebooks = languages
    }
  }
}

// countries

const countriesmodule = {
  namespaced: true,
  state: {
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
      'Rwanda',
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
  },
  getters: {
    getcountries: (state) => {
      return state.countries
    }
  }
}
// Store
const store = new Vuex.Store({
  modules: {
    auth: authmodule,
    purchase: purchasemodule,
    countries: countriesmodule
  }
})

export default store
