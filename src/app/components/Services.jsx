import React from 'react'
import { assets, serviceData } from '../../../assets/assets'
import Image from 'next/image'
import { animate, scroll } from "motion"
import { motion } from "motion/react"

const Services = () => {
  return (
    <motion.div 
      id="services" 
      className='w-full px-[12%] py-10 scroll-mt-20'
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.5 }}
    >
      <motion.h4 
        className='text-center mb-2 text-lg font-Ovo'
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        What I offer
      </motion.h4>
      <motion.h2 
        className='text-center text-5xl font-Ovo'
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        My services
      </motion.h2>

      <motion.p 
        className='text-center max-w-21 mx-auto mt-5 mb-12 Font-Ovo'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        I'm a 3rd year Computer student who specializes in AI and Front-end Development.
      </motion.p>

      <motion.div 
        className='grid grid-cols-auto gap-5 my-10'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {serviceData.map(({ icon, title, description, link }, index) => (
          <motion.div 
            key={index}
            className='border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black
            cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bh-darkHover dark:hover:shadow-white'
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <Image src={icon} alt='' className='w-10' />
            </motion.div>
            <motion.h3 
              className='text-lg my-4 text-gray-700 dark:text-white'
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {title}
            </motion.h3>
            <motion.p 
              className='text-sm text-gray-600 leading-5 dark:text-white/80'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              {description}
            </motion.p>
            <motion.a 
              href={link} 
              className='flex items-center gap-2 text-sm mt-5'
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Read more <Image alt='' src={assets.right_arrow} className='w-4' />
            </motion.a>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default Services
