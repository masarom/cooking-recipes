// Imports
const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');
require('dotenv').config();

// Start the server
const server = express();

// Server config
server.use(cors());
server.use(express.json({ limit: '25mb' }));

// Connect to DB
async function getConnection() {
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASS,
    database: process.env.DB_NAME || 'adakitten',
  });
  connection.connect();
  return connection;
}

// Listen to the server
const port = process.env.PORT || 4000;
server.listen(port, () => {
  console.log(`Server started at: http://localhost:${port}/`);
});

// Endpoints

//get recipes
server.get('/api/recipes', async (req, res) => {
  const select = 'SELECT * FROM recipes';
  const conn = await getConnection();
  const [result] = await conn.query(select);
  conn.end();
  res.json({
    success: true,
    results: result,
  });
});

// add new recipe
server.post('/api/recipes/add', async (req, res) => {
  const {title, image, initialComment, ingredients, elaboration, finalQuote} = req.body;
  try{
  const insert =
    'INSERT INTO `freedb_cooking-recipes`.`recipes` (`title`, `image`, `initialComment`, `ingredients`, `elaboration`, `finalQuote`) VALUES (?,?,?,?,?,?)';
  const connect = await getConnection();
  const [result] = await connect.query(insert, [title, image, initialComment, ingredients.rawList, elaboration.steps, finalQuote]);
  conn.end();
  res.json({
    success: true,
    url: `http://localhost:3000/receta/${insertId}`,
  });
  } catch(e) {
    res.json({
      success: false,
      message: e
    })
  }

});
