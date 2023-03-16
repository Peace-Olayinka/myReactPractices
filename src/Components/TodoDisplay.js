import React from "react";
import { useState } from "react";

const TodoDisplay = ({allTodo,count,deleteTodo,editTodo, mark}) => {
    const [selectedIndex, setselectedIndex] = useState("")
    const [editedTodo, seteditedTodo] = useState({})
    const [todoName, settodoName] = useState("")
    const [taskDone, settaskDone] = useState(false)
    
  
    const edit =(index)=>{
        setselectedIndex(index)
       let selectedTodo = allTodo[index]
        seteditedTodo(selectedTodo)
        settodoName(selectedTodo.todoName)
    }
  return (
    <>
        <div className="container-fluid">
            <div className="row fw-bold">
                <div className="col-xs-11 col-lg-8 row mx-auto gap-2 py-3 my-3 justify-content-center bg-light shadow-sm">
                    <div className="row py-1 text-primary fw-bold shadow-sm ">
                        <div className="col-7"> <h3>Todo(s)</h3></div>
                        <div className={count>0? "text-danger col-5":"text-success col-5"}>  
                            {count>0?<p>You have {count} pending activites</p>:
                            <p>You have no pending activities</p>}
                        </div>
                    </div>
                    {
                        allTodo.map((item, index)=>(
                            <div className={item.taskDone? "row bg-white text-success shadow-sm py-1":"row bg-white text-danger shadow-sm py-1"}  key={index}>
                                <div className="col-xs-10 col-lg-8">{item.todoName}</div>
                                <div className="col-xs-10 col-lg-4 text-end">

                                    <button className={item.taskDone? "btn btn-success m-1":"btn btn-secondary m-1"} disabled={item.taskDone?true:false} onClick={()=>mark(index)}> {item.taskDone? "Done" : "Mark"} </button>

                                    <button className="btn btn-warning m-1" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" disabled={item.taskDone?true:false} onClick={()=>edit(index)}>Edit</button>
                                    {/* Modal  */}
                                    <div  className="modal fade"  data-bs-backdrop="static"  id="exampleModal"  tabIndex="-1"  aria-labelledby="exampleModalLabel" aria-hidden="true" >
                                        <div className="modal-dialog">
                                            <div className="modal-content">
                                                <div className="modal-header bg-success text-white">
                                                    <h1 className="modal-title fs-4" id="exampleModalLabel">Edit to-do here:{editedTodo.todoName}</h1>
                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div className="modal-body">
                                                    <input
                                                    type="text"
                                                    placeholder="Enter Your First Name"
                                                    className="my-2 form-control"
                                                    onChange={(e) => settodoName(e.target.value)}
                                                    value={todoName}
                                                    />
                                                </div>
                                                <div className="modal-footer">
                                                    <button type="button"className="btn btn-secondary"data-bs-dismiss="modal"> Close</button>
                                                    <button type="button" className="btn btn-success" data-bs-dismiss="modal"
                                                    onClick={() =>editTodo(selectedIndex, {todoName,taskDone})}>Save changes</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* modal end */}
                                    <button className="btn btn-danger m-1" onClick={()=>deleteTodo(index)}>Delete</button>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    </>
  );
};

export default TodoDisplay;
