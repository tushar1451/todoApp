import { useEffect, useState } from 'react';
import './App.css'
import { TodoProvider } from './contexts/TodoContext';
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';

function App() {
  const [todoitems, setTodoItems] = useState([]);
  const addTodo =(todo)=>{
    console.log("added todo item");
  setTodoItems((prev) => [{id: Date.now(), ...todo},...prev ])
}
  const updateTodo =(id, todo)=>{
    setTodoItems((prev) => prev.map((prevTodo) => (prevTodo.id === todo.id ? todo : prevTodo)))
  }
  const deleteTodo =(id)=>{
    setTodoItems((prev) => prev.filter((todoitems) => todoitems.id !== id))
  }  
  const toggleComplete = (id)=>{
    setTodoItems((prev) => prev.map((prevTodo) => prevTodo.id ===id ? {...prevTodo, completed:!prevTodo.completed} : prevTodo ))
  }
  useEffect(() =>{
    const todoitems = JSON.parse(localStorage.getItem('todoItems'));
    if (todoitems && todoitems.length>0)
      {
        setTodoItems(todoitems);
      }
  },[]);
  useEffect(() => {
    localStorage.setItem('todoItems', JSON.stringify(todoitems));
  }, [todoitems])


  return (
    <TodoProvider value={{todoitems, addTodo, deleteTodo, toggleComplete, updateTodo}}>
    <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */
                        <TodoForm/>
                        } 
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todoitems.map((todo)=>
                        (
                          <div key={todo.id}
                          className='w-full'>
                            <TodoItem todo = {todo}/>

                          </div>
                        ))}
                    </div>
                </div>
            </div>
            </TodoProvider>
  )
}

export default App
