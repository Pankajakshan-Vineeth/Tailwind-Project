import { assets } from "../assets/assets";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <div
      className="min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden"
      style={{ backgroundImage: `url(${assets.header_img})` }}
      id="Header"
    >
      <motion.div
        initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true, amount: 0.3 }}
        className="container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white"
      >
        <h2 className="text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold">
          Explore homes that fit your dreams
        </h2>
        <div className="space-x-6 mt-16">
          <a className="border border-white px-8 py-3 rounded" href="#Projects">
            Projects
          </a>
          <a className="bg-blue-500 px-8 py-3 rounded" href="#Contact">
            Contact Us
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
