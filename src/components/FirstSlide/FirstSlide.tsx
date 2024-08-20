import styles from './FirstSlide.module.css';

interface FirstSlideProps {
  nextSlide: () => void;
}

const FirstSlide = ({ nextSlide }: FirstSlideProps) => {
  return (
    <>
      <div className={styles.layer7} />
      <div className={styles.layer8} />
      <div className={styles.layer5} />
      <div className={styles.layer4Copy2} />
      <div className={styles.layer4Copy} />
      <div className={styles.layer4} />
      <div className={styles.pinkSperm1} />
      <div className={styles.bakti1} />
      <div className={styles.pinkSperm} />
      <div className={styles.btn} onClick={nextSlide} />
      <div className={styles.heloTxt} />
      <div className={styles.title} />
    </>
  );
};

export default FirstSlide;
