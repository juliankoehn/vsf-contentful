import { ActionTree } from 'vuex'
import { Contentful } from '../types/Contentful'
import config from 'config'
import * as types from './mutation-types'
import fetch from 'isomorphic-fetch'

export const actions: ActionTree<Contentful, any> = {
  list ({ commit }, { limit, content_type }) {
    return fetch(`${config.contentful.endpoint}/entries?limit=${limit}&content_type=${content_type}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      mode: 'cors'
    })
      .then(res => {
        return res.json()
      })
      .then(res => {
        commit(types.SET_CONTENTFUL, res.result)
      })
  },
  entry ({ commit }, { by, id, slug, content_type }) {
    var api = `${config.contentful.endpoint}/entry?by=${by}&id=${id}&slug=${slug}&content_type=${content_type}`

    return new Promise((resolve, reject) => {
      fetch(api, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        mode: 'cors'
      }).then((response) => {
        return (response.json())
      }).then((data) => {
        commit(types.SET_CURRENT, data.result)
        resolve(data)
      }).catch((error) => {
        resolve({error: 'Could not connect to API'})
      })
    })
  }
}
