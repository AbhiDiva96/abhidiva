'use client'

import Link from 'next/link'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useRouter } from 'next/navigation'


export const Navbar = () => {

  const router = useRouter();
const docLink = 'https://drive.google.com/file/d/1hII7ZOM_EB8TNQWqZ5c2_Lk3graViFbd/view?usp=sharing';

  const downloadResume = () => {
       window.open(docLink, '_blank')
  }
  return (
    <div>
      <div className="flex justify-between backdrop-blur-sm">

        {/* Logo Section */}
        <div className=' flex justify-center pl-8'>
          <Link href={"/"}>
            <div className="flex justify-center text-2xl md:text-4xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 pt-5">
              AbhiDiva
            </div>
          </Link>
        </div>

        {/* Middle Section (Hidden on Mobile) */}
        <div className="hidden md:flex pt-2"> {/* 'hidden' on mobile, 'flex' on medium screens and above */}
          <div className="flex justify-center rounded border-slate-600 text-md p-2">
            <div className='flex justify-center border border-zinc-700 rounded gap-4 px-6'>
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
        <div className='flex justify-center'>

          {/* Dropdown Menu (Visible on Mobile) */}
          <div className='flex pr-4 md:hidden'> {/* 'md:hidden' ensures it's visible only on small screens */}
            <div className='flex justify-center pt-4'>
              <DropdownMenu>
                <DropdownMenuTrigger className='flex justify-center border-2 p-2 border-zinc-900 text-md font-bold rounded'>Open</DropdownMenuTrigger>
                
                <DropdownMenuContent>
                  <DropdownMenuLabel>Visit</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <Link href={'/dsa'}>
                    <DropdownMenuItem>Data Structure</DropdownMenuItem>
                  </Link>
                  <Link href={'/webdev'}>
                    <DropdownMenuItem>Web Dev</DropdownMenuItem>
                  </Link>
                  <Link href={'/posts'}>
                    <DropdownMenuItem>Blogs</DropdownMenuItem>
                  </Link>
                    <button onClick={downloadResume}>
                    <DropdownMenuItem>Resume</DropdownMenuItem>

                    </button>
                
                  <Link href={'/hireme'}>
                    <DropdownMenuItem>Hire Me</DropdownMenuItem>
                  </Link>
                  <DropdownMenuItem>Buy a coffee</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
