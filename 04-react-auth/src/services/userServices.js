import axios from 'axios'

const BASE_URL = 'https://e-commerce-backend-production-ad56.up.railway.app/api/v1'
// Referencia: https://stackoverflow.com/questions/71989146/axios-instance-not-getting-the-token-from-local-storage-on-first-call-react-js

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
const loginUserService = (data) => axios.post(`${BASE_URL}/login`, data)
const getSingleUser = (id) => axios.get(`${BASE_URL}/user/${id}`)

export { registerUserService, loginUserService, getSingleUser }
