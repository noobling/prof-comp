import Cookies from 'js-cookie'

export default async ({ store, req }) => {
    const token =  Cookies.get('token')

    if (token) {
        store.commit('auth/SET_TOKEN', token)

        if (!store.getters['auth/check']) {
            await store.dispatch('auth/fetchUser')
        }
    }
  }