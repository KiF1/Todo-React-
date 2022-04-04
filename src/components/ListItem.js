
import React from "react"
import Card from "./Card";

function DoneImg(props){
  if(props.done){ 
    //imagem done
    return (<img alt="done" src="./assets/approved.png"></img>)
  }else{
    //imagem undone
    return (<img alt="undone" src="./assets/unchecked.png"></img>)
  }
}

function ListItem(props){
 
    return (
        <li>
          <Card className={props.item.done?"done item": "item"}>
          {props.item.text}
          <div>
          <button onClick={()=>{props.onDone(props.item)}}><DoneImg done={props.item.done}></DoneImg></button>
          <button onClick={()=>{props.onItemDeleted(props.item)}}><img src="./assets/lixeira.png"></img></button>
          </div>
          </Card>
          </li>)} 
  
    
export default ListItem;