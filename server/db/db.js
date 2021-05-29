import mysql from 'mysql'

// create connection with mysql driver
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'stores',
})

// open the connection
connection.connect((err) => {
  if (err) throw err
  console.log('MYSQL is connected successfully')
})

export default connection
