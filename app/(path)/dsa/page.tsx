'use client'
import { Navbar } from "@/components/navbar"

import { Carousel } from "@/components/services/carousal"
import ManualDropdown from "@/components/services/dropdown"


export default function Dsa() {


    return <div>
        
        
        <div className="absolute inset-0  max-h-full w-full bg-green-950   text-white bg-[linear-gradient(to_right,#858282,transparent_1px),linear-gradient(to_bottom,#858282,transparent_1px)] bg-[size:40px_40px]  ">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_top,transparent_10%,white)]"></div>

        <Navbar/>
        
 
              <div className=" pt-32">
                  <Carousel />   
              </div>
          

        
        </div>

    </div>
  }

