import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../CreateSlice';
import InputTasks from './InputTasks';
import TaskMenu from './TaskMenu';
const ListItems = ({tasklist,filter,setCompleted}) => {
    const [idx,setActiveIdx]=useState(null);
    const dispatch=useDispatch()
    const addingTodos=(task)=>{
        dispatch(addTask(task))
        setUpdate(null)
       
        }
    const [update,setUpdate]=useState(null);
    const totalIsCompleted=(list)=>{
        let count=list.filter(item=> item.isCompleted===true)
        return count.length;
    }
    const setActiveDropdown=(index)=>{
        setActiveIdx(index);
    }
    const totalTask=(list)=>{
        return list.length;
    }
    
    return (  
    <React.Fragment>   
        <TaskMenu totaltask={totalTask(tasklist)} completedTask={totalIsCompleted(tasklist)} notCompleted={totalTask(tasklist) - totalIsCompleted(tasklist) }/>
        {
            tasklist?.map((item,index)=>{
                return(
            <div onClick={()=>setActiveDropdown(index)} key={item.id} style={{maxHeight:"150px",overflow:"auto"}} >
            
            <div className={idx===index?"active title":"title"}>
                    <i className="dropdown icon"></i>
                    {`Task number : ${item.id}`}&emsp;&emsp;<i className="calendar icon"></i>{`${item.date}`}
           </div>
           
               <div className={idx===index?"active content":"content"}>
                   {
                       update===index?
                       
                        <InputTasks btnName="Update" value={item} handleOnClickBtn={addingTodos}/>
                        :
                        <div  style={{margin:"1%"}}>
                            {item.task}
                            {item.isCompleted ?<p className="ui green left pointing label">Done</p>:<p className="ui left pointing label">Not yet completed</p> }
                        </div>
                   }
                        
                <div>
           
            
            <p>
            <button className="ui teal button" style={{margin:"1%"}} onClick={()=>setUpdate(index)}><i className="pencil alternate icon"></i>&nbsp;Edit</button>
            <button className="ui orange button" style={{margin:"1%"}} onClick={()=>filter(item.id)}><i className="trash white icon"></i>&nbsp;Delete</button>  
            <button className="ui button" style={{marigin:"1%"}} onClick={()=>setCompleted({id:item.id,task:item.task,date:item.date})}><i className="bookmark white icon"></i>&nbsp;Completed</button>
            </p>
            </div>
             </div>
         </div>
        

                )
            })
        } 
        
    </React.Fragment>
    
  
    );
}
 
export default ListItems;