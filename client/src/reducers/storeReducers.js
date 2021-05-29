import {
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
