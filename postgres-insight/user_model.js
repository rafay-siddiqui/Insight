const Pool = require('pg').Pool
const pool = new Pool ({
  user: 'developer',
  host: 'localhost',
  database: 'insight_app',
  password: 'developer',
  port: 5432,
});

const getUsers = () => {
  return new Promise(function(resolve, reject) {
    pool.query('SELECT * FROM users', (error, results) => {
      if (error) {
        reject(error)
      }
      resolve(results.rows);
    })
  })
}

const createUser = (body) => {
  return new Promise(function(resolve, reject) {
    const { name } = body
    pool.query('INSERT INTO users(name, balance) VALUES ($1, 0) RETURNING *', [name], (error, results) => {
      if (error) {
        reject(error)
      }
      resolve(`A new user has been added: ${results.rows[0]}`)
    })
  })
}

const deleteUser = () => {
  return new Promise(function(resolve, reject) {
    const id = parseInt(request.params.id)
    pool.query('DELETE FROM merchants WHERE id = $1', [id], (error, results) => {
      if (error) {
        reject(error)
      }
      resolve(`User deleted with ID: ${id}`)
    })
  })
}

const getBalance = (username) => {
  return new Promise(function(resolve, reject) {
    pool.query('SELECT balance FROM users WHERE name = $1', [username], (error, results) => {
      if (error) {
        reject(error)
      }
      resolve(results.rows[0])
    })
  })
}

const getDetailedHistory = (userID) => {
  return new Promise(function(resolve, reject) {
    pool.query('SELECT user_id, stockTicker, date, purchasePrice, numberOfStocks FROM purchases, users WHERE user_id = $1', [userID], (error, results) => {
      if (error) {
        reject(error)
      }
      resolve(results.rows)
    })
  })
}

const setBalance = (body) => {
  return new Promise(function(resolve, reject) {
    const { balance } = body
    pool.query('UPDATE users SET balance = $1', [balance], (error, results) => {
      if (error) {
        reject(error)
      }
      resolve(`User balance now: ${balance}`)
    })
  })
}

const addPurchase = (body) => {
  return new Promise(function(resolve, reject) {
    const { stockTicker, userID, date, purchasePrice, numberOfStocks } = body
    pool.query(`INSERT INTO purchases (stockTicker, user_id, date, purchasePrice, numberOfStocks) 
    VALUES ($1, $2, $3, $4, $5)`, [stockTicker, userID, date, purchasePrice, numberOfStocks], (error, results) => {
      if (error) {
        reject(error)
      }
      resolve (`User with ID ${userID} purchased ${numberOfStocks} stocks of the stock with ticker ${stockTicker} at ${date} for ${purchasePrice} each`)
    })
  })
}

module.exports = {
  getUsers,
  createUser,
  deleteUser,
  setBalance,
  getBalance,
  addPurchase,
  getDetailedHistory
}