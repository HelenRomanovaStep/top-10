const addDirector=(newDirector, id)=>{
    return{
      type: 'addDirector',
      id: id,
      newDirector: newDirector
    }
  }
  const removeItem=(id)=>{     
     return{
      type: 'removeItem',
      id: id
    } 
  }
  //по возрастанию
  const ascId=()=>{  
   return{
     type: 'ascId'
   }
  }
    //по убыванию
  // const decId=()=>{
  //   //setDirList([...dirList].sort((a,b)=>b.id-a.id))
  //   dispatch(
  //     {
  //       type: 'decId'
  //     }
  //   )
  // }
  // const deleteDir=()=>{
  //   //setDirList([])
  //   dispatch(
  //     {
  //       type: 'deleteDir'
  //     }
  //   )
  // }
  //по возрастанию имя
  // const ascName=()=>{
  //  // setDirList([...dirList].sort((a,b)=>a.name.localeCompare(b.name)))
  //  dispatch(
  //   {
  //     type: 'ascName'
  //   }
  // )
  // }
    //по возрастанию фамилии
    // const ascSename=()=>{
    //  // setDirList([...dirList].sort((a,b)=>a.sename.localeCompare(b.sename)))
    // }  


function reducer(dirList,action){
    //console.log(dirList,action);
    switch (action.type){
      case 'addDirector': return(
           [...dirList,
           {id: action.id, ...action.newDirector }]);
      case 'removeItem': return(
           [...dirList].filter(el=>el.id !==action.id));
      case 'ascId' :return (
           [...dirList].sort((a,b)=>a.id-b.id)
      )
      case 'decId' :return (
        [...dirList].sort((a,b)=>b.id-a.id)
     )
     case 'ascName' : return (
      [...dirList].sort((a,b)=>a.name.localeCompare(b.name))
     )
     case 'deleteDir': return (
       []
     )
    
      default: return {...dirList}
    }   
  }
export {reducer,addDirector,removeItem,ascId}  