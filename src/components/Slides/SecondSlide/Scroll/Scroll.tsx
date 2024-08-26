import { useRef, useState } from 'react';
import scroll from './Scroll.module.css';

export default function Scroll() {
  const textScrollRef = useRef(null);

  const [scrollHeight, setScrollHeight] = useState(240);
  const [textScroll, setTextScroll] = useState(0);
  const [isDragging, setIsDraging] = useState(false);

  const handleTouchStart = () => {
    setIsDraging(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;

    let mousePosition = e.touches[0].clientY - 50;

    if (mousePosition > 240 && mousePosition < 588) {
      setScrollHeight(mousePosition);
      const scrollTop = ((scrollHeight - 240) * 348) / 580;
      setTextScroll(scrollTop);
      textScrollRef.current.scrollTop = textScroll;
    }
  };

  const handleTouchEnd = () => {
    setIsDraging(false);
  };

  return (
    <div
      className={scroll.wrapper}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className={scroll.title}>ТЕКСТ СООБЩЕНИЯ</div>
      <div
        className={scroll.pinkScroll}
        onTouchStart={handleTouchStart}
        style={{ top: scrollHeight }}
      ></div>
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
