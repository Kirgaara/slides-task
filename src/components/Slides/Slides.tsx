import React from 'react';
import FirstSlide from './FirstSlide/FirstSlide';
import SecondSlide from './SecondSlide/SecondSlide';
import cls from './Slides.module.css';

interface SlidesProps {
  nextSlide: () => void;
  slide: number;
}

const Slides = ({ nextSlide, slide }: SlidesProps) => {
  return (
    <div
      className={cls.slider}
      style={{ transform: `translateX(-${slide * 1024}px)` }}
    >
      <FirstSlide nextSlide={nextSlide} />
      <SecondSlide currentSlide={slide === 1 ? true : false} />
    </div>
  );
};

export default Slides;
