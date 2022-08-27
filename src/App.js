import React from "react";
import { useState } from "react";
import Todolist from "./Todolist";


const App = () => {
  const [name, setName] = useState();
  const [item, setItem] = useState([]);

const addItem  = () =>{
  
  setItem((oldItems)=>{
    return [...oldItems,name]
  });
  setName('');

}


  const inputEvent = (event) => {
    setName(event.target.value);
  };

  const deletItem = (id)=>{
    console.log("deleted")

    setItem((oldItems)=>{
      return oldItems.filter((arrEle,index)=>{
        return index !== id;
      })
    })


  }
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>To Do List</h1>
  
          <br />
          <input type="text" placeholder="Add an Items" onChange={inputEvent} value={name} />

          <button onClick={addItem}>+</button>
          <ol>
            {/* <li>{name}</li> */}

            {item.map((itemVal,index)=>{
             return <Todolist text={itemVal} id={index} key={index} onSelect={deletItem}/>
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default App;
