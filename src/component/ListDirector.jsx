import React,{useState, createRef, useEffect, useReducer} from "react";
import Director from "./Director";
import Form from "./Form";
import NavAction from "./NavAction";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import './listDirector.css';

import {Context} from './context';
import { reducer,addDirector,removeItem } from "./reducerDirector";

function ListDirectors(){  
  // const [dirList, setDirList] = useState(
  //   JSON.parse(localStorage.getItem('directors'))||[]
  // );

  const[dirList,dispatch]=useReducer(
    reducer, 
    JSON.parse(localStorage.getItem('directors'))||[]);

  //  console.log(dirList);
  useEffect(
    ()=>{     
      localStorage.setItem('directors',JSON.stringify(dirList));      
  },[dirList]
  );
  return( 
    <Context.Provider value={{
      dispatch
    }}>  
    <div class="container-fluid">
      <NavAction />     

      <Form action={(newDirector)=>{
        dispatch(addDirector(newDirector,
              dirList.length>0 && 
              dirList.sort((a,b)=>a.id-b.id)
              ? dirList[dirList.length-1].id+1 
              : 1
          ))
      }}/>
     {
     dirList.map((director)=>{
    
        return(
              <Director
               key={director.id} 
               {...director} 
               removeDirector={()=>{                
                  dispatch(removeItem(director.id))
               }}
               /> 
              )}      
      )
      }
    
    </div>  
    </Context.Provider>       
    )    
}

export default ListDirectors;
