import ToDO from "./ToDoMain";

function App() {
  return (
    <div
      className="todo-main pt-20 bg-blue-950 h-screen flex justify-start flex-col items-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/gif1.gif')",
      }}
    >
      <h1 className="text-5xl font-extrabold text-white mb-6 animate-pulse transform hover:scale-105 transition-transform duration-300">
        Gokul's <span className="text-yellow-400">Todo</span> App
      </h1>

      <ToDO />
    </div>
  );
}
export default App;
