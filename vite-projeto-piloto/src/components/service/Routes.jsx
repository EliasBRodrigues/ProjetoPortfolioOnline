import axios from 'axios'
import { config } from '../../constants'
import { parseJWT } from './JWT'

export const Routes = {
    authenticate,
    getUsers
  }
  
  function authenticate(username, password) {
    return instance.post('/auth/authenticate', { username, password }, {
      headers: { 'Content-type': 'application/json' }
    })
  }
  
  function getUsers(user, username) {
    const url = username ? `/api/users/${username}` : '/api'
    return instance.get(url, {
      headers: { 'Authorization': bearerAuth(user) }
    })
  }
  
  
  // Axios
  const instance = axios.create({
    baseURL: config.url.API_BASE_URL
  })
  
  instance.interceptors.request.use(function (config) {
    // If token is expired, redirect user to login
    if (config.headers.Authorization) {
      const token = config.headers.Authorization.split(' ')[1]
      const data = parseJWT(token)
      if (Date.now() > data.exp * 1000) {
        window.location.href = "/login"
      }
    }
    return config
  }, function (error) {
    return Promise.reject(error)
  })
  
  // Helper functions
  
  function bearerAuth(user) {
    return `Bearer ${user.accessToken}`
  }