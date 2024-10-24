"use client";
import React from "react";
import Typewriter from "typewriter-effect";  

{/* Blog Section */}
export default function Blog() {
  return (
    <section className="text-gray-400 bg-gray-900 body-font overflow-hidden">
      <div className="container px-2 py-4 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h2 className="text-sm text-blue-500 tracking-widest font-medium title-font mb-1">
            Dev.To Blog
          </h2>

          {/* Typewriter Effect */}
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-yellow-500">
            <Typewriter
              options={{
                strings: ["Explore My Latest Blogs - Insights, Tips & Tricks"],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base font-bold">
            Welcome to our blog hub! Dive into a wide range of articles covering
            everything from the latest trends in technology to in-depth tutorials
            and expert insights. Whether you're a beginner or a seasoned
            professional, our blogs offer valuable knowledge and practical tips to
            help you stay ahead in your field. Explore, learn, and grow with our
            curated content designed to inspire and educate.
          </p>
        </div>
        {/* Blog Cards */}
        <div className="flex flex-wrap bg-gray-900 m-2 px-2 py-4">
        <div className="lg:w-1/3 sm:w-1/2 p-2 transition-transform duration-300 ease-in-out transform hover:scale-110">
          <div className="flex relative">
            <img
              alt="Calculator"
              className="absolute inset-0 w-full h-full border p-2 border-yellow-600 object-cover object-center"
              src="https://www.shutterstock.com/image-photo/work-process-hands-office-workplace-260nw-568104433.jpg"
            />
            <div className="px-8 py-10 relative z-10 w-full border-4 border-sky-400 bg-teal-900 opacity-0 hover:opacity-100">
              <h2 className="tracking-widest text-2xl title-font font-black text-yellow-500 mb-1">
                Simple Calculator
              </h2>
              <h1 className="text-2xl title-font font-black text-sky-400 mb-3">
                Description:
              </h1>
              <p className="leading-relaxed">
                It performs basic arithmetic operations.Perfect for learning the
                basics of Javascript functions and user interface.
              </p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 sm:w-1/2 p-4 transition-transform duration-300 ease-in-out transform hover:scale-110">
          <div className="flex relative">
            <img
              alt="gallery"
              className="absolute inset-0 w-full h-full border p-2 border-yellow-600 object-cover object-center"
              src="https://content.instructables.com/FGE/F6F0/K1NVATVK/FGEF6F0K1NVATVK.jpg?auto=webp"
            />
            <div className="px-8 py-10 relative z-10 w-full border-4 border-sky-400 bg-teal-900  opacity-0 hover:opacity-100">
              <h2 className="tracking-widest text-2xl title-font font-black text-yellow-500 mb-1">
                Number guessing game
              </h2>
              <h1 className="title-font text-2xl font-black text-sky-400 mb-3">
                Description:
              </h1>
              <p className="leading-relaxed">
                It is a program where the user tries to guess a randomly generated
                number within a specified range.
              </p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 sm:w-1/2 p-4 transition-transform duration-300 ease-in-out transform hover:scale-110">
          <div className="flex relative">
            <img
              alt="gallery"
              className="absolute inset-0 w-full h-full border p-2 border-yellow-600 object-cover object-center"
              src="https://www.firstnationalatm.com/wp-content/uploads/2018/09/ATM_keypad_fb.jpg"
            />
            <div className="px-8 py-10 relative z-10 w-full border-4 border-sky-400 bg-teal-900 opacity-0 hover:opacity-100">
              <h2 className="tracking-widest text-2xl title-font font-black text-yellow-500 mb-1">
                ATM
              </h2>
              <h1 className="title-font text-lg font-black text-sky-400 mb-3">
                Description:
              </h1>
              <p className="leading-relaxed">
                A simulation of an ATM system that handles deposits,withdrawals
                and balance inquiries.Useful for understanding user input.
              </p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 sm:w-1/2 p-4 transition-transform duration-300 ease-in-out transform hover:scale-110">
          <div className="flex relative">
            <img
              alt="gallery"
              className="absolute inset-0 w-full h-full border p-2 border-yellow-600 object-cover object-center"
              src="https://fcsapi.com/blog/wp-content/uploads/2019/09/currency-converter-fcsapi.com_-750x410.jpg"
            />
            <div className="px-8 py-10 relative z-10 w-full border-4 border-sky-400 bg-teal-900 opacity-0 hover:opacity-100">
              <h2 className="tracking-widest text-2xl title-font font-black text-yellow-500 mb-1">
                Currency Converter
              </h2>
              <h1 className="title-font text-2xl font-black text-sky-400 mb-3">
                Description:
              </h1>
              <p className="leading-relaxed">
                It allows users to convert between different currencies using
                real-time exchange rates.Demonstrates API integration & data
                handling.
              </p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 sm:w-1/2 p-4 transition-transform duration-300 ease-in-out transform hover:scale-110">
          <div className="flex relative">
            <img
              alt="gallery"
              className="absolute inset-0 w-full h-full border p-2 border-yellow-600 object-cover object-center"
              src="https://imageio.forbes.com/specials-images/dam/imageserve/1092571024/960x0.jpg?height=474&width=711&fit=bounds"
            />
            <div className="px-8 py-10 relative z-10 w-full border-4 border-sky-400 bg-teal-900 opacity-0 hover:opacity-100">
              <h2 className="tracking-widest text-2xl title-font font-black text-yellow-500 mb-1">
                ToDO-List
              </h2>
              <h1 className="title-font text-2xl font-black text-sky-400 mb-3">
                Description:
              </h1>
              <p className="leading-relaxed">
                It is a tool used for organizing tasks & managing time
                efficiently.It allows users to add,edit,delete,update & view
                tasks.It help individuals to stay organized.
              </p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 sm:w-1/2 p-4 transition-transform duration-300 ease-in-out transform hover:scale-110">
          <div className="flex relative">
            <img
              alt="gallery"
              className="absolute inset-0 w-full h-full border p-2 border-yellow-600 object-cover object-center"
              src="https://1.bp.blogspot.com/-hfloaFTiMk4/YUKL67v3snI/AAAAAAAAAVk/_bwKSApWA_wsJCqUVT4Y1OBDfEQelY_FgCLcBGAsYHQ/s1280/make%2Blanding%2Bpage%2Bin%2B5minutes%2B%25284%2529.png"
            />
            <div className="px-8 py-10 relative z-10 w-full border-4 border-sky-400 bg-teal-900 opacity-0 hover:opacity-100">
              <h2 className="tracking-widest text-2xl title-font font-black text-yellow-500 mb-1">
                Word Counter
              </h2>
              <h1 className="title-font text-2xl font-black text-sky-400 mb-3">
                Description:
              </h1>
              <p className="leading-relaxed">
                It is a tool that can be used to count the number of words in a
                given text.It is used by writers,professionals,etc to ensure that
                their text meets specific word count requirements.
              </p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 sm:w-1/2 p-4 transition-transform duration-300 ease-in-out transform hover:scale-110">
          <div className="flex relative">
            <img
              alt="gallery"
              className="absolute inset-0 w-full h-full border p-2 border-yellow-600 object-cover object-center"
              src="https://learningmanagementsystem.design.blog/wp-content/uploads/2018/09/student-management-system-software.jpg"
            />
            <div className="px-8 py-10 relative z-10 w-full border-4 border-sky-400 bg-teal-900 opacity-0 hover:opacity-100">
              <h2 className="tracking-widest text-2xl title-font font-black text-yellow-500 mb-1">
                Student Management
              </h2>
              <h1 className="title-font text-2xl font-black text-sky-400 mb-3">
                Description:
              </h1>
              <p className="leading-relaxed">
                It is a software application designed to manage various
                administrative tasks in educational institutions.It helps in
                tracking student information,including enrollment,marks,fees,etc.
              </p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 sm:w-1/2 p-4 transition-transform duration-300 ease-in-out transform hover:scale-110">
          <div className="flex relative">
            <img
              alt="gallery"
              className="absolute inset-0 w-full h-full border p-2 border-yellow-600 object-cover object-center"
              src="https://adoric.com/blog/wp-content/uploads/2020/07/creating-countdown-timer.jpg"
            />
            <div className="px-8 py-10 relative z-10 w-full border-4 border-sky-400 bg-teal-900 opacity-0 hover:opacity-100">
              <h2 className="tracking-widest text-2xl title-font font-black text-yellow-500 mb-1">
                Count Down Timer
              </h2>
              <h1 className="title-font text-2xl font-black text-sky-400 mb-3">
                Description:
              </h1>
              <p className="leading-relaxed">
                It is a tool that can be used to set a timer & then display the
                remaining time.It helps in time management,keeping tasks on
                schedule & ensuring that activities are completed within a set
                timeframe.
              </p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 sm:w-1/2 p-4 transition-transform duration-300 ease-in-out transform hover:scale-110">
          <div className="flex relative">
            <img
              alt="gallery"
              className="absolute inset-0 w-full h-full border p-2 border-yellow-600 object-cover object-center"
              src="https://partheniumprojects.com/wp-content/uploads/2019/01/Online-quiz-2.png"
            />
            <div className="px-8 py-10 relative z-10 w-full border-4 border-sky-400 bg-teal-900 opacity-0 hover:opacity-100">
              <h2 className="tracking-widest text-2xl title-font font-black text-yellow-500 mb-1">
                Quiz System
              </h2>
              <h1 className="title-font text-2xl font-black text-sky-400 mb-3">
                Description:
              </h1>
              <p className="leading-relaxed">
                It is a game that allows players to answer questions & earn points
                based on their answers.It is a fun & engaging way to learn new
                skills.This helps the users to improve their skills.
              </p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 sm:w-1/2 p-4 transition-transform duration-300 ease-in-out transform hover:scale-110">
          <div className="flex relative">
            <img
              alt="gallery"
              className="absolute inset-0 w-full h-full border p-2 border-yellow-600 object-cover object-center"
              src="https://i.pcmag.com/imagery/roundups/03nD1clhMyJ4dMJUQti3LA1-2.fit_lim.size_850x490.v1671052085.jpg"
            />
            <div className="px-8 py-10 relative z-10 w-full border-4 border-sky-400 bg-teal-900 opacity-0 hover:opacity-100">
              <h2 className="tracking-widest text-2xl title-font font-black text-yellow-500 mb-1">
                Adventure Game
              </h2>
              <h1 className="title-font text-2xl font-black text-sky-400 mb-3">
                Description:
              </h1>
              <p className="leading-relaxed">
                A text-based adventure game where players make choices that affect
                the outcome.Great for practicing control flow and narrative
                development.
              </p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 sm:w-1/2 p-4 transition-transform duration-300 ease-in-out transform hover:scale-110">
          <div className="flex relative">
            <img
              alt="gallery"
              className="absolute inset-0 w-full h-full border p-2 border-yellow-600 object-cover object-center"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU_j0xl7vKyasRZRu6qlvjvBjHhLe8jjG9VA&s"
            />
            <div className="px-8 py-10 relative z-10 w-full border-4 border-sky-400 bg-teal-900 opacity-0 hover:opacity-100">
              <h2 className="tracking-widest text-2xl title-font font-black text-yellow-500 mb-1">
                OOP
              </h2>
              <h1 className="title-font text-2xl font-black text-w mb-3">
                Description:
              </h1>
              <p className="leading-relaxed">
                An object-oriented programming (OOP) personality test shows how
                your coding style might mirror your personal traits.It is a great
                way to improve your coding skills.
              </p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 sm:w-1/2 p-4 transition-transform duration-300 ease-in-out transform hover:scale-110">
          <div className="flex relative">
            <img
              alt="gallery"
              className="absolute inset-0 w-full h-full border p-2 border-yellow-600 object-cover object-center"
              src="https://i.ytimg.com/vi/gQlbH3qr1l4/maxresdefault.jpg"
            />
            <div className="px-8 py-10 relative z-10 w-full border-4 border-sky-400 bg-teal-900 opacity-0 hover:opacity-100">
              <h2 className="tracking-widest text-2xl title-font font-black text-yellow-500 mb-1">
                OOP-Bank
              </h2>
              <h1 className="title-font text-2xl font-black text-sky-400 mb-3">
                Description:
              </h1>
              <p className="leading-relaxed">
                It is designed to manage banking operations using the principles
                of OOP.It models real-world entities like
                accounts,transactions,etc.
              </p>
              </div>
         </div>
       </div>
     </div>

     {/*Button*/}

     <a href="https://github.com/rubaharoon">
       <button className="flex mx-auto mt-8 py-3 px-5 rounded-lg items-center hover:bg-yellow-500 hover:bg-opacity-100 focus:outline-none bg-black transition duration-300 glow-button">
         <img
           src="https://i.pinimg.com/474x/48/e0/73/48e07378e01dd719c060c1f2f2b5cb00.jpg"
           alt="logo"
           className="w-15 h-10"
         />
         <span className="ml-4 flex items-start flex-col leading-none">
           <span className="text-xs text-white mb-1">Git Hub</span>
           <span className="title-font font-bold text-white">
             @RubaHaroon
           </span>
         </span>
       </button>
     </a>
   </div>
 </section>
 
  );
}
    
    
    
    
    
