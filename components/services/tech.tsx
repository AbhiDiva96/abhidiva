'use client'

import Image from "next/image"
// import {Techno} from '@/lib/utility/atoms'
import { Techno } from "@/components/utility/atoms"

export const Tech = () => {
    return  <div>

      <span className="mx-auto mb-9 block w-fit bg-gradient-to-br from-zinc-200 to-zinc-500 bg-clip-text text-center text-lg text-transparent">
                Technology I Used To <b> Build</b>  Product
            </span>
        <div className="w-full h-full px-[4rem] md:px-[10rem] ">
             <div className="border border-zinc-600 p-4  bg-zinc-800 rounded">
             <div className="grid grid-cols-1 sm:grid-cols-4">
                {Techno.map((techbook, index)=> (
                    <div key={index} >
                        <div className="flex justify-center p-2">
                            <Image
                            src={techbook.imageUrl}
                            alt={techbook.name}
                            width={40}
                            height={40}
                            />
                            <div className="flex items-center pl-2">
                                 {techbook.name}
                            </div>
                    </div>
                  </div>
                ))}
              </div>
       
             </div>
        </div>
    </div>
}