import React from "react";

import { Navbar } from "@/components/navbar";
import { Social } from "@/components/social";
import { Intro } from "@/components/intro";
import { Footer } from "@/components/footer";
import { TechStack } from "@/components/techStack";
import { Tech } from "@/components/services/tech";
import { Projects } from "@/components/services/projects";

export default function Home() {
  return  (
  <div className="absolute inset-0 h-fit  w-full bg-black   text-white bg-[linear-gradient(to_right,#858282,transparent_1px),linear-gradient(to_bottom,#858282,transparent_1px)] bg-[size:40px_40px]  ">
     <div className="absolute  pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,white)]"></div>

        <Navbar/>
         <Intro />    
         <TechStack />
         <Tech />
          <Projects/>
          <Footer />

    </div>



  );
  
}












