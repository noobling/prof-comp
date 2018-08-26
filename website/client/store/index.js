import Cookies from 'js-cookie'

export const strict = false

export const state = () => ({
  navDraw: false,
  loading: false
})

export const getters = {
  navDraw: state => state.navDraw,
  loading: state => state.loading
}

export const mutations = {
  UPDATE_NAV_DRAW(state, { navDraw }) {
    state.navDraw = navDraw
  }
}

export const actions = {
  updateNavDraw({ commit }, payload) {
    commit('UPDATE_NAV_DRAW', payload)
  },

  async nuxtClientInit ({ commit }) {
    const token = Cookies.get('token')
    if (token) {
      commit('auth/SET_TOKEN', token)
    }

    try {
      const { data } = await axios.get('/user')

      commit('auth/FETCH_USER_SUCCESS', data)
    } catch (e) {
      // Catch the error is it doesn't break halt the entire app
    }
  }
}