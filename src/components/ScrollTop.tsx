import { ReactNode, useEffect } from 'react';

// ==============================|| NAVIGATION - SCROLL TO TOP ||============================== //
interface ScrollTopProps{
  children?:ReactNode
}
const ScrollTop = ({ children }:ScrollTopProps) => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, []);

  return  <>{children}</> || null;
};


export default ScrollTop;
