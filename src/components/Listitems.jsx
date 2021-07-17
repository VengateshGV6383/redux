import React from 'react';
const ListItems = (props) => {
    return (  

    <div>
        <div class="active title">
                    <i class="dropdown icon"></i>
                    {props.id}
        </div>
        <div class="active content">
                <p>{props.text}</p>
        </div>
        <button className="ui positive button"></button>
    </div>
  
    );
}
 
export default ListItems;