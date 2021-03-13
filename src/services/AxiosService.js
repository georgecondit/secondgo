import Axios from 'axios'

export const baseURL = window.location.origin.includes('localhost') ? 'http://localhost:8080' : ''
export const api = Axios.create({
  baseURL,
  timeout: 8000
})

export const sandboxApi = Axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com',
  timeout: 8000
})

export const setBearer = (bearer) => {
  sandboxApi.defaults.headers.authorization = bearer
}

export const resetBearer = () => {
  sandboxApi.defaults.headers.authorization = ''
}
