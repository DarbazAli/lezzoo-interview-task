import {
  STORE_CREATE_FAIL,
  STORE_CREATE_RESET,
  STORE_CREATE_REQUEST,
  STORE_CREATE_SUCCESS,
  STORE_LIST_FAIL,
  STORE_LIST_REQUEST,
  STORE_LIST_SUCCESS,
} from '../constants/storeConstants'

// Get all stores
export const storeListReducer = (state = { stores: [] }, action) => {
  switch (action.type) {
    case STORE_LIST_REQUEST:
      return { loading: true, stores: [] }
    case STORE_LIST_SUCCESS:
      return {
        loading: false,
        stores: action.payload,
      }
    case STORE_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
// CREATE NEW STORE
export const storeCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case STORE_CREATE_REQUEST:
      return { loading: true }
    case STORE_CREATE_SUCCESS:
      return {
        loading: false,
        success: true,
        message: action.payload,
      }
    case STORE_CREATE_FAIL:
      return { loading: false, error: action.payload }
    case STORE_CREATE_RESET:
      return {}
    default:
      return state
  }
}
