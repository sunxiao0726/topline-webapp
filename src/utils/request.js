import axios from 'axios'
import JSONbig from 'json-bigint'
// 创建 axios 实例
// axios.create 的作用是克隆一个 axios 实例，它的作用和 axios 是一样的
// 假如一个应用中有多个不同的后台接口路径
const request = axios.create({
  baseURL: 'http://ttapi.research.itcast.cn'
})
export default request

// 配置处理后端返回的数据中包含超出 JavaScript 安全整数范围问题
request.defaults.transformResponse = [function (data) {
  try {
    return JSONbig.parse(data)
  } catch (err) {
    return data
  }
}]
