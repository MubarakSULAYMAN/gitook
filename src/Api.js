import axios from 'axios'

let $api = axios.create({
    // https://api.github.com/search/code?q={query}{&page,per_page,sort,order}
    // "https://api.github.com/search/users?q={query}{&page,per_page,sort,order}"
    // baseURL: `https://api.github.com/search/`,
    // baseURL: `https://api.github.com/search/users?q=Mubarak&per_page=10&page=1&sort=undefined&order=undefined`,
    baseURL: `https://api.github.com/search/`,
    // baseURL: `https://api.github.com/`,
    withCredentials: false,
    headers: {
        'Accept': 'application/vnd.github.v3+json',
        'Content-Type': 'application/json',
        // 'Authorization': 'token 035f48430992d2bf7baf91594149ac9941b41fe9',
        'Authorization': 'token e8374e40dea10ba1d5bebfa8846ca88a6184a17c',
        // 'User-Agent':  'Demo',
        // 'Client ID': 'd819e4179f776ca84404',
        // 'Client secrets': '386a0f4a0b1aaf46deba4c5554f0b0970eccaa16',
        // 'Owner': 'Mubarak SULAYMAN',
        // 'Access-Control-Allow-Methods': 'GET',
        // 'Access-Control-Allow-Origin': 'http://localhost:8080',
        // 'Access-Control-Allow-Origin': 'http://gitook.vercel.app/',
        // "Allow": 'HEAD, OPTIONS, GET'


        //   headers: {
          // "Accept: application/vnd.github.v3+json",
        //     'Authorization': `token ${state.access_token}`
        //   }
    }
})

export default $api