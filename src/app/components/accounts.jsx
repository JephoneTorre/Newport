'use client'
import React from 'react'
import { useRouter } from 'next/navigation'

const Accounts = () => {
  const router = useRouter()

  return (
    <div className='min-h-screen p-6'>
      {/* Back button */}
      <button
        onClick={() => router.push('/')}
        className='px-4 py-2 mb-6 border rounded bg-gray-200 hover:bg-gray-300'
      >
        ← Back
      </button>

      <h1 className='text-2xl font-bold mb-4'>My Accounts</h1>

      <ul className='space-y-2'>
        <li>GitHub: <a href="https://github.com/JephoneTorre" target="_blank" className='text-blue-600'>github.com/JephoneTorre</a></li>
        <li>LinkedIn: <a href="https://www.linkedin.com/in/jephoneisraeljireh-torre-382204337/" target="_blank" className='text-blue-600'>linkedin.com/in/jephoneisraeljireh-torre-382204337/</a></li>
        <li>Facebook: <a href="https://www.facebook.com/kanekiken0530/" target="_blank" className='text-blue-600'>facebook.com/kanekiken0530/</a></li>
        {/* Add more accounts here */}
      </ul>
    </div>
  )
}

export default Accounts
