import React, { useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import axios from 'axios'
import { Link } from 'react-router-dom'
import { listItems } from '../actions/itemActions'

const ItemScreen = ({ match }) => {
  const dispatch = useDispatch()
  const categoryID = match.params.id

  const [name, setName] = useState('')
  const [image, setImage] = useState('')
  const [message, setMessage] = useState('')

  const fileEl = useRef(null)

  const { loading, items, error } = useSelector((state) => state.itemList)
  //   const { success } = useSelector((state) => state.itemCreate)
  console.log(items)
  useEffect(() => {
    dispatch(listItems(categoryID))
  }, [dispatch, match, categoryID])

  // file uploader hander
  const uploadFileHandler = async (e) => {
    const file = e.target.files[0]
    const formData = new FormData()
    formData.append('image', file)
    // setUploading(true)

    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }

      const { data } = await axios.post('/api/upload', formData, config)
      setImage(data)
      // setUploading(false)
    } catch (error) {
      console.error(error)
      // setUploading(false)
    }
  }

  // submit hander
  //   const submitHandler = (e) => {
  //     e.preventDefault()
  //     if (!name || !image) {
  //       setMessage('Please fill all the fields')
  //     } else {
  //       dispatch(
  //         createCategory({
  //           name,
  //           image,
  //           storeID,
  //         })
  //       )

  //       setName('')
  //       setImage('')
  //       fileEl.current.value = ''
  //     }
  //   }

  return (
    <div>
      <h1>Items</h1>

      {/* <form onSubmit={submitHandler}>
        {message && <h4 style={{ color: 'red' }}>{message}</h4>}
        <div className='input-field'>
          <label htmlFor='name'>Category:</label>
          <input
            type='text'
            name='name'
            id='name'
            placeholder='Enter Category'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className='input-field'>
          <label htmlFor='file'>Image</label>
          <input
            type='file'
            name='logo'
            id='file'
            ref={fileEl}
            onChange={uploadFileHandler}
          />
        </div>
        <button className='btn primary' type='submit'>
          Create
        </button>
      </form> */}

      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2 style={{ color: 'red' }}>{error}</h2>
      ) : (
        <div className='stores'>
          {items.map((item) => (
            <div
              //   to={`/item/${categoryID}`}
              key={item.id}
              className='store-card'
            >
              <img src={item.image} alt={item.name} />
              <h2>{item.name}</h2>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default ItemScreen
