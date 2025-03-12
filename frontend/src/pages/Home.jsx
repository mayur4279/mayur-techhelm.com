import { motion } from 'framer-motion';

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

export default Home;
