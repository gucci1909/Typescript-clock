import { useState } from "react";

const useNumberList = (initialArray: number[]) => {
  // TODO
  // refer readme.md for what to return
  const [data,setData] = useState(initialArray);
  const list = data;
  const appendStart = (value:number)=>{
    setData([value,...data]);

  };
  const appendEnd= (value:number) =>{ 
    setData([...data,value]);

  }
  const popStart = ()=>{
    setData(data.slice(1));
  };

  const popEnd = ()=>{
    // const temp = data;
    // temp.pop();
    // data = temp;
    setData(data.slice(0,-1));
  };

  const clear = ()=>{
    setData([]);
  };
  const reset = ()=>{
    setData(initialArray);
  } 
  
  return {list,appendStart,appendEnd,popStart,popEnd,clear,reset}
};

export default useNumberList;
