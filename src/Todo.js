import React, { useState, useEffect } from "react";
import List from "./components/List";
import Item from "./components/Item";
import Header from "./components/Header"
import TodoForm from "./components/TodoForm";
import Modal from "./components/Modal";
// import Theme from "./components/Theme";
import './Todo.css'


const SAVED_ITEMS = "savedItems"


function Todo(){

const [showModal, setShowModal] = useState(false)

const [items, setItems] = useState([]);

const [theme, setTheme] = useState(false);
const [theme2, setTheme2] = useState(false);

useEffect(()=>{
    let savedItems = JSON.parse(localStorage.getItem(SAVED_ITEMS))
    if(savedItems){
        setItems(savedItems)
    }setTheme(JSON.parse(localStorage.getItem('@todolist:theme')));
},[])

useEffect(()=>{
localStorage.setItem(SAVED_ITEMS, JSON.stringify(items))
localStorage.setItem('@todolist:theme', JSON.stringify(theme));
},[items, theme])

function onAddItem(text){
    let item = new Item(text);
 setItems([...items, item])
}
function onItemDeleted(item){
    let filteredItems = items.filter(it=>it.id != item.id)
    setItems(filteredItems)
}
function onDone(item){
    let updatedItems = items.map(it=>{
        if(it.id == item.id){
            it.done = !it.done;
        } 
        return it;
    }) 
    setItems(updatedItems);
}
function onHandleTheme() {
    setTheme(!theme);
}
function onHideModal(e){
    setShowModal(false)
        }
    return (
        <main className={theme ? "main dark" : "main"}>
            <Header theme={theme} onHandleTheme={onHandleTheme}/>
            <div className="content">
           <h1>My Tasks</h1>
        <TodoForm onAddItem={onAddItem}></TodoForm>
        <List onDone={onDone} onItemDeleted={onItemDeleted} items={items}></List>
       <Modal show={showModal} onHideModal={onHideModal}>
        <TodoForm onAddItem={onAddItem}></TodoForm></Modal>
       </div>
       </main>
    )
    }




export default Todo;