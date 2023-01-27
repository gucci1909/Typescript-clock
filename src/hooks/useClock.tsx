// import { useEffect } from "react";

const useClock = () => {
  const time = new Date();
  
  
  const hours:number = time.getHours();
  const minutes:number = time.getMinutes();
  const seconds:number = time.getSeconds();

  // TODO
  // refer readme.md for what to return

  return {hours,minutes,seconds}

};

export default useClock;
