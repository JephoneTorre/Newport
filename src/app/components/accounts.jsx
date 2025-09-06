import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { assets } from '../../../assets/assets'

const Accounts = ({ onBack, isDarkMode }) => {
  const accounts = [
    { name: 'GitHub', link: 'https://github.com/JephoneTorre' },
    { name: 'LinkedIn', link: 'https://www.linkedin.com/in/jephoneisraeljireh-torre-382204337/' },
    { name: 'Facebook', link: 'https://www.facebook.com/kanekiken0530/' },
    { name: 'Hugging Face', link: 'https://huggingface.co/JEPHONETORRE' },
  ]

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center p-6">
      {/* Background same as Navbar */}
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
        <Image src={assets.header_bg_color} alt="Background" className="w-full" />
      </div>

      {/* Dark mode overlay */}
      {isDarkMode && (
        <div className="fixed inset-0 -z-10 bg-darkTheme bg-opacity-50 backdrop-blur-lg"></div>
      )}

      {/* Content wrapper for vertical centering */}
      <div className="flex flex-col items-center justify-center w-full max-w-5xl">
        {/* Back Button */}
        <button
          onClick={onBack}
          className={`absolute top-6 left-6 px-4 py-2 border rounded transition 
            ${isDarkMode ? 'bg-gray-700 text-white border-gray-600 hover:bg-gray-600' : 'bg-gray-200 text-black border-gray-300 hover:bg-gray-300'}`}
        >
          ← Back
        </button>

        {/* Page Title */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className={`text-2xl font-Ovo font-bold ${isDarkMode ? 'text-white' : 'text-black'}`}>
            My Accounts
          </h1>
        </motion.div>

        {/* Accounts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
          {accounts.map((account, index) => (
            <motion.a
              key={index}
              href={account.link}
              target="_blank"
              rel="noreferrer"
              className={`w-64 p-6 rounded-lg shadow-md transition transform hover:scale-105 text-center
                ${isDarkMode 
                  ? 'bg-gray-800 text-white shadow-gray-700 hover:shadow-[0_0_20px_#9333ea] hover:bg-gray-700' 
                  : 'bg-white text-black shadow-gray-300 hover:shadow-[0_0_20px_#3b82f6] hover:bg-gray-100'}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h2 className="text-lg font-semibold mb-2 font-Ovo">{account.name}</h2>
              <p className="text-sm break-words">{account.link}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Accounts
