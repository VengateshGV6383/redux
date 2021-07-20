import React from 'react';
import { useState } from 'react';

const InputTasks=({handleOnClickBtn,btnName,value})=>{
    const initialState = value? value.task:" ";
    const [task,setTask]=useState(initialState);
    const handleonChange=(e)=>{
        setTask(e.target.value);
    }
    const maxWidth=btnName==="Update"?"50%":"100%";
    const buttonClicked=()=>{
        if(task.length<=100 && task!==" "){
            let id=0;
            if(localStorage.getItem("userid")){
                id=parseInt(localStorage.getItem("userid"));
                localStorage.setItem("userid",`${id+1}`)
            }else{
                localStorage.setItem("userid",`${id+1}`)
            }
            if(value){
                handleOnClickBtn({task:task,isCompleted:value.isCompleted,id:value.id,date:value.date})
    
            }
            else{
                let date=`${new Date()}`;
                handleOnClickBtn({task:task,isCompleted:false,date:date.slice(0,24),id:id})
            }
            //let todo=value?{task:value.task,id:value.id,isCompleted:value.isCompleted,date:value.date}:{task:task,id:id,isCompleted:false,date:new Date()}
        

        }
        else
            window.alert("Dont provide any tasks higher than 100 characters")
        setTask(" ");
    }
    return (
        <div className="ui form">
            <div className="field">
                <label htmlFor="todoinp">Input your Tasks</label>
                <input type="text" id="todoinp" value={task} onChange={handleonChange} placeholder="Maximum of 100 characters" style={{maxWidth:maxWidth}}/>
                {value?<button className="ui positive button" style={{marginLeft:"1%"}} onClick={buttonClicked}>{btnName}</button>:null}
            </div>
            {value?null:<button className={btnName==="Add"?"ui primary button":"ui positive button"} onClick={buttonClicked}>{btnName}</button>}
        </div>
    )
}

export default InputTasks;