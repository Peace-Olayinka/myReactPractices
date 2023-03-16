import React from "react";
import { useState } from "react";

const TodoInput = ({addTodo, clearAllTodo}) => {
    const [todoName, settodoName] = useState("")
    const [taskDone, settaskDone] = useState(false)
  return (
    <>
      <h1 className="text-center bg-secondary text-white py-2">
        {" "}
        To-do Page{" "}
      </h1>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-11 col-lg-8 row shadow-sm my-4 py-2 mx-auto">
            <div className="col-xs-10 col-lg-8">
              <input
                type="text"
                placeholder="Enter new to-do"
                className="form-control"
                onChange={(e)=>(settodoName(e.target.value))}
              />
            </div>
            <div className="col-xs-6 col-lg-4 text-end">
              <button className="btn btn-primary m-1" onClick={()=>addTodo({todoName,taskDone})}>Add</button>
              <button className="btn btn-danger m-1" onClick={()=>clearAllTodo()}>Clear All</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoInput;
