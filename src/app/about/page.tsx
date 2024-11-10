"use client";
import { motion } from "framer-motion";
import Footer from "@/components/footer";
const AboutMe = () => {
  return (
    <>
    <div className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden text-white bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Background Video */}
      <video 
        autoPlay 
        loop 
        muted 
        className="absolute inset-0 w-full h-full object-cover opacity-80"
      >
        <source src="/videos/pattern.mp4" type="video/mp4" />
      </video>

      {/* Content Section */}
      <motion.div
        className="relative z-10 bg-gradient-to-r from-purple-900 to-gray-600 bg-opacity-80 p-8 rounded-lg shadow-lg max-w-3xl w-full mx-4 md:mx-auto flex flex-col items-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {/* Profile Picture */}
        <motion.img
          src="/images/hero.jpg"
          alt="Profile Picture"
          className="w-32 h-32 rounded-full object-cover border-4 border-purple-500 mb-4 transition transform duration-500 ease-in-out"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        />

        <h1 className="text-4xl font-bold mb-4 text-center bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">About Me</h1>
        <p className="mb-6 text-center max-w-2xl">
          Hello, this is Ruba Haroon here. I am a passionate learner who is always seeking new challenges and
          learning new things in order to stay ahead in the rapidly evolving
          fields such as Freelancing, Blogging, and Accounting. As a
          Freelancer, I specialize in video editing. As an Accountant, I
          bring precision and analytical thinking to manage financial tasks
          effectively. I also enjoy sharing insights & experiences through
          my blogs, where I write about different topics. I am always eager
          to take on new challenges that push me to grow.
        </p>

        {/* Info Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center w-full">
          {[
            { label: "Name", value: "Ruba Haroon" },
            { label: "Phone", value: "03323577700" },
            { label: "Education", value: "Bachelors of Business Administration" },
            { label: "E-mail", value: "rubaharoon80@gmail.com" }
          ].map((item, index) => (
            <motion.div
              key={index}
              className="border-2 border-purple-500 p-4 rounded-lg bg-gray-700 bg-opacity-80 hover:bg-gray-700 transition-colors duration-300 shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <p className="font-semibold text-purple-500">{item.label}</p>
              <p className="text-gray-100">{item.value}</p>
            </motion.div>
          ))}
        </div>

          {/* Education Section */}
          <h2 className="text-3xl font-bold text-white mb-4 mt-10 text-left">My Education</h2>
        <div className="space-y-4 w-full">
          {[
            {
              title: "Certified Cloud and Generative AI Software Engineering",
              institution: "Govt. Sindh IT Initiative (Governor House Karachi)",
              year: "2023 - Present",
            },
            {
              title: "Bachelor of Business Administration",
              institution: "Jinnah University for Women",
              year: "2017-2020",
            },
            {
              title: "Intermediate in Computer Science",
              institution: "Sir Syed Government Girls College",
              year: "2015 - 2017",
            },
            {
              title: "Matriculation",
              institution: "Little Folks School",
              year: "2013 - 2014",
            },
          ].map((edu, index) => (
            <motion.div
              key={index}
              className="border-2 border-purple-600 p-4 rounded-lg bg-gray-800 bg-opacity-80 shadow-md"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 * index, duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-xl font-semibold text-purple-500">{edu.title}</h3>
              <p className="text-white">{edu.institution}</p>
              <p className="text-gray-500">{edu.year}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>

    <Footer />
    </>
    
  );
};
export default AboutMe;