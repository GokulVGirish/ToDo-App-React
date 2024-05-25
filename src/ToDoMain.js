import React,{useState,useEffect} from "react";
import ToDoElement from "./ToDOElement";
import ToDoEdit from "./ToDoEdit"
import Supporter from "./Supporter";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";





const ToDO=()=>{

    const [value,setValue]=useState("")
    const [task,setTask]=useState([])
     const [day, setDay] = useState("");
     

    const addTask=()=>{
      if(value.trim()===""){
         toast.error("Task cannot be empty!", {
           position: "top-right",
           autoClose: 3000,
           hideProgressBar: false,
           closeOnClick: true,
           pauseOnHover: true,
           draggable: true,
           progress: undefined,
         });

      }else{
          setTask([
            ...task,
            {
              id: task.length + 1,
              data: value,
              status: false,
              isEditing: false,
            },
          ]);
          setValue("");
           setValue("");
           toast.success("Task added successfully!", {
             position: "top-right",
             autoClose: 3000,
             hideProgressBar: false,
             closeOnClick: true,
             pauseOnHover: true,
             draggable: true,
             progress: undefined,
           });
           
      }
                
              

    }
     useEffect(() => {
       const getToday = () => {
         const date = new Date();
         const today = date.getDay();
         const days = [
           "Sunday",
           "Monday",
           "Tuesday",
           "Wednesday",
           "Thursday",
           "Friday",
           "Saturday",
         ];
         return days[today];
       };
       const today = getToday();
       setDay(today);
     }, []);

    const statusChange=(status,id)=>{
       setTask(
         task.map((task) => {
           if (task.id ===id) {
             task.status = status;
           }
           return task;
         })
       );
        

    }
    const deleteTask=(todo)=>{
        setTask(task.filter(value=>todo.id!==value.id))

    }
      const editTask = (todo) => {
        console.log("inside")
        task.forEach((todo1) => {
          if (todo1.id === todo.id) {
            todo1.isEditing = true;
          }
        });
        setTask([...task]);
      };
       useEffect(()=>{
        console.log(task)
       },[task])

    
  const handleEdit=(todo,value)=>{
    console.log('calleed')
    task.forEach((task)=>{
        if(task.id===todo.id){
            task.data=value
            task.isEditing=false
        }
      

    })
      setTask([...task]);


  }
    console.log("render")
  
    return (
      <div className="todo-enclosed flex justify-evenly mt-10  items-start w-full">
        <Supporter
          head={"completed"}
          task={task.filter((todo) => todo.status === true)}
        />
        <div className="todo-center flex flex-col items-center w-[35rem] bg-yellow-400 p-[1.5rem] border border-black rounded-lg shadow-lg">
          <p className="text-black">Hey today is {day}</p>
          <h1 className="text-2xl font-bold text-black mb-4">
            Get things done
          </h1>
          <div className="todo-list w-full">
            <div className="todo-head flex justify-around mb-4">
              <input
                className=" bg-yellow-200 border p-[.5rem] rounded-lg border-yellow-400 w-80"
                type="text"
                value={value}
                onChange={(e) => {
                  setValue(e.target.value);
                }}
                placeholder="Enter your task"
              />
              <button
                onClick={addTask}
                className="p-[0.5rem] bg-black text-white rounded-xl"
              >
                Add Task
              </button>
            </div>
            {task.map((task) => {
              if (task.isEditing) {
                return (
                  <ToDoEdit
                    key={task.id}
                    data={task}
                    editTask={(todo, value) => handleEdit(todo, value)}
                  />
                );
              } else {
                return (
                  <ToDoElement
                    key={task.id}
                    data={task}
                    handleChange={statusChange}
                    handleDelete={() => deleteTask(task)}
                    handleEdit={() => editTask(task)}
                  />
                );
              }
            })}
          </div>
         
          <ToastContainer />
        </div>

        <Supporter
          head={"not completed"}
          task={task.filter((todo) => todo.status === false)}
        />
      </div>
    );
}
export default ToDO;