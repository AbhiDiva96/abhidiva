'use client'

import LaunchIcon from '@mui/icons-material/Launch';
import { downloadResume } from '@/lib/utility/atoms';

export const Intro = () => {


 return <div>
    
 <div className="flex justify-center py-20">
    <div className="py-20">
                <div className=" text-3xl md:text-6xl p-10">
                   WelCome to The Profile of Software Developer
                  </div>
          <div className="flex justify-center font-bold ">
            <button 
            onClick={downloadResume}
            className="border border-zinc-300 p-2 w-48 rounded-[15px] ">
              Profile 
              <span>
              <LaunchIcon/>
              </span>
            </button>
           </div>
         </div>
          </div>
    </div>
}