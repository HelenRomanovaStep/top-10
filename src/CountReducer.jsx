import React,{useReducer} from 'react';
import {inc,dec,reducer} from './reducerCount';

export default function CountReducer(){
    const[state,dispatch]=useReducer(reducer,{counter: 0})      
    return(
        <>
          <h1>Clicker {state.counter} </h1>
          <button onClick={()=>dispatch(inc(1))}>+1 Click </button>
          <button onClick={()=>dispatch(dec(1))}>-1 Click</button>
          <button onClick={()=>dispatch(inc(2))}>+2 Click</button>
          <button onClick={()=>dispatch(dec(2))}>-2 Click</button>
        </>
    )
}