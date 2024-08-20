import React from 'react';
import cls from './Globals.module.css';

interface GlobalsProps {
  homeBtn: () => void;
}

const Globals = ({ homeBtn }: GlobalsProps) => {
  return (
    <>
      <div className={cls.shape1} />
      <div className={cls.homeBtn} onClick={homeBtn} />
      <div className={cls.headerTitle} />
    </>
  );
};

export default Globals;
