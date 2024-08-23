import { useState } from 'react';
import cls from './App.module.css';
import Globals from './components/Globals/Globals';
import Slides from './components/Slides/Slides';

const App = () => {
  const [slide, setSlide] = useState(0);
  const totalSlide = 3;
  const [touchStart, setTouchStart] = useState(0);
  const [isSwiping, setIsSwiping] = useState(false);
  const [bgPosition, setBgPosition] = useState(-36);

  let touchEndNew = 0;

  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.type === 'touchstart') {
      setTouchStart(e.targetTouches[0].clientX);
    }
    setIsSwiping(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isSwiping) return;
    if (e.type === 'touchmove') {
      touchEndNew = e.targetTouches[0].clientX;
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!isSwiping || !touchEndNew) return;
    // const touchEndNew = e.touches[0].clientX;
    // console.log(e.target);
    if (touchStart - touchEndNew > 75) {
      if (slide < totalSlide - 1) {
        setSlide(slide + 1);
        setBgPosition(bgPosition - 1010);
      }
    } else if (touchStart - touchEndNew < -75) {
      if (slide > 0) {
        setSlide(slide - 1);
        setBgPosition(bgPosition + 1010);
      }
    }
    setIsSwiping(false);
  };

  const goToFirstSlide = () => {
    setSlide(0);
    setBgPosition(-36);
  };

  const goToNextSlide = () => {
    setSlide(1);
    setBgPosition(-1046);
  };

  return (
    <div
      className={cls.bg}
      style={{ backgroundPosition: bgPosition + 'px 0' }}
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
