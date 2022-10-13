import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        className="w-22 h-22 rounded-full xl:w-[100px] xl:h-[100px] object-cover object-center"
        src="/img/flechas-circulares.gif"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">CEO of MOTvS</h4>
        <p className="font-bold text-2xl mt-1">MOTvS</p>
        <div className="flex space-x-2 my-2">
          <img className="h-7 w-7 rounded-full" src="/img/react.svg" />
          <img className="h-7 w-7 rounded-full" src="/img/ethernet-solid.svg" />
          <img className="h-7 w-7 rounded-full" src="/img/square-js.svg" />
          {/* tecnologia */}
          {/* tecnologia */}
          {/* tecnologia */}
        </div>
        <p className="uppercase py-5 text-gray-300"> Started work ... -Ended</p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>caracteristicas</li>
          <li>caracteristicas</li>
          <li>caracteristicas</li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
