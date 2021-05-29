import sql from '../db/db.js'

// Create a new store controller
const createStore = (req, res) => {
  const { name, logo } = req.body

  sql.query(
    `INSERT INTO store (name, logo) VALUES('${name}', '${logo}')`,
    (err) => {
      if (err) res.send(err)
      res.send('Store created successfully!')
    }
  )
}

// get all stores
const list = (req, res) => {
  sql.query('SELECT * FROM store', (err, rows) => {
    if (err) res.send(err)
    res.json(rows)
  })
}

const getStoreById = (req, res) => {
  const { id } = req.params

  sql.query(`SELECT * FROM store WHERE id = ${id}`, (err, result) => {
    if (err) res.send(err)
    res.json(result)
  })
}

export default { createStore, list, getStoreById }
