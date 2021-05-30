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

export default { createItem }
