
-- PostgreSQL Setup Script

-- 1. Create User
CREATE USER your_user WITH PASSWORD 'your_password';

-- 2. Create Database
CREATE DATABASE your_database;

-- 3. Grant Permissions
GRANT ALL PRIVILEGES ON DATABASE your_database TO your_user;

-- 4. Create Services Table
\c your_database;

CREATE TABLE services (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT NOT NULL
);

INSERT INTO services (name, description) 
VALUES 
('Cloud Consulting', 'Tailored cloud solutions for scalability and cost-efficiency.'),
('DevOps', 'Automate processes and improve development pipelines.'),
('Cybersecurity', 'Advanced security solutions with 24/7 monitoring.'),
('AI & ML', 'AI-driven insights and automation.');

-- 5. Create Blogs Table
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
