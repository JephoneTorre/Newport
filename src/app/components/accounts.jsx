import React from 'react'
import Image from 'next/image'
import { assets } from '../../../assets/assets'

const Accounts = ({ onBack, isDarkMode }) => {
  const accounts = [
    { name: 'GitHub', link: 'https://github.com/JephoneTorre' },
    { name: 'LinkedIn', link: 'https://www.linkedin.com/in/jephoneisraeljireh-torre-382204337/' },
    { name: 'Facebook', link: 'https://www.facebook.com/kanekiken0530/' },
    { name: 'Hugging Face', link: 'https://huggingface.co/JEPHONETORRE' },
  ]

  return (
    <div className='relative min-h-screen flex flex-col items-center justify-center p-6'>
      {/* Background exactly like Navbar */}
      <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden'>
        <Image src={assets.header_bg_color} alt='Background' className='w-full' />
      </div>

      {/* Dark mode overlay */}
      {isDarkMode && (
        <div className='fixed inset-0 -z-10 bg-darkTheme bg-opacity-50 backdrop-blur-lg'></div>
      )}

      {/* Back Button */}
      <button
        onClick={onBack}
        className={`absolute top-6 left-6 px-4 py-2 border rounded transition 
          ${isDarkMode ? 'bg-gray-700 text-white border-gray-600 hover:bg-gray-600' : 'bg-gray-200 text-black border-gray-300 hover:bg-gray-300'}`}
      >
        ← Back
      </button>

      <div className='text-center mb-10'>
        <h1 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-black'}`}>
          My Accounts
        </h1>
      </div>

      {/* Centered Accounts Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center'>
        {accounts.map((account, index) => (
          <a
            key={index}
            href={account.link}
            target="_blank"
            rel="noreferrer"
            className={`w-64 p-6 rounded-lg shadow-md transition transform hover:scale-105 text-center
              ${isDarkMode ? 'bg-gray-800 text-white shadow-gray-700 hover:bg-gray-700' : 'bg-white text-black shadow-gray-300 hover:bg-gray-100'}`}
          >
            <h2 className='text-lg font-semibold mb-2'>{account.name}</h2>
            <p className='text-sm break-words'>{account.link}</p>
          </a>
        ))}
      </div>
    </div>
  )
}

export default Accounts
