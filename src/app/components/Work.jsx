import React from 'react';
import { assets, workData } from '../../../assets/assets';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Work = ({ isDarkMode }) => {
  return (
    <motion.div
      id="work"
      className="w-full px-[12%] py-10 scroll-mt-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h4
        className="text-center mb-2 text-lg font-Ovo"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        My Portfolio
      </motion.h4>
      <motion.h2
        className="text-center text-5xl font-Ovo"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        My latest work
      </motion.h2>

      <motion.p
        className="text-center max-w-21 mx-auto mt-5 mb-12 font-Ovo"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        Welcome to my web development portfolio! Explore a collection of projects showcasing my expertise in front-end development.
      </motion.p>

      <motion.div
        className="grid grid-cols-auto my-10 gap-5 dark:text-black"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
      >
        {workData?.map((project, index) => (
          <motion.div
            whileHover={{ scale: 1.06 }}
            transition={{ duration: 0.3 }}
            key={index}
            className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
            style={{ backgroundImage: `url(${project.bgImage})` }}
          >
            <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 transform -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
              <div className="text-sm text-gray-700">
                <h2 className="font-semibold">{project.title}</h2>
                <p className="text-sm text-gray-700">{project.description}</p>
              </div>
           <Link href={project.link || '#'} passHref legacyBehavior>
                <a target={project.link?.startsWith('http') ? '_blank' : '_self'} rel={project.link?.startsWith('http') ? 'noopener noreferrer' : undefined}>
                  <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-md group-hover:bg-lime-300 transition">
                    <Image src={assets.send_icon} alt="send icon" className="w-5" />
                  </div>
                </a>
              </Link>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.a
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.5 }}
        href=""
        className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500 dark:text-white dark:border-white dark:hover:bg-darkHover"
      >
        Show more
        <Image
          src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold}
          alt="Right arrow"
          className="w-4"
        />
      </motion.a>
    </motion.div>
  );
};

export default Work;
