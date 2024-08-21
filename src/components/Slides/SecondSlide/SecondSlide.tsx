import React from 'react';
import cls from './SecondSlide.module.css';
import Scroll from './Scroll/Scroll';

interface SecondSlideProps {
  currentSlide?: boolean;
}

const SecondSlide = ({ currentSlide }: SecondSlideProps) => {
  let bgClasses = cls.secondSlideBg;
  if (currentSlide) bgClasses += ' ' + cls.onSlide;
  return (
    <>
      <div className={bgClasses} />
      <Scroll />
    </>
  );
};

export default SecondSlide;
