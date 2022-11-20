import axios from 'axios'
// import vue from 'vue'

const instance = axios.create({
  baseURL:'http://localhost:3009',
  timeout: 100000,
  // headers
})

instance.interceptors.request.use((config) => {
  // 修改 config
  return config
})

instance.interceptors.response.use((res) => {
  // res是请求的结果（被 axios 封装过了）
  return res.data
})

// 取消请求

// Vue.prototype.$http = instance
export default instance