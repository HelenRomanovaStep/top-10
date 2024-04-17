import {Link, NavLink} from  'react-router-dom';
export default function Nav(props){    
    const {pathes} =props;
    
    return(
        // <a href="about">текст ссылки</a>
        <nav className="nav">            
            {
             pathes.map((link)=>
                // <Link to={link.path}>{link.value}</Link>
                 <NavLink 
                    to={link.path}
                    key={link.path}
                    className={
                      ({isActive})=>(isActive ? "active" :'') 
                    }
                 >
                    {link.value}
                    </NavLink>
            )
            }
        </nav>
    )
}