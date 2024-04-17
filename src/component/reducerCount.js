const inc=(delta)=>{
    return{
     type: 'inc',
     delta
    }
  }

const dec=(delta)=>{
    return{
     type: 'dec',
     delta
    }
  }

  
 function reducer(state, action){
     console.log(state,action);
     switch (action.type){
       case  'inc':return{counter: state.counter+action.delta} ;
       case  'dec': return{counter: state.counter-action.delta};
       default: return {...state}
     }       
 }
 export {inc,dec,reducer}