"use client";
import React from "react";
import Typewriter from "typewriter-effect";

{/* Hero*/}
export default function Hero() {
  return (
    <section className="text-gray-400 bg-gray-900 body-font">
      <div className="container mx-auto flex flex-col px-5 py-10 justify-center items-center">
        {/* Image */}
        <img
          className="lg:w-2/6 md:w-3/6 sm:w-4/6 w-5/6 mb-10 object-cover object-center rounded relative p-1 bg-gradient-to-r from-yellow-500 to-sky-500"
          alt="hero"
          src="https://sharedp.com/wp-content/uploads/2024/06/cute-cartoon-girl-pic-wallpaper-960x1024.jpg"
        />

        {/* Hero Content */}
        <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
          {/* Typewriter Effect */}
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-yellow-500">
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
          </h1>
          <p className="text-white sm:text-base text-sm mb-8 leading-relaxed">
            I am Ruba Haroon, a passionate learner who is always seeking new
            challenges and learning new things in order to stay ahead in the
            rapidly evolving fields such as Freelancing, Blogging, and
            Accounting. As a Freelancer, I specialize in video editing. As
            an Accountant, I bring precision and analytical thinking to
            manage financial tasks effectively. I also enjoy sharing
            insights & experiences through my blogs, where I write about
            different topics. I am always eager to take on new challenges
            that push me to grow.
          </p>

          {/* Input and Subscribe Button Container */}
          <div className="flex flex-col sm:flex-row w-full justify-center items-end">
            <div className="relative mr-4 w-full sm:w-2/4">
              <label
                htmlFor="hero-field"
                className="leading-7 text-sm text-blue-400"
              >
                News Letter
              </label>
              <input
                type="text"
                id="hero-field"
                name="hero-field"
                className="w-full bg-gray-800 rounded border bg-opacity-40 border-gray-700 focus:ring-2 focus:ring-red-900 focus:bg-transparent focus:border-red-400 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>

            {/* Subscribe Button */}
            <a href="https://www.youtube.com/@rubaharoon331">
              <button
                type="button"
                className="mt-4 sm:mt-0 text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-bold rounded-lg text-lg px-5 py-2.5 text-center"
              >
                Subscribe
              </button>
            </a>
          </div>

          <br />

          {/* Social Media Buttons */}
          <div className="flex flex-wrap justify-center space-x-4 text-gray-300 mt-8">
            <a href="https://github.com/rubaharoon">
              <button className="bg-yellow-600 inline-flex py-3 px-5 rounded-lg items-center hover:bg-purple-700 hover:text-white focus:outline-none">
                <img
                  src="https://i.pinimg.com/474x/48/e0/73/48e07378e01dd719c060c1f2f2b5cb00.jpg"
                  alt="github"
                  className="w-10 h-10"
                />
                <span className="ml-4 flex items-start flex-col leading-none">
                  <span className="text-xs text-white mb-1">Connect with</span>
                  <span className="text-white title-font font-bold">Git Hub</span>
                </span>
              </button>
            </a>

            <a href="https://www.linkedin.com/in/ruba-haroon-67636b180/">
              <button className="bg-blue-900 inline-flex py-3 px-5 rounded-lg items-center hover:bg-sky-700 hover:text-white focus:outline-none">
                <img
                  src="https://image.similarpng.com/thumbnail/2020/05/Popular-social-media-Linkedin-logo-transparent-PNG.png"
                  alt="linkedin"
                  className="w-10 h-10"
                />
                <span className="ml-4 flex items-start flex-col leading-none">
                  <span className="text-xs text-white mb-1">Connect with</span>
                  <span className="text-white title-font font-bold">Linked In</span>
                </span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
