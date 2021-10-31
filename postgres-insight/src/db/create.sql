DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS purchases CASCADE;
DROP TABLE IF EXISTS stocks CASCADE;

CREATE TABLE users (
  userID SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(30) NOT NULL,
  balance BIGINT
);

CREATE TABLE stocks (
  stockID SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(30) NOT NULL,
  ticker VARCHAR(4) NOT NULL
);

CREATE TABLE purchases (
  purchaseID SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(userID) NOT NULL ON DELETE CASCADE,
  stock_id INTEGER REFERENCES stocks(stockID) NOT NULL ON DELETE CASCADE,
  timestamp TIMESTAMP NOT NULL,
  purchasePrice INTEGER NOT NULL,
  numberOfStocks INTEGER NOT NULL
);