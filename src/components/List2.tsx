import React, { ChangeEvent, useState } from "react";
import useNumberList from "../hooks/useNumberList";

type List2Props = {
  // TODO
  initialValues : number[],
  label:string
};
const List2 = (props: List2Props) => {
  const {initialValues , label} = props;
  const {list,appendEnd,popStart,clear,reset} = useNumberList(initialValues)
  const [value,setValue] = useState<number>(0);
  const handleChange = (event:ChangeEvent<HTMLInputElement>)=>{
    setValue(Number(event.target.value));

  }
  return (
    <div data-testid="list2">
      <h3 data-testid="list2-label">{/* Label */}
      {label}
      </h3>

      {/* Iterate List and wrap the element div below inside */}

      {list.map((el)=>(

      <div data-testid="list2-element">
        {el}
      </div>
      ))}

      <input data-testid="list2-input" value={value} onChange={(e)=>handleChange(e)} />
      <button data-testid="list2-btn-append-end" onClick={()=>appendEnd(value)}>
        {/* Button to append new number to the end of the list */}
        Append End
      </button>
      <button data-testid="list2-btn-pop-start" onClick={()=>popStart()}>
        {/* Button to  pop first element of the list */}
        Pop Start
      </button>
      <button data-testid="list2-btn-clear" onClick={()=>clear()}>
        {/* Button to  clear the list */}
        Clear
      </button>
      <button data-testid="list2-btn-reset" onClick={()=>reset()}>
        Reset
        {/* Button to  reset the list to initialValue */}
      </button>
    </div>
  );
};

export default List2;
