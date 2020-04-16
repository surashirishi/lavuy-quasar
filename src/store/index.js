import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

// import example from './module-example'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default function (/* { ssrContext } */) {
  const baseUrl = 'http://localhost:3000'
  const Store = new Vuex.Store({
    state: {

    },
    mutations: {

    },
    actions: {
      // 犬一覧
      async getAllDogs () {
        const data = await axios.get(`${baseUrl}/dogs/index`).then(
          (res) => res.data
        )
        return data
      },
      // 犬詳細
      async getDogDetail ({ state }, dogId) {
        const data = await axios.get(`${baseUrl}/dogs/show`, {
          params: {
            dog_id: dogId
          }
        }).then(
          (res) => res.data
        )
        return data
      },
      // 飼い主情報
      async getOwnerInfo ({ state }, ownerId) {
        const data = await axios.get(`${baseUrl}/owners/show`, {
          params: {
            id: ownerId
          }
        }).then(
          (res) => res.data
        )
        return data
      }
    },
    modules: {
      // example
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV
  })

  return Store
}
