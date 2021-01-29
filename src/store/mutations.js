import {ADD_COUNTED, ADD_TO_CART} from './mutation-types'


export default {
  [ADD_COUNTED](state, payload) {
    payload.counted++
  },
  [ADD_TO_CART](state,payload) {
    payload.checked = false
    state.cartList.push(payload)
  }
}