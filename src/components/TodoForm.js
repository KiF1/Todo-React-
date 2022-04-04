import React, { useState } from "react";

function TodoForm(props){

    const [text, setText] = useState("");
  

    function handleChange(event){
        let texto = event.target.value;
        setText(texto);
    }

    function additem(event){
        event.preventDefault();
        if(text){
        // setItems([...items, text];
        props.onAddItem(text);
        setText("");
       }
    }
    return(
    
    <form className="tasksForm">
            <input  onChange={handleChange} type="text" value={text}></input>
            <button className={props.theme ? "dark" : ""} onClick={additem}>+</button>
        </form>
)
}

export default TodoForm