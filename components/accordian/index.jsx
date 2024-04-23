//Single selection
//Multiple selection

import { useState } from "react";

import data from "./data";
import "./styles.css";

export default function Accordian() {

  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSingleSelection(getCurrentId){
    setMultiple([]); 
    setSelected(getCurrentId === selected ? null : getCurrentId); //to show/close the current selection
  }

  function handleMultiSelection(getCurrentId){
    let cpyMultiple = [...multiple];
    const findIndexOfCurrentId = cpyMultiple.indexOf(getCurrentId);

    if (findIndexOfCurrentId === -1)
      cpyMultiple.push(getCurrentId);
    else 
      cpyMultiple.splice(findIndexOfCurrentId, 1);
    
    setMultiple(cpyMultiple);
  }


  return (
    <div className="wrapper"> 
        <button  onClick={()=>setEnableMultiSelection(!enableMultiSelection)}>
          {enableMultiSelection ? "Disable Multi Selection" : "Enable Multi Selection"}</button>
      <div className="accordian">
        {data && data.length > 0 ? //check if there is data
            (data.map((dataItem) => 
            (<div className="item">
              <div className="title" onClick={enableMultiSelection ? 
                () => handleMultiSelection(dataItem.id)
                : () => handleSingleSelection(dataItem.id)} >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
                {selected === dataItem.id || 
                 multiple.indexOf(dataItem.id) !== -1 
                 ? (<div className = "content">{dataItem.answer}</div>)
                  : null}
              
              </div>)))
            : (<div>Data not found!</div>)}
      </div>
        
    </div>);
};