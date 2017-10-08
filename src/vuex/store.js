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

// Store
const store = new Vuex.Store({
  modules: {
    auth: authmodule,
    purchase: purchasemodule
  }
})

export default store
