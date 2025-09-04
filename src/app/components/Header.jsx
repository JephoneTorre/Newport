'use client'
import React from 'react'
import { assets } from '../../../assets/assets'
import Image from 'next/image'
import { motion } from "motion/react"
import { useRouter } from 'next/navigation'

const Header = () => {
  const router = useRouter()

  return (
    <div className='w-11/12 max-w-7x1 text-center mx-auto h-screen flex flex-col items-center justify-center gap-4 '>
      
      <motion.div
        initial={{scale: 0}}
        whileInView={{scale: 1}}
        transition={{duration: 0.8, type: 'spring', stiffness: 100}}
      >
        <Image src={assets.profile_img} alt='' className='rounded-full w-44'/>
      </motion.div>

      <motion.h3 
        initial={{y: 0, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: 0.6, delay: 0.3}}
        className='flex items-end gap-2 text-xl md:text-2x1 mb-3 font-Ovo'
      >
        Hi! I'm Jephone Israel Jireh Torre <Image src={assets.hand_icon} alt='' className='w-6'/>
      </motion.h3>

      <motion.h1
        initial={{y: -30, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: 0.8, delay: 0.5}}
        className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo max-w-[70rem] mx-auto text-center"
      >
        Frontend web developer based in Philippines.
      </motion.h1>

      <motion.p
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.6, delay: 0.7}}
        className='max-w-2x1 mx-auto font-Ovd'
      >
        I am a frontend developer from Iloilo, Philippines with 4 years of experience in West Visayas State University.
      </motion.p>

      <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>

        {/* ✅ Contact button now goes to accounts page */}
        <motion.button
          initial={{y: -30, opacity: 0}}
          whileInView={{y: 0, opacity: 1}}
          transition={{duration: 0.6, delay: 0.3}}
          onClick={() => router.push('/accounts')}
          className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 dark:bg-transparent'
        >
          contact me <Image src={assets.right_arrow_white} alt='' className='w-4'/>
        </motion.button>

        <motion.a
          initial={{y: -30, opacity: 0}}
          whileInView={{y: 0, opacity: 1}}
          transition={{duration: 0.6, delay: 1.2}}
          href="/sample-resume.pdf" download
          className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black'
        >
          my resume <Image src={assets.download_icon} alt='' className='w-4'/>
        </motion.a>

      </div>
    </div>
  )
}

export default Header
