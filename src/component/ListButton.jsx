import React,{useContext} from 'react';
import Button from './Button';
import{Context} from './context';

export default function ListButton(){
    const{deleteDir,ascId,ascName,ascSename,decId,removeItem}=useContext(Context);
    return(
        <> 
            <Button />
            <Button />
            <Button />
            <Button />
            {/* <button onClick={deleteDir} className="btn btn-danger">Очистить </button>
            <button onClick={ascId} className="btn btn-info"><i class="bi bi-arrow-down"></i> Id</button>
            <button onClick={decId} className="btn btn-info"><i class="bi bi-arrow-up"></i> Id</button>

            <button onClick={ascName} className="btn btn-info"><i class="bi bi-arrow-up"></i> Name </button>
            <button onClick={ascSename} className="btn btn-info"><i class="bi bi-arrow-up"></i> Fio </button> */}
        </>
    )
}