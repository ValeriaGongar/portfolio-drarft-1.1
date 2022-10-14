import React from 'react';
import { motion } from 'framer-motion';
import Tech from './Tech';

type Props = {};

function Skills({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="min-h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[1280px] xl:px-10 justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>
      <div className="grid grid-cols-3 gap-2">
        <Tech />
        <Tech />
        <Tech />
        <Tech />
        <Tech />
        <Tech />
        <Tech />
        <Tech />
        <Tech />
      </div>
    </motion.div>
  );
}

export default Skills;
