// Auth0 configuration
const AUTH0_CLIENT_ID = 'ojsHVDjOlh4TuAqX5mOlLmYLRoxZN9k6'
const AUTH0_DOMAIN = 'kings.eu.auth0.com'

// Auth0 customisation
const options = {
  languageDictionary: {
    emailInputPlaceholder: 'shop@kings.cam.ac.uk',
    title: 'Kings Chapel Booking System'
  },
  theme: {
    logo: '/static/media/logo.png',
    primaryColor: '#C0C0C0'
  }
}

export default {
  name: 'auth',

  /* eslint-disable no-undef */
  /* eslint-disable import/prefer-default-export */
  lock: new Auth0Lock(AUTH0_CLIENT_ID, AUTH0_DOMAIN, options),

  authenticated: false,

  // Login
  login () {
    this.lock.show()
  },
  // Logout
  logout () {
    localStorage.removeItem('id_token')
    localStorage.removeItem('profile')
    this.authenticated = false
  },

  // Utility to check auth status
  check_auth () {
    const jwt = localStorage.getItem('id_token')
    if (jwt) {
      this.authenticated = true
    } else {
      this.authenticated = false
    }
    return jwt
  }
}
