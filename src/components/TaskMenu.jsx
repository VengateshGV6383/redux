import React from 'react';
const TaskMenu = ({totaltask,completedTask,notCompleted}) => {
    return (
        <div style={{margin:"1%"}}>

               
               <div className="ui compact menu">
               
               <span className="item">
                <i className="tasks icon"></i>Tasks
                {totaltask!==0?<span className="floating ui teal label">{`${totaltask}`}</span>:null}
               </span>
        
               <span className="item">
                <i className="bookmark icon"></i>Done
                {completedTask!==0?<span className="floating ui green label">{`${completedTask}`}</span>:null}
               </span>
               <span className="item">
                <i className="tags icon"></i>To Do
                {notCompleted!==0?<span className="floating ui red label">{`${notCompleted}`}</span>:null}
               </span>
           </div>
           
        </div>
            
      );
}
 
export default TaskMenu;