const express = require('express')
const app = express()
const PORT = 8080

const user_model = require('./user_model')

app.use(express.json())
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3005');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
  next();
})

app.get('/', (req, res) => {
  user_model.getUsers()
    .then(response => {
      res.status(200).send(response);
    })
    .catch(error => {
      res.status(500).send(error);
    })
})

app.get('/get/balance/:user', (req, res) => {
  user_model.getBalance(req.params.user)
    .then(response => {
      res.status(200).send(response)
    })
    .catch(error => {
      res.status(500).send(error);
    })
})

app.get('/get/history/:userID', (req, res) => {
  user_model.getDetailedHistory(req.params.userID)
    .then(response => {
      res.status(200).send(response)
    })
    .catch(error => {
      res.status(500).send(error);
    })
})

app.get('/checkstock/:ticker/:userID', (req, res) => {
  const body = {
    ticker: req.params.ticker,
    username: req.params.userID
  }
  user_model.checkStockExists(body)
    .then(response => {
      res.status(200).send(response)
    })
    .catch(error => {
      res.status(500).send(error);
    })
})

app.get('/checkdata/:ticker', (req, res) => {
  user_model.checkDataExists(req.params.ticker)
    .then(response => {
      res.status(200).send(response)
    })
    .catch(error => {
      res.status(500).send(error);
    })
})

app.post('/add/stock', (req, res) => {
  user_model.insertStockList(req.body)
    .then(response => {
      console.log('within add stock', response)
      res.status(200).send(response)
    })
    .catch(error => {
      res.status(500).send(error);
    })
})

app.post('/add/stockdata', (req, res) => {
  console.log(req.body)
  user_model.insertStockData(req.body)
    .then(response => {
      res.status(200).send(response)
    })
    .catch(error => {
      res.status(500).send(error);
    })
})

app.get('/get/stockdata/:ticker', (req, res) => {
  user_model.getStockData(req.params.ticker)
    .then(response => {
      res.status(200).send(response)
    })
    .catch(error => {
      res.status(500).send(error);
    })
})

app.get('/get/stocklist/:userID', (req, res) => {
  user_model.getStockList(req.params.userID)
    .then(response => {
      res.status(200).send(response)
    })
    .catch(error => {
      res.status(500).send(error);
    })
})

app.post('/users', (req, res) => {
  user_model.createUser(req.body)
    .then(response => {
      res.status(200).send(response);
    })
    .catch(error => {
      res.status(500).send(error);
    })
})

app.post('/add/purchase', (req, res) => {
  user_model.addPurchase(req.body)
    .then(response => {
      res.status(200).send(response);
    })
    .catch(error => {
      res.status(501).send(error);
    })
})

app.put('/set/balance/:user', (req, res) => {
  user_model.setBalance(req.body, req.params.user)
    .then(response => {
      res.status(200).send(response)
    })
    .catch(error => {
      res.status(500).send(error);
    })
})

app.delete('/users/:id', (req, res) => {
  user_model.deleteUser(req.params.id)
    .then(response => {
      res.status(200).send(response)
    })
    .catch(error => {
      res.status(500).send(error);
    })
})

app.listen(PORT, () => {
  console.log(`App running on ${PORT}.`)
})