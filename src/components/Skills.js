import React, { useState, useEffect } from 'react';

// useInView hook
import { useInView } from 'react-intersection-observer';

// react circular
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

// react circular styles
import 'react-circular-progressbar/dist/styles.css';
// import motion
import { motion } from 'framer-motion';
// import fadeIn
import { fadeIn } from '../variants';

const Skills = () => {
  // destructure useInView hook
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  // full body tattoo state
  const [fullBody, setFullBody] = useState(0);

   // safety piercing state
  const [piercing, setPiercing] = useState(0);

  // full color tattoo state
  const [fullColor, setFullColor] = useState(0);

 // temporary tattoo state
  const [temporary, setTemporary] = useState(0);

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        if (fullBody < 90) {
          setFullBody(fullBody + 1);
        }
          if (piercing < 80) {
          setPiercing(piercing + 1);
        }
         if (fullColor < 75) {
          setFullColor(fullColor + 1);
        }
          if (temporary < 95) {
          setTemporary(temporary + 1);
        }
      }, 50);

      return () => clearTimeout(timer); // cleanup
    } else {
      setFullBody(0);
      setPiercing(0);
      setFullColor(0);
      setTemporary(0);
    }
  }, [inView, fullBody, piercing, fullColor, temporary]);

  return ( 
    <motion.section 
    id='articles'
    ref={ref} 
    className='section font-primary'
    variants={fadeIn('up')}
    initial='hidden'
    whileInView={'show'}
    viewport={{once: false, amount: 0.1}}
    
    >
      <div className='container mx-auto'>
        <div className=' flex flex-col xl:flex-row justify-between items-center gap-y-12'>
          {/* circular item */}
          <div className='w-[150px] lg:w-[275px] flex flex-col items-center gap-y-6'>
            <CircularProgressbar 
              strokeWidth={5} 
              value={fullBody} 
              text={`${fullBody}%`}
              styles={buildStyles({
                pathColor: "#111111",
                trailColor: "#eeeeee",
                textColor: "#111111",
                textSize: "24px",
              })}
            />
            {/* text */}
            <div className='uppercase font-light tracking-[1.2px] text-center'>
              Full Body Tattoo
            </div>
          </div>
        
         <div>
          {/* circular item */}
          <div className='w-[150px] lg:w-[275px] flex flex-col items-center gap-y-6'>
            <CircularProgressbar 
              strokeWidth={5} 
              value={piercing} 
              text={`${piercing}%`}
                styles={buildStyles({
                pathColor: "#111111",
                trailColor: "#eeeeee",
                textColor: "#111111",
                textSize: "24px",
              })}
            />
            {/* text */}
            <div className='uppercase font-light tracking-[1.2px] text-center'>
            Safety Pier
            </div>
          </div>
        </div>
         <div>
          {/* circular item */}
          <div className='w-[150px] lg:w-[275px] flex flex-col items-center gap-y-6'>
            <CircularProgressbar 
              strokeWidth={5} 
              value={fullColor} 
              text={`${fullColor}%`}
                styles={buildStyles({
                pathColor: "#111111",
                trailColor: "#eeeeee",
                textColor: "#111111",
                textSize: "24px",
              })}
            />
            {/* text */}
            <div className='uppercase font-light tracking-[1.2px] text-center'>
              Full Color Tattoo
            </div>
          </div>
        </div>
         <div>
          {/* circular item */}
          <div className='w-[150px] lg:w-[275px] flex flex-col items-center gap-y-6'>
            <CircularProgressbar 
              strokeWidth={5} 
              value={temporary} 
              text={`${temporary}%`}
              styles={buildStyles({
                pathColor: "#111111",
                trailColor: "#eeeeee",
                textColor: "#111111",
                textSize: "24px",
              })}
            />
            {/* text */}
            <div className='uppercase font-light tracking-[1.2px] text-center'>
              Temporary Tattoo
            </div>
          </div>
        </div>
        </div>

      </div>
    </motion.section>
  );
};

export default Skills;
