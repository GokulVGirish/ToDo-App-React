import React,{useState} from "react";
const ToDoEdit=(props)=>{
    console.log("inside to do edit")
    const {data,editTask}=props
    const [value,setValue]=useState(data.data)
     const handleEditClick = () => {
       editTask(data, value); // Pass data and value as arguments
     };
    return (
      <div className="todo-head flex justify-between w-[90%] m-auto px-[0.5rem] py-[0.8rem] my-5 rounded-lg border border-stone-700">
        <input
          className="w-1/2 border p-[.5rem] rounded-lg border-blue-400"
          type="text"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          placeholder="enter"
        />
        <button
          className="p-[0.5rem] border border-black rounded-xl"
          type="button"
          onClick={handleEditClick}
        >
          editTask
        </button>
      </div>
    );
}
export default ToDoEdit