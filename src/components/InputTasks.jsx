import React from 'react';
import { useState } from 'react';

const InputTasks=({handleOnClickBtn})=>{

    const [task,setTask]=useState(' ');
    return (
        <div className="ui form">
            <div className="field">
                <label htmlFor="todoinp">Input your Tasks</label>
                <input type="text" id="todoinp" value={task} onChange={(e)=>setTask(e.target.value)}/>
            </div>
            <button className="ui primary button" onClick={()=>handleOnClickBtn(task)}>Add</button>
        </div>
    )
}

export default InputTasks;