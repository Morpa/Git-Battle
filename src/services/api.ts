import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.github.com/',
  auth: {
    username: process.env.GITHUB_CLIENT_ID || '',
    password: process.env.GITHUB_CLIENT_SECRET || ''
  }
})

export default api
