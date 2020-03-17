import config from '../config'

const TokenService = {
  saveUserId(id) {
    window.localStorage.setItem('user_ID', id)
  },
  getUserId() {
    return window.localStorage.getItem('user_ID')
  },
  clearUserId() {
    window.localStorage.removeItem('user_ID')
  },
  hasUserId() {
    return !!TokenService.getUserId()
  },

}

export default TokenService