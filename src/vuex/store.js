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
    date: '',
    session: '',
    ticketvalidation: false,
    ntickets: 0,
    nguidebooks: 0,
    guidebooks: []
  },
  getters: {
    getdate: (state) => {
      return state.date
    },
    getsession: (state) => {
      return state.session
    },
    getntickets: (state) => {
      return state.ntickets
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
    setdate: ({commit, state}, value) => {
      state.date = value
    },
    setsession: ({commit, state}, value) => {
      state.session = value
    },
    setntickets: ({commit, state}, number) => {
      state.ntickets = number
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

// Store
const store = new Vuex.Store({
  modules: {
    auth: authmodule,
    purchase: purchasemodule
  }
})

export default store
