import React from "react";
import { useState } from "react";
import TodoDisplay from "./TodoDisplay";
import TodoInput from "./TodoInput";

const TodoMain = () => {
    const [allTodo, setallTodo] = useState([])
    const [count, setcount] = useState(allTodo.length)
   
    const addTodo = (newtodo)=>{
      if (newtodo.todoName=="") {
        alert("task can not be empty")
      }else{
        setallTodo([...allTodo, newtodo])
        setcount (count+1)   
        console.log(allTodo) 
      }
    }

    const deleteTodo = (todoIndex)=>{
      let newAllTodo = allTodo.filter((item, index)=>(index!=todoIndex))
      setallTodo([...newAllTodo])
      if ( allTodo[todoIndex].taskDone == true) {
        setcount(count)   
      }else{
        setcount(count-1)  
      }
      console.log(allTodo) 
    }

    const editTodo = (todoIndex, editedTodo)=>{
      allTodo.splice(todoIndex,1,editedTodo)
      setallTodo([...allTodo])
      setcount(count)   
      console.log(allTodo) 
    }

    const clearAllTodo = ()=>{
      setallTodo([])
      setcount(0)
      // allTodo.splice(0,allTodo.length)
      // setallTodo([...allTodo])
      //setcount(0) 
    }

    const mark=(todoIndex)=>{
      allTodo[todoIndex].taskDone = true
      setcount(count-1)   
    }
    return (
    <>
      <TodoInput addTodo={addTodo} clearAllTodo={clearAllTodo}/>
      <TodoDisplay  allTodo={allTodo} count={count} deleteTodo={deleteTodo}  editTodo={editTodo} mark={mark} />
    </>
  );
};

export default TodoMain;
