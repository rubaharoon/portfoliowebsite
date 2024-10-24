"use client";
import React from "react";
import Image from 'next/image';
import Typewriter from "typewriter-effect";

export default function About() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 p-6">
    <div className="flex flex-col md:flex-row items-center md:items-start max-w-4xl mx-auto space-y-8 md:space-y-0 md:space-x-8">
      
      {/* Hexagonal Image with Border */}
      <div className="relative w-40 h-40 md:w-60 md:h-60 hexagon-border">
        <div className="relative w-full h-full hexagon bg-transparent">
          <Image
            src="/images/profile.jpg"  
            alt="Profile Picture"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </div>
      
                 
        
        {/* Text on the Right */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-yellow-500">Me</span>
          </h1>
{/* Typewriter Effect */}
<h2 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-yellow-500">
            <Typewriter
              options={{
                strings: [
                  "Freelancer",
                  "Blogger",
                  "Accountant",
                  "Learner, seeking new opportunities",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h2>
          
          <p className="text-gray-400 mb-6 max-w-md">
          I am Ruba Haroon, a passionate learner who is always seeking new
          challenges and learning new things in order to stay ahead in the
          rapidly evolving fields such as FreeLancing, Blogging and Accounting.
          As a FreeLancer, I specialize in video editing. As an Accountant, I
          bring precision and analytical thinking to manage financial tasks
          effectively. I also enjoy sharing insights & experiences through my
          blogs, where I write about different topics. I am always eager to take
          on new challenges that push me to grow.
          </p>

          {/* Button */}
           <a
          href="/images/rubaharoon.pdf"
           className="bg-yellow-500 hover:bg-yellow-400 text-white font-bold py-2 px-4 border-b-4 border-yellow-700 hover:border-yellow-500 rounded transition duration-300 glow-button">
  

  Download Resume
</a>
         

        </div>
      </div>
    </div>
  );
}

   
   
        