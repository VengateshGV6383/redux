import React from 'react';
const TaskMenu = ({totaltask,completedTask,notCompleted}) => {
    return (
        <div style={{margin:"1%"}}>
            
           <div className="ui compact menu">
               <span className="item">
                <i className="tasks icon"></i>Tasks
                <span className="floating ui teal label">{totaltask}</span>
               </span>
        
               <span className="item">
                <i className="bookmark icon"></i>Done
                <span className="floating ui green label">{`${completedTask}`}</span>
               </span>
               <span className="item">
                <i className="tags icon"></i>To Do
                <span className="floating ui red label">{`${notCompleted}`}</span>
               </span>
           </div>
        
            </div>
            
      );
}
 
export default TaskMenu;