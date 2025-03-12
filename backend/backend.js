
// backend/server.js

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { Pool } = require('pg');

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// PostgreSQL connection
const pool = new Pool({
  user: 'your_user',
  host: 'localhost',
  database: 'your_database',
  password: 'your_password',
  port: 5432
});

// Test connection
pool.connect()
  .then(() => console.log('Connected to PostgreSQL'))
  .catch(err => console.error('Connection error', err.stack));

// ===== Blogs Endpoints =====

// Get all blogs
app.get('/api/blogs', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM blogs ORDER BY created_at DESC');
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// Add a new blog
app.post('/api/blogs', async (req, res) => {
  const { title, content, author } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO blogs (title, content, author) VALUES ($1, $2, $3) RETURNING *',
      [title, content, author]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// Delete a blog
app.delete('/api/blogs/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query('DELETE FROM blogs WHERE id = $1', [id]);
    res.status(200).send('Blog deleted');
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
