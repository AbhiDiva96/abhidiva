
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export const Social = () => {

    return <div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4  p-4  m-8 md:mx-60">
            <div className="flex justify-center border-4 border-blue-500 p-10 sm:p-20 bg-slate-900 hover:bg-blue-800  rounded  cursor-pointer">
            <div className="pr-2">
                <LinkedInIcon fontSize='large'/>
            </div>
               <div className='text-2xl font-semibold'>
                LinkedIn
                </div>
            </div>
            <div className="flex justify-center border-4 border-black-500 p-10 sm:p-20 bg-slate-900 hover:bg-slate-800    rounded cursor-pointer">
                <div className="pr-2">
                    <GitHubIcon fontSize='large'/>
                </div>
                 <div className='text-2xl font-semibold'>
                    Github
                </div>
            </div>
            {/* <div className="flex justify-center border-4 border-green-500 p-10 sm:p-20 bg-slate-900 hover:bg-green-800   rounded cursor-pointer">
            <div className="pr-2">GFG</div>
                <p>GeeksforGeeks</p>
            </div>
            <div className="flex justify-center border-4 border-orange-500 p-10 sm:p-20 bg-slate-900 hover:bg-orange-800  rounded cursor-pointer">
              <div className="pr-2">LC</div>
                <p>LeetCode</p>
             </div> */}


         </div>
    </div>
}