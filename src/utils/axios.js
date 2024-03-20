import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
  //   timeout: 1000,
  //   headers: { 'X-api-key': 'foobar' },
})

export default axiosInstance
