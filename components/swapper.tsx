'use client'
import Image  from 'next/image';

import Autoplay from 'embla-carousel-autoplay'
import { ProjectData } from '@/lib/utility/atoms';



import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
// import Image, { StaticImageData } from 'next/image';

export const Swapper  = () => {


 

     return <div>
    
      <div className="flex justify-center">
                <Carousel className="w-full max-w-xs "
                  plugins={[Autoplay({delay : 3000})]}
                >
                <CarouselContent>
                  
                 {ProjectData.map((project, index) => (
                       
                       <CarouselItem key={index}>
                      
                          <div className="p-1 ">
                          <Card className= "bg-cover bg-center bg-no-repeat rounded-md" 
                           style={{
                            backgroundImage: `url(${project.imageUrl})`,
                          }}
                              >

                          <CardContent className="flex aspect-square items-center justify-center p-6 backdrop-blur-sm ">
                    
                          <span className="text-4xl text-gray-700 font-semibold">
                           {project.title}
                          </span>
                          </CardContent>
                        </Card>
                        </div>

                        </CarouselItem>
                    ))}   
          

               </CarouselContent>
             <CarouselPrevious />
            <CarouselNext />
           </Carousel>

       </div>
    </div>
  }
