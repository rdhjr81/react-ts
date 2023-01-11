import "./App.css";
import {useState} from 'react';
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import Todo from "./models/todo";

function App() {
  const initialTodos = [new Todo("Learn sewing"), new Todo("Wash dishes")];
  const [todos, setTodos] = useState<Todo[]>([]);
  
  const addTodoHandler = (newTodoText: string) => {
    const newTodo = new Todo(newTodoText);
    /*
    //this is wrong, need to update state using prev state 
    const updatedTodos =[...todos, newTodo];
    setTodos(updatedTodos);
    */

    //Correct:
    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    })
  };
  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler}/>
      <Todos items={todos} />
    </div>
  );
}

export default App;
