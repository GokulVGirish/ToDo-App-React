import React from "react"
const ToDoElement=(props)=>{
   const { data, handleChange, handleDelete, handleEdit } = props;
    return (
      <div className="todo-element flex w-[90%] m-auto px-[0.5rem] py-[0.8rem] my-5 rounded-lg justify-between border border-stone-700">
        <div className="todo-data flex  gap-[1rem] items-center">
          <input
            type="checkbox"
            checked={data.status}
            onChange={(e) => {
              handleChange(e.target.checked, data.id);
            }}
          />
          <p>{data.data}</p>
        </div>
        <div className="icons  flex gap-[1rem] items-center">
          <i className="fas fa-edit" onClick={handleEdit}></i>
          <i className="fas fa-trash" onClick={handleDelete}></i>
        </div>
      </div>
    );


}
export default ToDoElement