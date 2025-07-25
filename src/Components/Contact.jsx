import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.div
      className="text-center p-6 py-20 lg:px-32 w-full overflow-hidden"
      id="Contact"
      initial={{ opacity: 0, x: -200 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Contact{" "}
        <span className="underline underline-offset-4 decoration-1 under font-light">
          With Us
        </span>
      </h1>
      <p className="text-center text-gray-500 mb-12 max-w-80 mx-auto">
        Ready to Make a Move? Let's Build Your Future Together{" "}
      </p>
      <form className="max-w-2xl mx-auto text-gray-600 pt-8">
        <div className="flex flex-wrap justify-between ">
          <div className="w-full md:w-80 text-left">
            Your Name
            <input
              className="w-full border border-gray-300 rounded py-3 px-4 mt-2"
              type="text"
              name="Name"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="w-full md:w-80 text-left">
            Your Email
            <input
              className="w-full border border-gray-300 rounded py-3 px-4 mt-2"
              type="email"
              name="Email"
              placeholder="Your Email"
              required
            />
          </div>
        </div>
        <div className="my-6 text-left">
          Message
          <textarea
            className="w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none"
            name="Message"
            placeholder="Message"
            required
          ></textarea>
        </div>
        <button className="bg-blue-600 text-white py-2 px-12 mb-10 rounded">
          Send Message
        </button>
      </form>
    </motion.div>
  );
};

export default Contact;
