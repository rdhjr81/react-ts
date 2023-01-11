import Todo from "../models/todo";
import TodoListItem from "./TodoListItem";

const Todos: React.FC<{ items: Todo[] }> = (props) => {
  return (
    <ul>
      {props.items.map((i) => <TodoListItem key={i.id} text={i.text}/>)}
    </ul>
  );
};
export default Todos;
