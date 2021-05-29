import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listStores } from '../actions/storeActions'

const HomeScreen = () => {
  const dispatch = useDispatch()

  const { loading, stores, error } = useSelector((state) => state.storeList)

  useEffect(() => {
    dispatch(listStores())
  }, [dispatch])
  return (
    <div>
      <h1>Stores</h1>
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2 style={{ color: 'red' }}>{error}</h2>
      ) : (
        stores.map((store) => <h2>{store.name}</h2>)
      )}
    </div>
  )
}

export default HomeScreen
