import axios from 'axios'
import {
  STORE_LIST_FAIL,
  STORE_LIST_REQUEST,
  STORE_LIST_SUCCESS,
} from '../constants/storeConstants'

// list all products
export const listStores = () => async (dispatch) => {
  try {
    dispatch({ type: STORE_LIST_REQUEST })
    const { data } = await axios.get('/api/stores')

    dispatch({
      type: STORE_LIST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: STORE_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
