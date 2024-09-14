'use client'

import LanguageIcon from '@mui/icons-material/Language';
import GitHubIcon from '@mui/icons-material/GitHub';

import { ProjectData } from '@/lib/utility/atoms';
import { useRouter } from 'next/navigation';

export const Projects = () => {
     
 const router = useRouter();

    return <div>

        <div className="flex justify-center py-10 text-3xl">
                    projects
        </div>

        <div className="flex justify-center backdrop-sepia ">
            <div className="flex  px-10">
                    
                <div className="flex grid grid-cols-1 md:grid-cols-3 gap-4">

                {ProjectData.map((projectshow, index) => (
                    <div key={index} className="relative w-80 h-48 border border-zinc-600 bg-zinc-900 rounded px-8 ">
                        <div className="flex justify-center text-xl font-bold py-4">
                            {projectshow.title}
                        </div>
                        <div className="flex justify-center text-sm text-zinc-500 tracking-wide px-4">
                            {projectshow.details}
                        </div>

                        {/* Button Section at the bottom */}
                        <div className="absolute bottom-2 left-4 right-4 flex justify-between">
                            <button onClick={() => window.open(projectshow.link, '_blank')}>
                                <LanguageIcon fontSize='large' />
                            </button>
                            <button onClick={() => window.open(projectshow.githubUrl, '_blank')}>
                                <GitHubIcon fontSize='large' />
                            </button>
                        </div>
                    </div>
))}

                  </div>
            </div>
        </div>
    </div>
}