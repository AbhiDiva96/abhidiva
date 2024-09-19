'use client';

import LanguageIcon from '@mui/icons-material/Language';
import GitHubIcon from '@mui/icons-material/GitHub';

import { ProjectData } from '@/components/utility/atoms';
import { useRouter } from 'next/navigation';

export const Projects = () => {

    const router = useRouter();

    return (
        <div>
            <div className="flex justify-center py-10 text-3xl">
                Projects
            </div>

            <div className="flex justify-center backdrop-sepia">
                <div className="flex">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 max-w-screen-lg mx-auto">
                        {ProjectData.map((projectshow, index) => (
                            <div key={index} className="relative w-full h-64 border border-zinc-600 bg-zinc-900 rounded p-6">
                                <div className="flex justify-center text-xl font-bold py-4">
                                    {projectshow.title}
                                </div>
                                <div className="flex justify-center text-sm text-zinc-500 tracking-wide px-4">
                                    {projectshow.details}
                                </div>

                                {/* Button Section at the bottom */}
                                <div className="absolute bottom-4 left-4 right-4 flex justify-between">
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
    );
};

