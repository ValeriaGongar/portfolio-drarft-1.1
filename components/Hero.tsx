import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      ' hola, soy Valeria Gongar ',
      'me encanta el café',
      '<YaunMasCodificar/>',
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <picture>
        <img
          className="relative rounded-full h-32 w-32 mx-auto object-cover"
          src="/img/valeinsta.jpg"
          alt="portrait"
        />
      </picture>
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          Fullstack developer
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold scroll-px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
      </div>
    </div>
  );
}
