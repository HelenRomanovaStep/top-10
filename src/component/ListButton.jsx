import React,{useContext} from 'react';
import Button from './Button';
import{Context} from './context';
import { ascId } from './reducerDirector';

export default function ListButton(){
    //deleteDir,ascId,ascName,ascSename,decId,removeItem
    const{dispatch}=useContext(Context);
    return(
        <> 
            <Button 
             action={()=>{
                dispatch({
                  type: 'deleteDir'
                }
              )}}
             className={"btn btn-danger"}  
             icon={""} 
             caption={"Очистить"}/>
            
            <Button 
             action={()=>dispatch(ascId())}

             className={"btn btn-info"}  
             icon={"bi bi-arrow-down"} 
             caption={"Id"}
            
            />
            <Button
             action={()=>{
                dispatch(
                    {
                      type: 'decId'
                    }
                  )
             }}
             className={"btn btn-info"}  
             icon={"bi bi-arrow-up"} 
             caption={"Id"} 
            />
            <Button
             action={()=>{
                dispatch(
                    {
                      type: 'ascName'
                    }
                  )
             }}
             className={"btn btn-info"}  
             icon={"bi bi-arrow-up"} 
             caption={"Name"} 
            />
            
           
       </>      
            
    )
}