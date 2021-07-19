import React from 'react';
import { useState } from 'react';

const InputTasks=({handleOnClickBtn})=>{

    const [task,setTask]=useState(' ');
    const handleonChange=(e)=>{
        setTask(e.target.value);
    }
    const buttonClicked=()=>{
        if(task.length<=100)
            handleOnClickBtn(task);
        else
            window.alert("Dont provide any tasks higher than 100 characters")
        setTask(" ");
    }
    return (
        <div className="ui form">
            <div className="field">
                <label htmlFor="todoinp">Input your Tasks</label>
                <input type="text" id="todoinp" value={task} onChange={handleonChange}/>
            </div>
            <button className="ui primary button" onClick={buttonClicked}>Add</button>
        </div>
    )
}

export default InputTasks;