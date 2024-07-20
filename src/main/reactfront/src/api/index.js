import axios from 'axios'

const axiosInstance = (() => {
  return axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
    timeout: 5000,
  })
})()

axiosInstance.interceptors.request.use(
  (config) => {
    config.headers['Content-Type'] = 'application/json; charset=utf-8'
    config.headers['Authorization'] = `Bearer ${localStorage.getItem('accessToken')}`
    return config
  },
  (error) => {
    console.log(error)
    return Promise.reject(error)
  },
)

axiosInstance.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    return Promise.reject(error)
  },
)

export default axiosInstance
