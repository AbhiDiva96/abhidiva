'use client'

import Link from 'next/link'

import { useRouter } from 'next/navigation'
import { downloadResume } from '@/components/utility/atoms'
import ManualDropdown from './services/dropdown'

export const Navbar = () => {

    const router = useRouter();
    
  return (
    <div >
      <div className=" flex fixed top-0 left-0 w-full z-50 justify-between backdrop-blur-sm">

        {/* Logo Section */}
        <div className=' flex justify-center pl-8'>
          <Link href={"/"}>
            <div className="flex justify-center text-2xl md:text-4xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 pt-5">
              AbhiDiva
            </div>
          </Link>
        </div>

        {/* Middle Section (Hidden on Mobile) */}
        <div className="hidden md:flex pt-6"> {/* 'hidden' on mobile, 'flex' on medium screens and above */}
          <div className="flex justify-center rounded border-slate-600 text-md ">
            <div className='flex justify-center text-zinc-300 border border-zinc-700 rounded gap-4 px-6'>
              <button 
                className='cursor-pointer'
                onClick={() => router.push('/dsa')}>
                DSA  
              </button>

              <span className='flex items-center'>|</span>

              <button onClick={() => router.push('/webdev')}>
                Development        
              </button>

              <span className='flex items-center'>|</span>

              <button onClick={() => router.push('/posts')}>
                Blog
              </button>
              <span className='flex items-center'>|</span>
              <button onClick={() => router.push('/hireme')}>
                Hire Me
              </button>

              <span className='flex items-center'>|</span>
              <button onClick={downloadResume}>
                Resume
              </button>

            </div>
          </div>
        </div>

        {/* Resume and Dropdown Section */}
        <div className='flex justify-center '>

          {/* Dropdown Menu (Visible on Mobile) */}
          <div className='flex pr-4 md:hidden'> {/* 'md:hidden' ensures it's visible only on small screens */}
          <ManualDropdown/>
          </div>
        </div>
      </div>
    </div>
  )
}
