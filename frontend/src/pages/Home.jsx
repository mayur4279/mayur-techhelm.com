import { motion } from 'framer-motion';

function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-blue-600 mb-4">
          Expert Cybersecurity, Cloud, and DevOps Solutions
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Providing round-the-clock protection and scalable solutions for your business.
        </p>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700">
          Contact Our Experts
        </button>
      </motion.div>

      {/* Services Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Cloud Consulting */}
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="p-6 bg-white rounded-lg shadow-md"
        >
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">Cloud Consulting Services</h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </motion.div>

        {/* DevOps */}
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="p-6 bg-white rounded-lg shadow-md"
        >
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">DevOps Services</h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </motion.div>

        {/* Cybersecurity */}
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="p-6 bg-white rounded-lg shadow-md"
        >
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">Security Solutions</h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </motion.div>
      </div>

      {/* Recent Blogs */}
      <div className="mt-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Recent Blogs</h2>
        <div className="space-y-4">
          {['Blog-1', 'Blog-2', 'Blog-3'].map((blog, index) => (
            <motion.div 
              key={index}
              whileHover={{ scale: 1.02 }}
              className="p-4 bg-gray-50 rounded-lg shadow-md border border-gray-200"
            >
              <h3 className="text-xl font-semibold text-blue-600">{blog}</h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
