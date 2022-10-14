import React from 'react';
import { motion } from 'framer-motion';

type Props = {
  directionLeft?: boolean;
};

function Tech({ directionLeft }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{
          duration: 1,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        src="/img/icons8-javascript-40.png"
        className="rounded-full object-cover w-24 h-24 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
      />
      <div
        className="absolute 
      opacity-0 group-hover:opacity-80 
      transition duration-300 ease-in-out group-hover:bg-white
      h-16 w-16 xl:h-30 xl:w-30
       rounded-full z-0"
      >
        <div className="flex items-center justify-center h-full">
          <p></p>
        </div>
      </div>
    </div>
  );
}

export default Tech;
