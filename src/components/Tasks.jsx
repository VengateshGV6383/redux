import React, { useState } from 'react';
const ListItems = ({tasklist,filter,setCompleted}) => {
    const [idx,setActiveIdx]=useState(null);
    
    const setActiveDropdown=(index)=>{
        setActiveIdx(index);
    }
    
    return (  
    <React.Fragment>   
        {
            tasklist?.map((item,index)=>{
                return(
            <div onClick={()=>setActiveDropdown(index)} key={item.id} style={{height:"150px",overflow:"auto"}} >
            <div className={idx===index?"active title":"title"}>
                    <i className="dropdown icon"></i>
                    {`Task number : ${item.id}`}
           </div>
            <div className={idx===index?"active content":"content"}>
                <div>
                    {item.task}{item.isCompleted ?<p className="ui green left pointing label">Done</p>:<p className="ui left pointing label">Not yet completed</p> }
                </div>
                
                
            </div>
             <button className="ui button" style={{margin:"1%"}} onClick={()=>filter(item.id)}>Delete &emsp;<i className="trash icon"></i></button>
             <button className="ui positive button" style={{marigin:"1%"}} onClick={()=>setCompleted({id:item.id,task:item.task})}>Mark As Done</button>
         </div>
        

                )
            })
        } 
        
    </React.Fragment>
    
  
    );
}
 
export default ListItems;