import React,{useState, createRef, useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import './Director.css';

function Form(props){
const {action} =props;

const inputVal = createRef();
const [val, setVal]= useState('');
const[validName, setValidName]=useState(false);
const[error, setError] = useState('');

const hadlerSubmit=(e)=>{
     e.preventDefault();     
     const [name,sename] = val.split(' ');
     if(validName){
       action({name, sename});
       setVal('');
       }else{
        setError('Введите больше данных')
     }
     
}
const hadlerChange=(e)=>{  
  setError('');

  setValidName(isValid(e.target.value));
  setVal(e.target.value);
  //setVal(inputVal.current.value);
}
const isValid=(name)=>{
  //  if (name.length>=2) return true 
  //  else return false
  let reg = /^[a-zA-zа-яА-Я0-9.-\s]+$/gi;
  
  return (name.length>=2 && reg.test(name)) 
}
  return(
    <section className="section-form">
      <form onSubmit={hadlerSubmit}>     
          <input 
              type="text" 
              id="valSet" 
              ref={inputVal} 
              value= {val}
              onChange={hadlerChange}
              className="form-control"
              style={{
                borderColor:validName===true 
                ? "yellow" 
                :"red"
              }}
              /> 
          <button type="submit" className="btn btn-secondary">
            <i class="bi bi-plus"></i>
          </button>        
      </form>
    
      <p>{error}</p>

    </section> 
   
  )
}

function Director(props) {
  let {id,name,sename,removeDirector} = props;
  return (
    <li 
      className="director" 
      onDoubleClick={removeDirector}
    >
       {id}. {name} {sename}
    </li>
  );
}

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
    <div class="container-fluid">

      <section className="navButtons">
        <button onClick={deleteDir} className="btn btn-danger">Очистить </button>
        <button onClick={ascId} className="btn btn-info"><i class="bi bi-arrow-down"></i> Id</button>
        <button onClick={decId} className="btn btn-info"><i class="bi bi-arrow-up"></i> Id</button>

        <button onClick={ascName} className="btn btn-info"><i class="bi bi-arrow-up"></i> Name </button>
        <button onClick={ascSename} className="btn btn-info"><i class="bi bi-arrow-up"></i> Fio </button>

      </section> 
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
    )    
}

export default ListDirectors;
