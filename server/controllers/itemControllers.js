import sql from '../db/db.js'

// create new item
// POST /api/item
// public
const createItem = (req, res) => {
  const { name, image, categoryID, price } = req.body

  sql.query(
    `INSERT INTO item (name, image, categoryID, price) VALUES('${name}', '${image}', '${categoryID}', '${price}')`,
    (err) => {
      if (err) {
        res.send('Unable to create item')
      } else {
        res.send('Item created successfully!')
      }
    }
  )
}

// get all items for a category
const list = (req, res) => {
  const { categoryID } = req.params
  sql.query(
    `SELECT * FROM item WHERE categoryID = ${categoryID}`,
    (err, rows) => {
      if (err) {
        res.send(err)
      } else {
        res.json(rows)
      }
    }
  )
}

export default { createItem, list }
