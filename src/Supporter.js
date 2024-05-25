import React from "react";
function Supporter(props){
    const {head,task}=props
    return (
      <div className="todo-supporter w-80  p-4 border border-black rounded-lg shadow-lg bg-white">
        <h4 className="tex-xl font-semibold text-gray-800 mb-4">{head}</h4>
        <div className="todo-body">
          {task.length > 0 ? (
            task.map((todo) => {
              return (
                <div
                  key={todo.id}
                  className="supporter-element p-2 mb-2 border-b border-gray-200"
                >
                  <p className="text-gray-700">{todo.data}</p>
                </div>
              );
            })
          ) : (
            <p className="text-gray-500 italic">No tasks {head} yet!!</p>
          )}
        </div>
      </div>
    );

}
export default Supporter