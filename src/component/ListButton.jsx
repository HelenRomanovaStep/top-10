import React,{useContext} from 'react';
import Button from './Button';
import{Context} from './context';

export default function ListButton(){
    const{deleteDir,ascId,ascName,ascSename,decId,removeItem}=useContext(Context);
    return(
        <> 
            <Button 
             action={deleteDir}
             className={"btn btn-danger"}  
             icon={""} 
             caption={"Очистить"}/>
            
            <Button 
             action={ascId}
             className={"btn btn-info"}  
             icon={"bi bi-arrow-down"} 
             caption={"Id"}
            
            />
            <Button
             action={decId}
             className={"btn btn-info"}  
             icon={"bi bi-arrow-up"} 
             caption={"Id"} 
            />
            <Button
             action={ascName}
             className={"btn btn-info"}  
             icon={"bi bi-arrow-up"} 
             caption={"Name"} 
            />
            
            <Button
             action={ascSename}
             className={"btn btn-info"}  
             icon={"bi bi-arrow-up"} 
             caption={"Sename"} 
            />
       </>      
            
    )
}