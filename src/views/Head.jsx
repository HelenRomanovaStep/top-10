import './head.css';
import Nav from './../component/Nav'
let pathes=[
  {
    path:'/',
    value:'Main page'
  },
  {
    path:'about',
    value:'About page'
  },
  {
    path:'news',
    value:'News page'
  }
  ,
  
  {
    path:'films',
    value:'Films page'
  }
]
function Head(){
    return(
        <header className="header">
          <h3>Logo</h3>
          <Nav pathes={pathes}/>
        </header>
    )
}
export default Head;