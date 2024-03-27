export default function Director(props) {
    let {id,name,sename,removeDirector} = props;
    return (
      <li className="director d-flex justify-content-between">
        <span> {id}. {name} {sename}</span>        
        <i className="bi bi-trash-fill text-danger" onClick={removeDirector}></i>
      
      </li>
    );
  }