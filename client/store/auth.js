import axios from 'axios'
import Cookies from 'js-cookie'

export const state = () => ({
  user: null,
  token: null
})

export const getters = {
  user: state => state.user,
  token: state => state.token,
  userImage: state => {
    if (!state.user) return process.env.defaultAvatar
    return state.user.avatar ? state.user.avatar: process.env.defaultAvatar
  },
  check: state => state.user !== null
}

export const mutations = {
  // Set the token
  SET_TOKEN(state, token) {
    state.token = token
  },

  // Update the user
  UPDATE_USER(state, { user }) {
    state.user = user
  },

  // Remove existing user data
  LOGOUT (state) {
    state.user = null
    state.token = null
  },

  FETCH_USER_SUCCESS (state, user) {
    state.user = user
  }

}

export const actions = {
  // Save the user token
  saveToken ({ commit, dispatch }, { token, remember }) {
    commit('SET_TOKEN', token)

    Cookies.set('token', token, { expires: remember ? 365 : null })
  },

  // Update the user data
  updateUser ({ commit }, payload) {
    commit('UPDATE_USER', payload)
  },

  // Send request to server to log user out
  async logout ({ commit }) {
    try {
      await axios.post('/logout')
    } catch (e) { }

    Cookies.remove('token')

    commit('LOGOUT')
  },

  async fetchUser ({ commit }) {
    try {
      const { data } = await axios.get('/user')

      commit('FETCH_USER_SUCCESS', data)
    } catch (e) {
      // Must of sent request with an invalid token
      if (e.response.status === 401) {
        Cookies.remove('token')

        commit('LOGOUT')
      }

      // Catch the error is it doesn't break halt the entire app
    }
  },
}