import React from "react";



const Todolist = (props) =>{


  



    return(
    <>
    <div className="todo_style">

 <li onClick={()=>{
    props.onSelect(props.id)
 }}> {props.text} </li>
 </div>
    </>
    )
}
export default Todolist;