import React,{useState, createRef, useEffect} from "react";
import Director from "./Director";
import Form from "./Form";
import NavAction from "./NavAction";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import './listDirector.css';

import {Context} from './context';

function ListDirectors(){  
  const [dirList, setDirList] = useState(
    JSON.parse(localStorage.getItem('directors'))||[]
  );
  
  useEffect(
    ()=>{
      // console.log('useEffect');
      // console.log(dirList.length);
      localStorage.setItem('directors',JSON.stringify(dirList));

      // return(){

      // }
  },[dirList]
  );


  const addDirector=(newDirector)=>{
  //сортируем по id
  ascId();
  //берем последний и к его id=id+1 ||1
  let key = dirList.length>0  
        ?  dirList[dirList.length-1].id+1
        :  1;
   
    setDirList([...dirList,{id: key ,...newDirector}]) ;
    console.log(dirList);
  }

  const removeItem=(id)=>{
    setDirList(dirList=>dirList.filter(el=>el.id !==id));
  }
  //по возрастанию
  const ascId=()=>{
    setDirList([...dirList].sort((a,b)=>a.id-b.id))
  }
    //по убыванию
  const decId=()=>{
    setDirList([...dirList].sort((a,b)=>b.id-a.id))
  }
  const deleteDir=()=>{
    setDirList([])
  }
  //по возрастанию имя
  const ascName=()=>{
    setDirList([...dirList].sort((a,b)=>a.name.localeCompare(b.name)))
  }
    //по возрастанию фамилии
    const ascSename=()=>{
      setDirList([...dirList].sort((a,b)=>a.sename.localeCompare(b.sename)))
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
