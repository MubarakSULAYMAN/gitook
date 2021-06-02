import axios from 'axios'

const apiRequest = axios.create({
    baseURL: `https://api.github.com`,
    withCredentials: false,
    headers: {
        'Accept': 'application/vnd.github.v3+json',
        'Content-Type': 'application/json',
      'Authorization': process.env.VUE_APP_KEY,
    }
})

export default apiRequest
