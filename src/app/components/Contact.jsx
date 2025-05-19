import React, { useState, useRef } from 'react';
import { assets } from '../../../assets/assets';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';

const Contact = () => {
  const [result, setResult] = useState("");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    formData.append("access_key", "8501af4b-f4a7-4695-b7e1-ab1af1b642ec");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <motion.div
      id="contact"
      ref={ref}
      className="w-full px-[12%] py-10 scroll-mt-20 bg-[length:90%_auto] dark:bg-none"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      <motion.h4
        className="text-center mb-2 text-lg font-Ovo"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Connect with me
      </motion.h4>
      <motion.h2
        className="text-center text-5xl font-Ovo"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Get in touch
      </motion.h2>

      <motion.p
        className="text-center max-w-21 mx-auto mt-5 mb-12 font-Ovo"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        I'd love to hear from you! If you have any questions, comments, or feedback, please use the form below.
      </motion.p>

      <motion.form
        onSubmit={onSubmit}
        className="max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="grid grid-cols-auto gap-6 mt-10 mb-8">
          <motion.input
            type="text"
            placeholder="Enter your name"
            required
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90"
            name="name"
            whileFocus={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          />

          <motion.input
            type="email"
            placeholder="Enter your email"
            required
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90"
            name="email"
            whileFocus={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          />
        </div>
        <motion.textarea
          rows="6"
          placeholder="Enter your Message"
          required
          className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90"
          name="message"
          whileFocus={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        ></motion.textarea>
        <motion.button
          type="submit"
          className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          Submit now
          <Image src={assets.right_arrow_white} alt="" className="w-4" />
        </motion.button>

        <motion.p
          className="mt-4 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          {result}
        </motion.p>
      </motion.form>
    </motion.div>
  );
};

export default Contact;
