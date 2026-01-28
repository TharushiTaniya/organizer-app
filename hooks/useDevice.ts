"use client";
import { useState, useEffect } from "react";

export const useDeviceCheck = () => {
  const [windowSize, setWindowSize] = useState({
    innerWidth: 0,
    innerHeight: 0,
  });
  useEffect(() => {
    // eslint-disable-next-line react-hooks/immutability
    handleWindowResize();

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const handleWindowResize = () => {
    setWindowSize({
      innerWidth: window.innerWidth,
      innerHeight: window.innerHeight,
    });
  };
  const isMobile = windowSize.innerWidth >= 280 && windowSize.innerWidth <= 540;
  const isTablet = windowSize.innerWidth > 540 && windowSize.innerWidth <= 1024;
  const isLaptop =
    windowSize.innerWidth > 1024 && windowSize.innerWidth <= 1550;
  const isDesktop = windowSize.innerWidth > 1550;

  const deviceType = {
    isMobile: isMobile,
    isTablet: isTablet,
    isLaptop: isLaptop,
    isDesktop: isDesktop,
  };

  return deviceType;
};

export default useDeviceCheck;
