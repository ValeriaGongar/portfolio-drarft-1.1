import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

function About({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 1.5,
      }}
      className="flex flex-col relative h-screen text-center md:text-left  md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Acerca de mi
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src="/img/val03.jpeg"
        className="mb-0 md:mb-0 flex-shrink-0 w-56 h-66 rounded-full object-cover md:rounded-lg md:w-64 md-95 xl:w-[200px] xl:h-[300px]"
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Una {''}
          <span className="text-amber-200">breve</span>
          {''} reseña
        </h4>
        <p className="text-base">
          Generando contenido digital audiovisual desde hace diez años, he
          colaborado con agencias de publicidad, casas productoras , editoriales
          nacionales y colectivos de arte independiente. Diseñar y producir una
          experiencia centrada en el cliente ha sido parte de mi día a día y
          desde entonces no he parado de aprender nuevas habilidades en cada
          reto que se prensenta. En 2012 egresé de la Licenciatura en
          Comunicación Visual de la Universidad Intercontinental y me encuentro
          estudiando como Full Stack Developer en Henry Lat. Me he capacitado
          constantemente con cursos impartidos en Platzi y Udemy de desarrollo
          Web, programación orientada a objetos, el bootcamp de UX/UI así como
          FullStack Developer por UCamp
        </p>
      </div>
    </motion.div>
  );
}

export default About;
