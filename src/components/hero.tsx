"use client";
import React from "react";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import Image from "next/image";
export default function Hero() {
  return (
    <section className="text-gray-400 body-font relative overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/videos/pattern.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Content*/}
      <div className="container mx-auto flex flex-col px-5 py-10 justify-center items-center relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center w-full md:w-2/3 lg:space-x-10">
          {/* Text Content*/}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 1 }}
            className="w-full lg:w-1/2 text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-4xl font-bold"
            >
              Hello, I am <span className="bg-gradient-to-r from-purple-400 to-slate-500 bg-clip-text text-transparent">Ruba Haroon</span>
            </motion.h1>
            {/* Typewriter Effect */}
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
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

            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              className=" sm:text-base text-sm mb-8 leading-relaxed"
            >
              I am a passionate learner who is always seeking new challenges and
              learning new things in order to stay ahead in the rapidly evolving
              fields such as Freelancing, Blogging, and Accounting. As a
              Freelancer, I specialize in video editing. As an Accountant, I
              bring precision and analytical thinking to manage financial tasks
              effectively. I also enjoy sharing insights & experiences through
              my blogs, where I write about different topics. I am always eager
              to take on new challenges that push me to grow.
            </motion.p>
            <div className="flex space-x-4">
              <a
                href="/images/rubaharoon.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-500 transition"
                >
                  Download CV
                </motion.button>
              </a>
              <a href="/blogs">
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="text-white bg-gray-800 px-4 py-2 rounded-lg hover:bg-gray-700 transition"
              >
                View my Projects
              </motion.button>
              </a>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-8 lg:mt-0 lg:ml-10"
          >
            <Image
              src="/images/hero.jpg"
              alt="profile"
              width={300}
              height={300}
              className="rounded-lg drop-shadow-[0_0_20px_rgba(169,169,169,0.8)] ring-2 ring-purple-500  shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}


  
