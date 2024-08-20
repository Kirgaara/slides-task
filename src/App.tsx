import { useState } from 'react';
import FirstSlide from './components/FirstSlide/FirstSlide';
import cls from './App.module.css';
import Globals from './components/Globals/Globals';

const App = () => {
  const [slide, setSlide] = useState(0);
  const totalSlide = 3;
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isSwiping, setIsSwiping] = useState(false);

  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.type === 'touchstart') {
      setTouchStart(e.targetTouches[0].clientX);
    }
    setIsSwiping(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isSwiping) return;
    if (e.type === 'touchmove') {
      setTouchEnd(e.targetTouches[0].clientX);
    }
  };

  const handleTouchEnd = () => {
    if (!isSwiping) return;
    if (touchStart - touchEnd > 75) {
      if (slide < totalSlide - 1) {
        setSlide(slide + 1);
      }
    } else if (touchStart - touchEnd < -75) {
      if (slide > 0) {
        setSlide(slide - 1);
      }
    }
    setIsSwiping(false);
  };

  const goToFirstSlide = () => {
    setSlide(0);
  };

  const goToNextSlide = () => {
    if (slide < totalSlide - 1) {
      setSlide(slide + 1);
    }
  };
  const getBackgroundPosition = () => {
    if (slide === 0) {
      return '0 0';
    }
    if (slide === 1) {
      return '-1076px 0';
    }
    return '-2011px 0';
  };

  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className={cls.bg}
        style={{ backgroundPosition: getBackgroundPosition() }}
      />
      <FirstSlide nextSlide={goToNextSlide} />
      <Globals homeBtn={goToFirstSlide} />
    </div>
  );
};

export default App;
