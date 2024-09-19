'use client'

import Image from "next/image";
import { Techno } from "@/components/utility/atoms";

export const TechStack = () => {
  

  return (
    <div>
      <div className="relative mx-auto max-w-7xl overflow-hidden py-4">
        <div className="flex overflow-hidden opacity-90">
          <div className="flex gap-2 px-4">

            <div className="animate-scroll flex w-[calc(250px * 20)] pl-8  ">
              {/* Repeat the tech stack twice for infinite scrolling */}
              {Techno.concat(Techno).map((tech, index) => (
                <div key={index} className="flex justify-center h-[100px] w-[250px] overflow-hidden opacity-50">
                  <div className="flex items-center justify-center h-full">
                    <Image 
                     src={tech.imageUrl}
                     alt={tech.name}
                     width={50}
                     height={50}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
