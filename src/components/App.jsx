import React from 'react';
import { addTask,deleteTask} from '../CreateSlice';
import { useSelector,useDispatch } from 'react-redux';
import InputTasks from './InputTasks';
//import ListItems from './Listitems';
const App=()=>{
   
    const selector=useSelector((state)=>state.tasklist)
    const dispatch=useDispatch()
    const addingTodos=(task)=>{
        dispatch(addTask(task))
        }
    console.log(selector);
    return(
<React.Fragment>
    <div className="ui segment">
         <InputTasks handleOnClickBtn={addingTodos}/>
     </div>
     
</React.Fragment>
    
    ) 
    
}
export default App;