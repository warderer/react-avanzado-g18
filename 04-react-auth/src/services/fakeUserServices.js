import axios from 'axios'
// Mock de la API de ecommerce usando la extensión de Live Server

const BASE_URL = 'http://127.0.0.1:5500/04-react-auth/src/assets'

axios.interceptors.request.use((config) => {
  const user = window.localStorage.getItem('token')

  if (user) {
    config.headers.Authorization = `JWT ${user}`
  }
  console.log('Request config headers:', config.headers)
  return config
},
(error) => {
  return Promise.reject(error)
}
)

const registerUserService = (data) => axios.post(`${BASE_URL}/signup`, data)
const loginUserService = (data) => axios.get(`${BASE_URL}/login.json`, data)
const getSingleUser = (id) => axios.get(`${BASE_URL}/user.json`)

export { registerUserService, loginUserService, getSingleUser }
