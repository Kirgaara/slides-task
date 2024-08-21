import { useRef, useEffect } from 'react';
import scroll from './Scroll.module.css';

export default function Scroll() {
  const textScrollRef = useRef(null);
  const pinkScrollRef = useRef(null);

  useEffect(() => {
    const textScrollElem = textScrollRef.current;
    const pinkScrollElem = pinkScrollRef.current;

    const initialOffset = 240;
    let isDragging = false;
    let startDragY: number, startScrollTop: number;

    const handleTouchStart = (e: TouchEvent) => {
      isDragging = true;
      startDragY = e.touches[0].clientY;
      startScrollTop = textScrollElem.scrollTop;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging) return;
      e.preventDefault();

      const deltaY = e.touches[0].clientY - startDragY;
      const maxScroll = 348;
      const scrollPercentage =
        (startScrollTop + deltaY) /
        (textScrollElem.scrollHeight - textScrollElem.clientHeight);

      if (scrollPercentage >= 0 && scrollPercentage <= 1) {
        pinkScrollElem.style.top = `${
          initialOffset + scrollPercentage * maxScroll
        }px`;
        textScrollElem.scrollTop =
          scrollPercentage *
          (textScrollElem.scrollHeight - textScrollElem.clientHeight);
      }
    };

    const handleTouchEnd = () => {
      isDragging = false;
    };

    pinkScrollElem.addEventListener('touchstart', handleTouchStart);
    document.addEventListener('touchmove', handleTouchMove);
    document.addEventListener('touchend', handleTouchEnd);
  }, []);

  return (
    <div className={scroll.wrapper}>
      <div className={scroll.title}>ТЕКСТ СООБЩЕНИЯ</div>
      <div className={scroll.pinkScroll} ref={pinkScrollRef}></div>
      <div className={scroll.rectangle1} />

      <div className={scroll.txtBack}>
        <div className={scroll.textScroll} ref={textScrollRef}>
          <p>
            <strong>Lorem ipsum dolor sit amet,</strong> consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Duis ut diam quam nulla. Mauris in aliquam sem fringilla ut
            morbi tincidunt. Vitae aliquet nec ullamcorper sit amet risus nullam
            eget felis. Nulla pharetra diam sit amet nisl. Eget nulla facilisi
            etiam dignissim diam quis enim lobortis. Est sit amet facilisis
            magna. Neque laoreet suspendisse interdum consectetur libero id. Nec
            ullamcorper sit amet risus nullam eget felis eget. Mollis aliquam ut
            porttitor leo a diam sollicitudin tempor id. Euismod quis viverra
            nibh cras pulvinar mattis nunc. Massa massa ultricies mi quis. Sit
            amet massa vitae tortor condimentum lacinia. Et malesuada fames ac
            turpis egestas integer eget. Elementum pulvinar etiam non quam lacus
            suspendisse faucibus interdum posuere.
          </p>
          <br />

          <p>
            Amet justo donec enim diam vulputate ut pharetra sit. Risus
            ultricies tristique nulla aliquet enim tortor at auctor. Velit sed
            ullamcorper morbi tincidunt ornare massa. Quis hendrerit dolor magna
            eget est lorem ipsum. Etiam dignissim diam quis enim. Gravida neque
            convallis a cras. Ut enim blandit volutpat maecenas volutpat. Mauris
            sit amet massa vitae tortor condimentum lacinia quis vel.
          </p>
        </div>
      </div>
    </div>
  );
}
