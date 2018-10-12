import axios from 'axios'
import swal from 'sweetalert2'

export default ({ app, store, redirect }) => {
  axios.defaults.baseURL = process.env.apiUrl

  axios.interceptors.request.use(request => {
    // Use the correct api server url
    request.baseURL = process.env.apiUrl
    
    // Mainly for frontend purposes to show user there is an ajax call
    store.state.loading = true

    // Add token to each ajax request for authentication purposes
    const token = store.getters['auth/token']

    if (token) {
      request.headers.common['Authorization'] = `Bearer ${token}`
    }

    return request
  })

  axios.interceptors.response.use(response => {
    // Done making the ajax call
    store.state.loading = false

    return response
  }, error => {
    // Done making the ajax call
    store.state.loading = false

    const { status } = error.response || {}

    // Sever error
    if (status >= 500) {
      swal({
        type: 'error',
        title: 'Ooops...',
        text: 'The fabric of space and time has been disturbed and highly trained monkeys are on it.',
      })
    }

    // Expired token error
    else if (status === 401 && store.getters['auth/check']) {
      swal({
        type: 'error',
        title: 'Ooops...',
        text: 'Your token has expired so you have to login again',
      }).then(() => {
        store.commit('auth/LOGOUT')

        redirect({ name: 'login' })
      })
    }

    // Invalid login credentials
    else if (status === 422 
      && error.response.data.message 
      && error.response.data.message === 'The given data was invalid.') {
        const errors = error.response.data.errors
        swal({
          toast: true,
          position: 'bottom-end',
          showConfirmButton: false,
          showCloseButton: true,
          type: 'error',
          title: `${errors[Object.keys(errors)[0]]}`
        })
    }

    else if (status >= 400) {
      swal({
        type: 'error',
        title: 'Oooops...',
        html: `Server returned a 400 error code here is why: <div><pre style="text-align:left">${JSON.stringify(error.response.data, undefined, 2)}</pre></div>`
      })
    }

    return Promise.reject(error)
  })
}