import { useState, useEffect } from 'react';
import Button from './index';

const moveToTop = () => (document.documentElement.scrollTop = 0);

const TopButton = () => {
  const [scrollFlag, setScrollFlag] = useState(false);
 
  const updateScroll = () => {
    const {scrollY} = window;
    scrollY > 10 ? setScrollFlag(true) : setScrollFlag(false);
  };
  const handleScroll = throttle(updateScroll, 100);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  },[]);

  const moveToTop = () => (document.documentElement.scrollTop = 0);

  return scrollFlag ? (
    <Button onClick={moveToTop}/>
  )

}