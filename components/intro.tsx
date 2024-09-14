'use client'

import LaunchIcon from '@mui/icons-material/Launch';
import { downloadResume } from '@/lib/utility/atoms';

export const Intro = () => {


 return <div>
    
 <div className="flex justify-center  py-20">
    <div className="py-20 ">
                <div className="text-center text-3xl md:text-6xl px-10">
                   WelCome to The Profile of Full-Stack <b>Software</b> Developer
                  </div>
          <div className="flex justify-center font-bold pt-20  ">
            <button 
            onClick={downloadResume}
            className="border border-slate-200 bg-slate-600  p-2 w-36 rounded-[15px] ">
              Profile 
              <span className=' pl-2'>
              <LaunchIcon/>
              </span>
            </button>
           </div>
         </div>
          </div>
    </div>
}