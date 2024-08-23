import React, { useMemo, useState } from 'react';
import cls from './ModalWindow.module.css';

interface ModalWindowProps {
  isOpen?: boolean;
  onClose?: () => void;
}

const ANIMATION_DELAY = 300;

const ModalWindow = (props: ModalWindowProps) => {
  const { isOpen, onClose } = props;

  const [page, setPage] = useState(0);

  const onTouch = (e: React.TouchEvent) => {
    e.stopPropagation();
  };

  const textContent = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    'Faucibus pulvinar elementum integer enim',
    'Faucibus pulvinar elementum integer enim',
    'Mi bibendum neque egestas congue quisque egestas diam',
    'Venenatis lectus magna fringilla urna',
    'Venenatis lectus magna fringilla urna',
  ];

  const textPages = useMemo(() => {
    let arraysOfThree: Array<Array<string>> = [];
    const chunkSize = 3;
    for (let i = 0; i < textContent.length; i += chunkSize) {
      const chunk = textContent.slice(i, i + chunkSize);
      arraysOfThree.push(chunk);
    }
    return arraysOfThree;
  }, []);
  return (
    <div className={isOpen ? cls.active : cls.inactive}>
      <div className={cls.overlay} onTouchEnd={onClose}>
        <div className={cls.content} onTouchEnd={onTouch}>
          <div className={cls.txtBack}>
            <div className={cls.textBox}>
              {textPages[page].map((text, index) => (
                <div className={cls.point} key={text + index}>
                  <div className={cls.index}>0{index + 1 + 3 * page}</div>
                  <div className={cls.text}>{text}</div>
                </div>
              ))}
            </div>
          </div>
          <div className={cls.btnClose} onTouchEnd={onClose} />
          <div className={cls.titleSmall}>Преимущества</div>
          <div className={cls.modalBtnPrev} onClick={() => setPage(0)} />
          <div className={cls.modalBtnNext} onClick={() => setPage(1)} />
          <div
            className={
              cls.modalPageIndicator +
              ' ' +
              (page === 0 ? cls.modalPageActive : cls.modalPageInactive)
            }
            style={{
              left: '382px',
              top: '649px',
            }}
          />
          <div
            className={
              cls.modalPageIndicator +
              ' ' +
              (page === 1 ? cls.modalPageActive : cls.modalPageInactive)
            }
            style={{
              left: '402px',
              top: '649px',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ModalWindow;
