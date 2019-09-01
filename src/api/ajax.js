import axios from "axios"

export const get = (url, token, params) => {
  const headers = (token)? { Authorization: `Bearer ${token}` }: {}

  return new Promise((resolve, reject)=>{
    axios.get(url, { headers, params })
      .then(res=>resolve(res.data))
      .catch(err=>reject(err))
  })
}

export const post = (url, token, params) => {
  const headers = (token)? { Authorization: `Bearer ${token}` }: {}
  return new Promise((resolve, reject)=>{
    axios.post(url, params, { headers })
      .then(res=>resolve(res.data))
      .catch(err=>reject(err))
  })
}


