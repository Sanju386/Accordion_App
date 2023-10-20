import React, { useContext, useReducer } from "react";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import { useState } from "react";
import { dataList } from "./data";
import { reducer } from "./reducer";


const Accordion = ({item}) => {
 
//  const[expand,setExpand] =  useState(false)


const initialState = {
    expand: false
}

const[state,dispatch] = useReducer(reducer,initialState)
console.log(state)



  const handleBtn2 = () => {
    dispatch({type:"EXPAND", payload: true})
  };

  const handleBtn1 =()=>{
    dispatch({type:"EXPAND", payload: false})
  }

  return (
    <article key={item.id} className="question">
      <header>
        <h5>{item.title}</h5>
        <button  className="question-btn">
          {state.expand ? <AiFillMinusCircle onClick={handleBtn1} /> : <AiFillPlusCircle onClick={handleBtn2} />}
        </button>
      </header>

      <p>{state.expand ? item.info : null}</p>
    </article>
  );
};

export default Accordion;


