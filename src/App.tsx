import { useState } from 'react';
import FirstSlide from './components/Slides/FirstSlide/FirstSlide';
import cls from './App.module.css';
import Globals from './components/Globals/Globals';
import SecondSlide from './components/Slides/SecondSlide/SecondSlide';
import Slides from './components/Slides/Slides';

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
    setSlide(1);
  };
  const getBackgroundPosition = () => {
    if (slide === 0) {
      return '-82px 0';
    }
    if (slide === 1) {
      return '-1117px 0';
    }
    return '-2052px 0';
  };

  return (
    <div
      className={cls.bg}
      style={{ backgroundPosition: getBackgroundPosition() }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <Slides nextSlide={goToNextSlide} slide={slide} />
      <Globals homeBtn={goToFirstSlide} />
    </div>
  );
};

export default App;
