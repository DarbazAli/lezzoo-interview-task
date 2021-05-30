import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import axios from 'axios'
import { Link } from 'react-router-dom'
import { listCategories } from '../actions/categoryActions'

const CategoryScreen = ({ match }) => {
  const dispatch = useDispatch()
  const storeID = match.params.id

  const { loading, categories, error } = useSelector(
    (state) => state.categoryList
  )

  useEffect(() => {
    dispatch(listCategories(storeID))
  }, [dispatch, match, storeID])

  return (
    <div>
      <h1>Stores</h1>

      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2 style={{ color: 'red' }}>{error}</h2>
      ) : (
        <div className='stores'>
          {categories.map((category) => (
            <h1 key={category.id}>{category.name}</h1>
          ))}
        </div>
      )}
    </div>
  )
}

export default CategoryScreen
