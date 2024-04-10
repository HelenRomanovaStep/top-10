import React,{useState, createRef, useEffect, useReducer} from "react";
import Director from "./Director";
import Form from "./Form";
import NavAction from "./NavAction";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import './listDirector.css';

import {Context} from './context';

function ListDirectors(){  
  // const [dirList, setDirList] = useState(
  //   JSON.parse(localStorage.getItem('directors'))||[]
  // );

  const[dirList,dispatch]=useReducer(
    reducer, 
    JSON.parse(localStorage.getItem('directors'))||[])
   console.log(dirList);
  useEffect(
    ()=>{     
      localStorage.setItem('directors',JSON.stringify(dirList));      
  },[dirList]
  );

  function reducer(dirList,action){
    console.log(dirList,action);
    switch (action.type){
      case 'addDirector': return(
           [...dirList,
           {id: action.id, ...action.newDirector }]);
      case 'removeItem': return(
           [...dirList].filter(el=>el.id !==action.id))
    
      default: return {...dirList}
           }   
  }


  const addDirector=(newDirector)=>{
    dispatch({
      type: 'addDirector',
      id: dirList.length>0 && dirList.sort((a,b)=>a.id-b.id)?  
          dirList[dirList.length-1].id+1 
          : 1,
      newDirector: newDirector
    })
  }

  const removeItem=(id)=>{
    // setDirList(dirList=>dirList.filter(el=>el.id !==id));
    dispatch({
      type: 'removeItem',
      id: id
    })
  }
  //по возрастанию
  const ascId=()=>{
   // setDirList([...dirList].sort((a,b)=>a.id-b.id))
   dispatch({
     type: 'ascId'
   })
  }
    //по убыванию
  const decId=()=>{
    //setDirList([...dirList].sort((a,b)=>b.id-a.id))
  }
  const deleteDir=()=>{
    //setDirList([])
  }
  //по возрастанию имя
  const ascName=()=>{
   // setDirList([...dirList].sort((a,b)=>a.name.localeCompare(b.name)))
  }
    //по возрастанию фамилии
    const ascSename=()=>{
     // setDirList([...dirList].sort((a,b)=>a.sename.localeCompare(b.sename)))
    }
  return( 
    <Context.Provider value={{
      deleteDir,ascId,ascName,ascSename,decId,ascId,removeItem
    }}>  
    <div class="container-fluid">
      <NavAction />     

      <Form  action={addDirector}/>   
     {
     dirList.map((director)=>{
    
        return(
              <Director
               key={director.id} 
               {...director} 
               removeDirector={()=>removeItem(director.id)}
               /> 
              )}      
      )
      }
    
    </div>  
    </Context.Provider>       
    )    
}

export default ListDirectors;
