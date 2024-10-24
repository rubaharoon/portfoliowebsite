"use client";
import React from "react";
import Typewriter from "typewriter-effect";

// Blog Section
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
            and expert insights. Whether you are a beginner or a seasoned
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
                  It performs basic arithmetic operations. Perfect for learning the
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
              <div className="px-8 py-10 relative z-10 w-full border-4 border-sky-400 bg-teal-900 opacity-0 hover:opacity-100">
                <h2 className="tracking-widest text-2xl title-font font-black text-yellow-500 mb-1">
                  Number Guessing Game
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
                  A simulation of an ATM system that handles deposits, withdrawals,
                  and balance inquiries. Useful for understanding user input.
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
                  real-time exchange rates. Demonstrates API integration & data
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
                  To-Do List
                </h2>
                <h1 className="title-font text-2xl font-black text-sky-400 mb-3">
                  Description:
                </h1>
                <p className="leading-relaxed">
                  It is a tool used for organizing tasks & managing time
                  efficiently. It allows users to add, edit, delete, update & view
                  tasks. It helps individuals to stay organized.
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
                  given text. It is used by writers, professionals, etc., to ensure
                  they meet their required word count.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
