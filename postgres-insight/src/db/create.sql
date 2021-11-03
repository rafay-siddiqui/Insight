DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS purchases CASCADE;
DROP TABLE IF EXISTS stocks CASCADE;

CREATE TABLE users (
  userID SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(30) NOT NULL,
  balance BIGINT
);

INSERT INTO users(name, balance) VALUES ('Elon', 100000);

CREATE TABLE stocks (
  stockID SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(userID) ON DELETE CASCADE,
  stockTicker VARCHAR(8)
);

CREATE TABLE purchases (
  purchaseID SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(userID) ON DELETE CASCADE,
  stockTicker VARCHAR(8) NOT NULL,
  date DATE NOT NULL,
  purchasePrice NUMERIC NOT NULL,
  numberOfStocks INTEGER NOT NULL
);