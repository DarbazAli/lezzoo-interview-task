import mysql from 'mysql'

// create connection with mysql driver

// mysql://b2c08ccd7c05ce:4a7a482e@us-cdbr-east-04.cleardb.com/heroku_6a5d3f0823bc7b6?reconnect=true
const connection = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '1234',
  database: process.env.DB || 'stores',
  // host: 'us-cdbr-east-04.cleardb.com',
  // user: 'b2c08ccd7c05ce',
  // password: '4a7a482e',
  // database: 'eroku_6a5d3f0823bc7b6',
})

// open the connection
connection.connect((err) => {
  if (err) throw err
  console.log('MYSQL is connected successfully')
})

// var connection = mysql.createPool({
//   connectionLimit: 10,
//   host: 'us-cdbr-east-04.cleardb.com',
//   user: 'b2c08ccd7c05ce',
//   password: '4a7a482e',
//   database: 'eroku_6a5d3f0823bc7b6',
// })

// connection.getConnection((err) => {
//   if (err) throw err
//   console.log('MYSQL is connected successfully')
// })

export default connection
