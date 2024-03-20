import React,{useState,createRef} from 'react';
import './Director.css';
//useStat не имеет доступа к внешней сущности directors
  //поэтому перенесли массив directors 
  const directors =[
    {
      id:1,
      name:'James',
      lastname:'Cameron' 
  
    },
    {
      id:2,
      name:'Quentin',
      lastname:'Tarantino'
    },
    {
      id:3,
      name:'George ',
      lastname:'Lucas'
    }
  ]

// Steven Allan Spielberg
function Form(props){
   const {action}=props;  

    const output =  createRef();  
    const newDirectors =  createRef();   
 
    const  [val, setVal] = useState('');
    
    const handleSubmit = event=>{
       event.preventDefault();
       console.log(event); 
         /*
        Получаем доступ к текстовому полю
        */
        let uName = document.getElementById('newDir');         
        console.log(uName.value); 
        
        const [name, lastname] = val.trim().split(' ');
        action({name, lastname});
        setVal('');
    }
  
   const handleClick = () =>{ 
  //   output.current.textContent = newDirectors.current.value;
  }
  const handleChange = (e) =>{ 
   // output.current.textContent = newDirectors.current.value;
   //setVal(newDirectors.current.value);
      setVal(e.target.value);  
   
  }
  
  const handleClickDirector = (val) =>{ 
    // результатом метода split является разделение строки 
    // на несколько элементов массива
   //const [name, lastname] = newDirectors.current.value.split(' ');
   //const [name, lastname] = val.trim().split(' ');

  //  console.log(val.split(' '));
  //  console.log(name,lastname);

  //  const newDirector ={
  //    name: name,
  //    lastname: lastname
  //  }

     //можно сократить
    //  const newDirector ={name, lastname }
    //  props.action(newDirector);

     //можно сократить
     //action({name, lastname});

     //очистили поле
    // newDirectors.current.value ='';
    // output.current.textContent='';
    //setVal('');
  }
 
  return(  
    <form className="form" onSubmit={handleSubmit }>
       {/* <p ref={output}>{val}</p>   */}
       <p>1 {val}</p> 
       <input 
          id="newDir"  
          type="text" 
          ref={newDirectors}          
          onChange={handleChange} 
            value={val}         
        />     
          
       <input type="submit" 
        //  onClick={()=>handleClickDirector(val)} 
         value="добавить"/>   
    </form>
  )
}

//выводит один пункт списка из режиссеров
function Director(props) {   
  const {id,name,lastname,action} = props;  
  return (
  <li 
    className="list" 
     onDoubleClick={action}>       
    <span>{id}</span> <span>{ name }</span> <span>{ lastname }</span>     
    </li>
  );
}
//кнопка дейсвтий
function Button(props){
  const {caption,action} = props;  
  return(
    <button onClick={action}>{caption}</button>
  )
}

//вызывает Director и передает пропсы по каждому компоненту
function DirectorList( ){
  // const {directors} = props

  const [directorsList,setDirectorsList] = useState(directors);
  
  const addDirectors =(newDirector)=>{
    //создали newDirector, она формируется 
    //на основе текущей directorsList - как копия существующего масссив
          // const newDirectorList = [...directorsList]; 
    
    //создали новый объект на основе данных, котороые прилетели
    //этому объекту добавили id - берем из расчета количества элментов в маасиве    
     console.log(directorsList.length);
    (directorsList.length>0) && directorsList.sort((a, b) => a.id - b.id) ;
    let key = directorsList.length>0       
        ? directorsList[directorsList.length-1].id + 1
        : 1; 
        
    //  newDirector={ 
    //     // id:directorsList.length-1, 
    //     id:  key+1,           
    //     // name:'James ',
    //     // lastname:'Cameron' 
    //     ...newDirector     
    // }
   
    //даллее этот объект пушим в массив
          // newDirectorList.push(newDirector);
    //установили в  state  новый массив
    //запускает изменение состояния directorsList
         //setDirectorsList(newDirectorList)
    setDirectorsList([...directorsList, {id:  key,...newDirector }])  ;
    console.log("directors",directorsList);
  }
  const removeItem = id => {
    console.log(id) ; 
    setDirectorsList(directorsList => directorsList.filter(el => el.id !== id))
   
  }
  const listInc=()=>{
    //let sortDirectors = [...directorsList]; 
   // sortDirectors=sortDirectors.sort((a, b) => a.id - b.id);           
   // setDirectorsList(sortDirectors) ; 
   setDirectorsList([...directorsList].sort((a, b) => a.id - b.id)) ;   
  }
  
  const listDec=()=>{
    // let sortDirectors = [...directorsList]; 
    // sortDirectors=sortDirectors.sort((a, b) => b.id - a.id);       
    // setDirectorsList(sortDirectors) ;   
    setDirectorsList([...directorsList].sort((a, b) => b.id - a.id)) ;   
  }

  const listDecName=()=>{
    // let sortDirectors = [...directorsList]; 
    // sortDirectors=sortDirectors.sort((a,b)=> b.name.localeCompare(a.name));        
    // setDirectorsList(sortDirectors) ;
    setDirectorsList([...directorsList].sort((a,b)=> b.name.localeCompare(a.name)))
      
  }
  const listIncName=()=>{
    let sortDirectors = [...directorsList];
    sortDirectors=sortDirectors.sort((a,b)=> a.name.localeCompare(b.name)); 
    console.log(sortDirectors);         
    setDirectorsList(sortDirectors) ;   
      
  }
  const listDecFio=()=>{
    let sortDirectors = [...directorsList]; 
    sortDirectors=sortDirectors.sort((a,b)=> b.lastname.localeCompare(a.lastname));
    console.log(sortDirectors);         
    setDirectorsList(sortDirectors) ;   
      
  }
  const listIncFio=()=>{
    let sortDirectors = [...directorsList];
    sortDirectors=sortDirectors.sort((a,b)=> a.lastname.localeCompare(b.lastname)); 
    console.log(sortDirectors);         
    setDirectorsList(sortDirectors) ;   
      
  }
  const listRemove=()=>{
    setDirectorsList([])
  }
  return(
    <>
    <section className="sortList">
      <Button action={listRemove} caption={"Удалить"}/> 
      <Button action={listInc} caption={"по возрастанию id"}/> 
      <Button action={listDec} caption={"по убыванию id"}/> 

      <Button action={listIncName} caption={"ABC Name"}/> 
      <Button action={listDecName}caption={"по убыванию Name"} /> 

      <Button action={listIncFio} caption={"в алфавитном порядке ФИО"}/> 
      <Button action={listDecFio} caption={"по убыванию ФИО"}/> 
    </section> 
    {/* 1способ */}
    {/* <Director name={'James'} lastname={'Cameron'}/> 
    <Director  name={directors[0].name}  lastname={directors[0].lastname} /> 
    <Director {...{name:'Quentin', lastname:'Tarantino'}}/> 
    <Director {...{name:directors[1].name, lastname:directors[1].lastname}}/> 
     
    <Director {...directors[2]}/>  */}
    
    <ol className="directors">
     {/*2способ */}
    { 
    directorsList.map(director => {
      return (        
        <Director  
        { ...director } 
        key={director.id}
        action={()=>removeItem(director.id)}
      />
      )})
     }
     </ol>
     <Form action={addDirectors}/>
    </>
  )
}

export default function App() {
  return (
  <>
    <DirectorList directors={directors} />
  </>
  )}
 
