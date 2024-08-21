import React, { useEffect, useState } from 'react';
import cls from './ThirdSlide.module.css';
import ModalWindow from './ModalWindow/ModalWindow';

interface ThirdSlideProps {
  currentSlide: boolean;
}

const ThirdSlide = ({ currentSlide }: ThirdSlideProps) => {
  const [modalActive, setModalActive] = useState(false);

  useEffect(() => {
    if (!currentSlide) {
      setModalActive(false);
    }
  }, [modalActive]);

  return (
    <div className={cls.wrapper}>
      <ModalWindow isOpen={modalActive} onClose={() => setModalActive(false)} />
      <div className={cls.btn} onClick={() => setModalActive(true)} />
      <div className={cls.bottle} />
      <div className={cls.bubble1} />
      <div className={cls.bubble2} />
      <div className={cls.bubble3} />
      <div className={cls.bubble4} />
      <div className={cls.bubble5} />
      <div className={cls.bubble6} />
      <div className={cls.bubble7} />
      <div className={cls.bubble8} />
      <div className={cls.icon1} />
      <div className={cls.txtBack1}>
        <div className={cls.innerTxt1}>
          <p>
            Ehicula ipsum a arcu cursus vitae. Eu non diam phasellus vestibulum
            lorem sed risus ultricies
          </p>
        </div>
      </div>
      <div className={cls.icon2} />
      <div className={cls.txtBack2}>
        <div className={cls.innerTxt2}>
          <p>A arcu cursus vitae</p>
        </div>
      </div>
      <div className={cls.titleSmall}>КЛЮЧЕВОЕ СООБЩЕНИЕ</div>
      <div className={cls.titleBig}>
        BREND<span className={cls.xy}>XY</span>
      </div>
    </div>
  );
};

export default ThirdSlide;
