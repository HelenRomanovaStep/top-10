import {Routes,Route,Outlet,useParams} from 'react-router-dom';
import Nav from './../component/Nav';
let pathes=[
    {
      path:'avatar',
      value:'Avatar'
    },
    {
      path:'300',
      value:'300'
    },
    {
        path:'the_Avengers',
        value:'The Avengers'
      },

  ]
function Film(){
    const {title}=useParams();
    return(
        <>
          <h2>New</h2>
          <h3>{title}</h3>
        </>
    )
}
function Films(){
    return(
        <>
            <h2>Our Films</h2>
            <Nav pathes={pathes}/>
            <Outlet/>          
        </>
    )
}
export {Films,Film};