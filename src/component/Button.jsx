export default function Button(props){
    const{action,className,caption,icon}=props;
    return (
        <button 
           onClick={action} 
           className={className}>
           <i className={icon} ></i> 
           {caption} 
        </button>
    )
}