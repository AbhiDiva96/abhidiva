'use client'
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { downloadResume } from '../utility/atoms';

const ManualDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

 

  // Close the dropdown when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        closeDropdown();
      }
    };

    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup the event listener on unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative flex justify-center pt-4">
      <button
        onClick={toggleDropdown}
        className="flex justify-center border-2 p-2 border-zinc-400 text-md font-bold rounded"
      >
        Open
      </button>

      {isOpen && (
        <div
          ref={dropdownRef}
          className="absolute z-10 mt-1 w-48 bg-white text-black border border-zinc-400 rounded shadow-lg"
        >
          <div className="p-2">
            <div className="font-bold" >Visit</div>
            <hr className="border-black my-1" />
            <Link href="/dsa" passHref>
              <div className="cursor-pointer p-2 hover:bg-gray-100" onClick={closeDropdown}>
                Data Structure
              </div>
            </Link>
            <Link href="/webdev" passHref>
              <div className="cursor-pointer p-2 hover:bg-gray-100" onClick={closeDropdown}>
                Web Dev
              </div>
            </Link>
            <Link href="/posts" passHref>
              <div className="cursor-pointer p-2 hover:bg-gray-100" onClick={closeDropdown}>
                Blogs
              </div>
            </Link>
            <div className="cursor-pointer p-2 hover:bg-gray-100" onClick={() => { downloadResume(); closeDropdown(); }}>
              Resume
            </div>
            <Link href="/hireme" passHref>
              <div className="cursor-pointer p-2 hover:bg-gray-100" onClick={closeDropdown}>
                Hire Me
              </div>
            </Link>
            <div className="cursor-pointer p-2 hover:bg-gray-100" onClick={closeDropdown}>
              Buy a coffee
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManualDropdown;
