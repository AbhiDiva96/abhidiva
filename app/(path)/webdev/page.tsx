"use client"

import * as React from "react"


import { Navbar } from "@/components/navbar"

export default function Webdev() {

    

    return <div>
         
          <div className="absolute inset-0  h-full  w-full bg-blue-950   text-white bg-[linear-gradient(to_right,#858282,transparent_1px),linear-gradient(to_bottom,#858282,transparent_1px)] bg-[size:40px_40px]  ">
           <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_bottom,transparent_10%,white)]"></div>
           <Navbar />
 
        
           <div className="flex justify-center p-9 ">
            <div className="text-4xl md:text-6xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
              Lets Get View of my project
            </div>
            </div>

            <div className="flex justify-center p-9 ">
            <div className="text-4xl md:text-6xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
              Coming Soon
            </div>
            </div>

              
        
    </div>
      
        
        
    </div>
  }

 