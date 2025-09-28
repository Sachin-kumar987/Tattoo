import React, { useState } from 'react';
// import data
import { interviewData } from '../data';
// import motion
import { motion } from 'framer-motion';
// import fadeIn animation
import { fadeIn } from '../variants';

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
              className="flex items-center gap-x-3 cursor-pointer hover:opacity-80 transition"
            >
              <div className="w-[60px] h-[60px] border border-white/40 rounded-full flex justify-center items-center">
                <div className="bg-white w-[40px] h-[40px] rounded-full flex justify-center items-center">
                  {btnIcon}
                </div>
              </div>
              <div className="uppercase font-primary tracking-wide text-white self-center">
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
            className="w-full max-w-4xl aspect-video bg-black"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              title="Interview Video"
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/-l1mqYQuNf8?autoplay=1`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </motion.section>
  );
};

export default Interview;
