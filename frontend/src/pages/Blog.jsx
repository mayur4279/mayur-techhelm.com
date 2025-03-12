import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

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
            <p className="text-gray-500 text-sm">
              By {blog.author} on {new Date(blog.created_at).toLocaleDateString()}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default Blog;
