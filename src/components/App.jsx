import React from 'react';
import { addTask,deleteTask,markAsdone} from '../CreateSlice';
import { useSelector,useDispatch } from 'react-redux';  
import InputTasks from './InputTasks';
import ListItems from './Tasks';
import './app.css';

const App=()=>{
   
    const selector=useSelector((state)=>state.tasklist)
    const dispatch=useDispatch()
    const addingTodos=(task)=>{
        dispatch(addTask({task,isCompleted:false}))
       
        }
    
    const keys=Object.keys(selector)  
    const removeTask=(id)=>{
    
    dispatch(deleteTask({id:id}))
}

const setCompleted=({id,task})=>{
    	dispatch(markAsdone({id:id,task:task}))    
}
    return(
<div>
    <div className="ui segment" style={{maxHeight:"200px",position:"relative"}}>
         <InputTasks handleOnClickBtn={addingTodos}/>
     </div>
                <div className="ui segment" style={{height:"400px",overflow:"auto"}}>
                <div className="ui styled accordion" style={{maxHeight:"max-content",width:"100%",overflow:"auto",padding:"1%"}} >
                    {    
                           <ListItems tasklist={selector[keys]} filter={removeTask} setCompleted={setCompleted}/>
                    } 
                </div>
                </div>
                
                
                
     
</div>
    
    ) 
    
}
export default App