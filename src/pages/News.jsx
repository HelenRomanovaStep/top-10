import {Routes,Route,Outlet,useParams} from 'react-router-dom';
import Nav from './../component/Nav';
let pathes=[
    {
      path:'movies',
      value:'Movies page'
    },
    {
      path:'serials',
      value:'Serials page'
    },
    {
        path:'1',
        value:'1 news'
      },

  ]

function Movies(){
    return(
        <>
        <h2>Movies</h2> 
        <p>News of moveis</p>            
       </>   
    )
}
function Serials(){
    return(
        <>
        <h2>Serials</h2> 
        <p>News of serials</p>            
        </>   
    )
}
function New(){
    const {id}=useParams();
    return(
        <>
          <h2>New</h2>
          <h3>{id}</h3>
        </>
    )
}
function News(){
    return(
        <>
            <h2>Our news</h2>
            <Nav pathes={pathes}/>
            <Outlet/>          
        </>
    )
}
export {News,Movies,Serials,New};