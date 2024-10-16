'use client'

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

interface Links {
  url : string;
  name: string;
  icon: React.ReactNode;
  className: string;

}
export const Links = () => {

    const [isMounted, setIsMounted] = useState(false);
  


   //hooks for object 
   const links : Links[] = [
         {name: "Github" ,
         url:"https://github.com/abhidiva96", 
         icon:<GitHubIcon fontSize='large'/>, 
         className:"bg-slate-800/20"
        },
        
        {name: "LinkedIn" , 
         url:"https://www.linkedin.com/in/abhishek-kumar-062231198/", 
          icon:<LinkedInIcon fontSize='large'/>,  
          className:"bg-blue-700/20"
        },

   ]

   const handleClick = (url: string, name: string) => {
    if(isMounted && typeof window !== 'undefined'){
        window.open(url, '_blank')
    }
   }
   
   
   useEffect(() => {
        setIsMounted(true); 
   },[])

    return <div>
        <div className="flex gap-6">
           
                {links.map((link) => (
                     <div key={link.name}
                     onClick={() => handleClick(link.url, link.name)}
                        className={`flex justify-center border border-slate-400/20 bg-zinc-800/30 rounded-full p-2 cursor-pointer  ${link.className} `} >
                        {link.icon} 
                     </div>
                ))}
             </div>
        </div>
}