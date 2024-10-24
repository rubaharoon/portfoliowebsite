import React from "react";
export default function Contact() {
    return (
        <section className="text-gray-400 bg-gray-900 body-font">
            <div className="container px-5 py-24 mx-auto">
                <title> Contact Us </title>
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="text-4xl font-black title-font mb-4 text-yellow-500 tracking-widest uppercase">Contact Us</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Fill the form below for any queries.</p>
                </div>
            </div>
            <section className="container px-2 py-2 mx-auto text-gray-400 bg-gray-900 body-font relative">
                <div className="absolute inset-0">
                <iframe 
    title="map" 
    width="100%" 
    height="100%" 
    frameBorder={0} 
    marginHeight={0} 
    marginWidth={0} 
    scrolling="no" 
    src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=Karachi+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed" 
    style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }} 
/>
                </div>
                <div className="container px-5 py-24 mx-auto flex flex-col lg:flex-row">
                    <div className="lg:w-1/3 md:w-1/2 bg-gray-900 shadow-md rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10">
                        <h2 className="text-sky-400 text-lg mb-1 font-medium title-font">Feedback</h2>
                        <p className="leading-relaxed mb-5">Please fill this form if you have any queries or complaints or if you have any message for us.</p>
                        <div className="relative mb-4">
                            <label htmlFor="email" className="leading-7 text-sm text-teal-400">Email</label>
                            <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                className="w-full bg-gray-800 rounded border border-gray-700 focus:border-yellow-600 focus:ring-2 focus:ring-red-800 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" 
                            />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="message" className="leading-7 text-sm text-emerald-400">Message</label>
                            <textarea 
                                id="message" 
                                name="message" 
                                className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-purple-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                            ></textarea>
                        </div>
                        <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-rose-600 rounded text-lg">Submit</button>
                        <p className="text-xs text-center text-gray-400 text-opacity-90 mt-3">Read our privacy policy for any issues.</p>
                    </div>
                </div>
            </section>
        </section>
    );
}
