import sql from '../db/db.js'

// create new categroy
// POST /api/category
// public
const createCategory = (req, res) => {
  const { name, image, storeID } = req.body

  sql.query(
    `INSERT INTO category (name, image, storeID) VALUES('${name}', '${image}', ${storeID})`,
    (err) => {
      if (err) {
        res.send('Unable to create category')
      } else {
        res.send('Category created successfully!')
      }
    }
  )
}

// get all categories for a store
const list = (req, res) => {
  const { storeID } = req.params
  sql.query(
    `SELECT * FROM category WHERE storeID = ${storeID}`,
    (err, rows) => {
      if (err) {
        res.send(err)
      } else {
        res.json(rows)
      }
    }
  )
}

const getCategoryById = (req, res) => {
  const { id } = req.params

  sql.query(`SELECT * FROM category WHERE id = ${id}`, (err, result) => {
    if (err) {
      res.send('Could not found')
    } else {
      res.json(result[0])
    }
  })
}

export default { createCategory, list, getCategoryById }
