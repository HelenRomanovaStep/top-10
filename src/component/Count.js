import React, {Component} from 'react';

class Count extends Component{

   constructor(props){
    console.log('constructor');
     super(props);
     this.state={
        count:0
     }
   }
   componentDidMount(){
      console.log('componentDidMount');
      console.log(this.state.count);//0
   }

   componentDidUpdate(){
    console.log('componentDidUpdate');
    console.log(this.state.count);
   }

   componentWillUnmount(){
      
   }
  
   render(){
    console.log('render');
    const  handlerClick =()=>{
      console.log('click');
      this.setState({count: this.state.count+1})
    }

     return(
        <div>
           <h1>Заголовок</h1>
           <button onClick={handlerClick}>Click</button>
           <p>{this.state.count}</p>
        </div>
     )
   }

}
export default Count;