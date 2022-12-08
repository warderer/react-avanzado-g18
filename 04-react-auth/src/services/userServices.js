import axios from 'axios'

const BASE_URL = 'https://e-commerce-backend-production-ad56.up.railway.app/api/v1'

const token = window.localStorage.getItem('token')

const config = {
  headers: { Authorization: 'JWT ' + token }
}

const registerUserService = (data) => axios.post(`${BASE_URL}/signup`, data)
const loginUserService = (data) => axios.post(`${BASE_URL}/login`, data)
const getSingleUser = (id) => axios.get(`${BASE_URL}/user/${id}`, config)

export { registerUserService, loginUserService, getSingleUser }
