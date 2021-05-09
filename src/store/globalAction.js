import axios from '@/store/axios'

const globalAction = ({ commit }, name, axiosObject) => {
  return new Promise((resolve, reject) => {
    axios(axiosObject)
      .then(responseFromAPI => {
        commit(`${name}Success`, responseFromAPI.data)
        resolve(responseFromAPI.data)
      })
      .catch(err => {
        commit(`${name}Error`, err)
        console.error("🚀 ~ file: globalAction.js ~ line 12 ~ returnnewPromise ~ err", err)
        reject(err)
      })
  })
}

export default globalAction