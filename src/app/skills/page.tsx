"use client";
import Typewriter from "typewriter-effect";
import { FaHtml5, FaCss3Alt, FaGithub } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { SiTypescript, SiNextdotjs, SiVisualstudiocode } from "react-icons/si";

export default function Skills() {
  return (
    <section className="text-gray-400 body-font bg-gray-900">
      <div className="container px-5 py-8 mx-auto">
        <div className="flex flex-wrap w-full mb-20">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-4xl text-2xl font-medium title-font mb-2 text-yellow-600">
              Unlocking My Skill Sets Hidden Talents!
            </h1>
            <div className="h-1 w-20 rounded"></div>
          </div>
          <p className="lg:w-1/2 w-full leading-relaxed text-sm text-white text-opacity-90">
            Highlights the range of skills and expertise, emphasizing the impact & value brought to my projects.
          </p>
        </div>

        {/* Typewriter Effect */}
        <div className="flex flex-wrap w-full">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
            <Typewriter
              options={{
                strings: ["Programming Skills"],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>

          {/* Professional Skills */}
          <section>
            <div className="container px-2 py-8 mx-auto flex flex-wrap justify-center items-center space-y-6 sm:space-x-6 sm:space-y-0 text-2xl">
              {/* Icons */}
              <div className="flex flex-col items-center bg-white border-2 border-yellow-500 p-4 rounded transition-transform duration-300 ease-in-out transform hover:scale-110 active:scale-110 focus:scale-110">
                <FaHtml5 className="text-blue-800 text-6xl" aria-label="HTML5 icon" />
                <span className="mt-2 text-lg text-black">HTML</span>
              </div>

              <div className="flex flex-col items-center bg-white border-2 border-yellow-500 p-4 rounded transition-transform duration-300 ease-in-out transform hover:scale-110 active:scale-110 focus:scale-110">
                <TbBrandJavascript className="text-orange-600 text-6xl" aria-label="JavaScript icon" />
                <span className="mt-2 text-lg text-black">JS</span>
              </div>

              <div className="flex flex-col items-center bg-white border-2 border-yellow-500 p-4 rounded transition-transform duration-300 ease-in-out transform hover:scale-110 active:scale-110 focus:scale-110">
                <FaCss3Alt className="text-sky-600 text-6xl" aria-label="CSS3 icon" />
                <span className="mt-2 text-lg text-black">CSS</span>
              </div>

              <div className="flex flex-col items-center bg-white border-2 border-yellow-500 p-4 rounded transition-transform duration-300 ease-in-out transform hover:scale-110 active:scale-110 focus:scale-110">
                <SiTypescript className="text-blue-900 text-6xl" aria-label="TypeScript icon" />
                <span className="mt-2 text-lg text-black">TS</span>
              </div>
            </div>
          </section>
        </div>

        {/* Development Tools and Frameworks */}
        <div className="container px-2 py-8 mx-auto flex flex-wrap justify-center items-center space-y-6 sm:space-x-6 sm:space-y-0 text-2xl">
          {/* Icons */}
          <div className="flex flex-col items-center bg-white border-2 border-yellow-500 p-4 rounded transition-transform duration-300 ease-in-out transform hover:scale-110 active:scale-110 focus:scale-110">
            <SiVisualstudiocode className="text-sky-600 text-6xl" aria-label="Visual Studio Code icon" />
            <span className="mt-2 text-lg text-black">Visual Studio Code</span>
          </div>

          <div className="flex flex-col items-center bg-white border-2 border-yellow-500 p-4 rounded transition-transform duration-300 ease-in-out transform hover:scale-110 active:scale-110 focus:scale-110">
            <FaGithub className="text-black text-6xl" aria-label="GitHub icon" />
            <span className="mt-2 text-lg text-black">GitHub</span>
          </div>

          <div className="flex flex-col items-center bg-white border-2 border-yellow-500 p-4 rounded transition-transform duration-300 ease-in-out transform hover:scale-110 active:scale-110 focus:scale-110">
            <SiNextdotjs className="text-black text-6xl" aria-label="Next.js icon" />
            <span className="mt-2 text-lg text-black">Next.js</span>
          </div>

          {/* Typewriter Effect for Tools */}
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            <Typewriter
              options={{
                strings: ["Development Tools And Frameworks"],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
        </div>
      </div>
    </section>
  );
}
