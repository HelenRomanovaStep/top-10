export default function Button(props){
    const{action,className,caption}=props;
    return (
        <button 
           onClick={action} 
           className={className}>
            {caption} 
        </button>
    )
}