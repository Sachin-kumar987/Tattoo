import React, { useState } from 'react';
// import data
import { interviewData } from '../data';
// import motion
import { motion } from 'framer-motion';
// import fadeIn animation
import { fadeIn } from '../variants';
// import video
import videoSrc from '../img/interview/video.mp4';

const Interview = () => {
  // destructure interview data
  const { title, btnText, btnIcon } = interviewData;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.section id="interview"
      variants={fadeIn('up')}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.1 }}
      className="bg-dark section bg-interview bg-no-repeat bg-cover bg-center lg:h-[812px] relative"
    >
      <div className="container mx-auto h-full flex justify-center items-center text-center">
        <div className="max-w-[700px] text-white">
          {/* Title */}
          <motion.h3
            variants={fadeIn('down')}
            className="text-[30px] lg:text-[50px] leading-[1.3] font-semibold"
          >
            {title}
          </motion.h3>

          {/* Button below title aligned left */}
          <motion.div
            variants={fadeIn('down')}
            className="mt-8 flex justify-start"
          >
            <div
              onClick={() => setIsOpen(true)}
              className="flex items-center gap-x-4 cursor-pointer group hover:scale-105 transition-all duration-300"
            >
              <div className="w-[70px] h-[70px] border-2 border-white/50 rounded-full flex justify-center items-center group-hover:border-white transition-colors duration-300">
                <div className="bg-white w-[50px] h-[50px] rounded-full flex justify-center items-center group-hover:bg-gray-100 transition-colors duration-300">
                  <div className="text-black text-lg ml-1">
                    {btnIcon}
                  </div>
                </div>
              </div>
              <div className="uppercase font-primary tracking-wider text-white text-lg font-semibold group-hover:text-gray-200 transition-colors duration-300">
                {btnText}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Modal video (custom) */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[1000] bg-black/80 flex justify-center items-center p-4"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="w-full max-w-4xl aspect-video bg-black relative"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              className="w-full h-full object-cover"
              controls
              autoPlay
              loop
              muted
            >
              <source src={videoSrc} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-white text-2xl hover:text-gray-300 transition-colors z-10"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </motion.section>
  );
};

export default Interview;
