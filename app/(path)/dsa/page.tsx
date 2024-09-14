import { Navbar } from "@/components/navbar"

import Image from "next/image";
import { Carousel } from 'react-responsive-carousel';

export default function Dsa() {
    return <div>
        
        <div className="absolute inset-0  max-h-full w-full bg-green-950   text-white bg-[linear-gradient(to_right,#858282,transparent_1px),linear-gradient(to_bottom,#858282,transparent_1px)] bg-[size:40px_40px]  ">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_top,transparent_10%,white)]"></div>
        <Navbar/>

         <div className="flex justify-center py-6">
         <div className="text-4xl md:text-6xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
            Coding Platform
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

//   export const Card = ({
//     className,
//     children,
//   }: {
//     className?: string;
//     children: React.ReactNode;
//   }) => {
//     return (
//       <div
//         className={cn(
//           "max-w-sm w-full mx-auto p-8 rounded-xl border border-[rgba(255,255,255,0.10)] dark:bg-[rgba(40,40,40,0.70)] bg-gray-100 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] group",
//           className
//         )}
//       >
//         {children}
//       </div>
//     );
//   };