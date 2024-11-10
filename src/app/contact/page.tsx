"use client";
import React from "react";
import { motion } from "framer-motion"; 
import Footer from "@/components/footer";
export default function Contact() {
  return (
    <>
    <section className="relative text-gray-400  body-font overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/videos/pattern.mp4" 
        autoPlay
        loop
        muted
      ></video>

      <div className="container px-5 py-24 mx-auto relative z-10 bg-opacity-80">
        <title>Contact Us</title>
        <motion.div
          className="flex flex-col text-center w-full mb-20"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-4xl font-black title-font mb-4 bg-gradient-to-r from-purple-800 to-pink-400 bg-clip-text text-transparent tracking-widest uppercase">
            Contact Us
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Fill the form below for any queries.
          </p>
        </motion.div>
      </div>

      <section className="container px-2 py-2 mx-auto text-gray-400 bg-gray-900 body-font relative">
        <div className="absolute inset-0">
          <iframe
            title="map"
            width="100%"
            height="100%"
            src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=Karachi+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
            style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
          />
        </div>

        <motion.div
          className="container px-5 py-24 mx-auto flex flex-col lg:flex-row relative z-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="lg:w-1/3 md:w-1/2 bg-gray-900 shadow-md rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-sky-400 text-lg mb-1 font-medium title-font">
              Feedback
            </h2>
            <p className="leading-relaxed mb-5">
              Please fill this form if you have any queries or complaints or if
              you have any message for us.
            </p>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-teal-400">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-gray-800 rounded border border-gray-700 focus:border-purple-600 focus:ring-2 focus:ring-red-800 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="message" className="leading-7 text-sm text-emerald-400">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-purple-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <motion.button
              className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-rose-600 rounded text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Submit
            </motion.button>
            <p className="text-xs text-center text-gray-400 text-opacity-90 mt-3">
              Read our privacy policy for any issues.
            </p>
          </motion.div>
        </motion.div>
      </section>
    </section>
<Footer />
</>
  
  );
}
