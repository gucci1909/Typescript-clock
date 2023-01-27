import React, { ChangeEvent, useState } from "react";
import useNumberList from "../hooks/useNumberList";

type List1Props = {
  // TODO
  initialValues: number[],
  label : string,
};
const List1 = (props: List1Props) => {
  const {initialValues,label} = props;
  const {list,appendStart,popEnd,clear,reset} = useNumberList(initialValues)
  const [value,setValue] = useState<number>(0);
  const handleChange= (event:ChangeEvent<HTMLInputElement>)=>{
    setValue(Number(event.target.value));
  }
  return (
    <div data-testid="list1">
      <h3 data-testid="list1-label">
        {/* Label */}
        {label}
        
      </h3>
      {/* Iterate List and wrap the element div below inside */}
      {list.map((el)=>(

      <div data-testid="list1-element">
        {el}
      </div>
      ))}
      

      
      <input data-testid="list1-input" value={value} onChange={(e)=>handleChange(e)} />
      <button data-testid="list1-btn-append-start" onClick={()=>appendStart(value)}>
        {/* Append to start of list btn */}
        Append Start
      </button>
      <button data-testid="list1-btn-pop-end" onClick={()=>popEnd()}>
        {/* po last element btn */}
        Pop End

      </button>
      <button data-testid="list1-btn-clear" onClick={()=>clear()}>
        {/* clear list and set empty button */}
        Clear
      </button>
      <button data-testid="list1-btn-reset" onClick={()=>reset()}>
        {/* Reset list to default value btn */}
        Reset
      </button>
    </div>
  );
};

export default List1;
