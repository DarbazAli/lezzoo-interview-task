import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { categoryListReducer } from './reducers/categoryReducers'
import { storeCreateReducer, storeListReducer } from './reducers/storeReducers'

const reducers = combineReducers({
  storeList: storeListReducer,
  storeCreate: storeCreateReducer,
  categoryList: categoryListReducer,
})

const initialState = {}

const middleware = [thunk]

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
