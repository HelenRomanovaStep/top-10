import React,{useState, createRef} from 'react';

export default function Form(props){
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
            setError('Введите корретные данных')
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
                <i className="bi bi-plus"></i>
              </button>   
                   
          </form>        
          <p>{error}</p>    
        </section>        
      )
    }
    