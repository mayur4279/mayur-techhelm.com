
# ==============================
# 🚀 TECH WEBSITE SETUP GUIDE
# ==============================

# ====================================
# ✅ FRONTEND SETUP (React + Tailwind)
# ====================================

# 1. Create React App
npx create-react-app frontend

# 2. Navigate to frontend folder
cd frontend

# 3. Install Dependencies
npm install react-router-dom framer-motion
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# 4. Configure Tailwind (tailwind.config.js)
echo "module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};" > tailwind.config.js

# 5. Add Tailwind to index.css
echo "@tailwind base;
@tailwind components;
@tailwind utilities;" > src/index.css

# 6. Create App.jsx
cat <<EOL > src/App.jsx
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import './App.css';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

function Home() {
  return (
    <motion.div initial="hidden" animate="visible" variants={fadeIn} className="p-8 text-center">
      <h1 className="text-5xl font-extrabold text-blue-600 mb-4">Welcome to Tech Solutions!</h1>
      <p className="text-xl text-gray-700 mb-6">Expert Cybersecurity, Cloud, and DevOps Solutions: Providing Round-the-Clock Protection</p>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-blue-700"
      >
        Contact Our Experts
      </motion.button>
    </motion.div>
  );
}

function Blog() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/blogs')
      .then((response) => response.json())
      .then((data) => setBlogs(data))
      .catch((err) => console.error('Error fetching blogs:', err));
  }, []);

  return (
    <motion.div initial="hidden" animate="visible" variants={fadeIn} className="p-8">
      <h2 className="text-4xl font-bold text-blue-600 mb-4">Latest Blogs</h2>
      <div className="space-y-6">
        {blogs.map((blog) => (
          <motion.div
            key={blog.id}
            whileHover={{ scale: 1.02 }}
            className="p-6 bg-white rounded-lg shadow-lg border border-gray-200"
          >
            <h3 className="text-2xl font-semibold text-blue-500 mb-2">{blog.title}</h3>
            <p className="text-gray-700 mb-2">{blog.content}</p>
            <p className="text-gray-500 text-sm">By {blog.author} on {new Date(blog.created_at).toLocaleDateString()}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 text-gray-800">
        <motion.nav
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-blue-600 text-white py-4 flex justify-center gap-8 shadow-lg"
        >
          <Link to="/" className="hover:text-gray-300 font-semibold">Home</Link>
          <Link to="/blog" className="hover:text-gray-300 font-semibold">Blog</Link>
        </motion.nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
EOL

# 7. Start Frontend
npm start


# ====================================
# ✅ BACKEND SETUP (Node.js + Express)
# ====================================

# 1. Create backend folder
mkdir ../backend && cd ../backend

# 2. Initialize Node.js
npm init -y

# 3. Install Dependencies
npm install express cors body-parser pg

# 4. Create server.js
cat <<EOL > server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { Pool } = require('pg');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

const pool = new Pool({
  user: 'your_user',
  host: 'localhost',
  database: 'your_database',
  password: 'your_password',
  port: 5432
});

pool.connect()
  .then(() => console.log('Connected to PostgreSQL'))
  .catch(err => console.error('Connection error', err.stack));

app.get('/api/blogs', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM blogs ORDER BY created_at DESC');
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

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

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
EOL

# 5. Start Backend
node server.js


# ====================================
# ✅ POSTGRESQL SETUP
# ====================================

# 1. Start PostgreSQL
sudo systemctl start postgresql
sudo systemctl enable postgresql

# 2. Create User and Database
psql -U postgres <<EOF
CREATE USER your_user WITH PASSWORD 'your_password';
CREATE DATABASE your_database;
GRANT ALL PRIVILEGES ON DATABASE your_database TO your_user;
EOF

# 3. Create Tables and Sample Data
psql -U your_user -d your_database <<EOF
CREATE TABLE blogs (
    id SERIAL PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    content TEXT NOT NULL,
    author VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO blogs (title, content, author) 
VALUES 
('How to Secure Your Cloud Infrastructure', 'Cloud security best practices...', 'John Doe'),
('Top DevOps Strategies for 2025', 'Automate and enhance your DevOps workflow...', 'Jane Smith'),
('AI Trends Transforming Business', 'AI adoption is reshaping industries...', 'Mike Johnson');
EOF


# ====================================
# ✅ Required Extension in VS code 
# ====================================


code --install-extension dbaeumer.vscode-eslint \
esbenp.prettier-vscode \
bradlc.vscode-tailwindcss \
dsznajder.es7-react-js-snippets \
humao.rest-client \
ms-ossdata.vscode-postgresql \
aaron-bond.better-comments \
eamodio.gitlens \
coenraads.bracket-pair-colorizer



