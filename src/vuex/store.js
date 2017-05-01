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
const layoutmodule = {
  namespaced: true,
  state: {
    // Sidebar
    sidebar: true
  },
  getters: {
    get_sidebar_status: (state) => {
      return state.sidebar
    }
  },
  mutations: {
    switch_sidebar_status (state) {
      state.sidebar = !state.sidebar
    }
  }
}

// Store
const store = new Vuex.Store({
  modules: {
    auth: authmodule,
    layout: layoutmodule
  }
})

export default store
