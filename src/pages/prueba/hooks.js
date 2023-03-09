import React, {useState, useEffect} from "react";

export const useImageChange = (stopInterval) => {
    const [currentImage, setCurrentImage] = useState("https://picsum.photos/200");
  
    useEffect(() => {
      let interval;
  
      if (!stopInterval) {
        interval = setInterval(() => {
          setCurrentImage("https://picsum.photos/200?" + new Date().getTime());
        }, 4000);
      }
  
      return () => clearInterval(interval);
      
    }, [stopInterval]);
  
    return currentImage;
  };


  export const useClock = () => {
    const [date, setDate] = useState(new Date());
    useEffect(() => {
      const interval = setInterval(() => {
        setDate(new Date());
      }, 1000);
      return () => clearInterval(interval);
    }, []);
    return date;
  };
  