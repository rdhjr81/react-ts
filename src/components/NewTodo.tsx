import {useRef} from 'react';
const NewTodo:React.FC<{onAddTodo: (todoText: string) => void}> = (props) =>{

    const todoTextInputRef = useRef<HTMLInputElement>(null);
    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const todoText = todoTextInputRef.current!.value;
        if(todoText.trim().length === 0){
            return;
        }
        props.onAddTodo(todoText.trim());
    }
    return <form onSubmit={submitHandler}>
        <label htmlFor="text">Todo text</label>
        <input name="text" type="text" ref={todoTextInputRef}/>
        <button>Add Todo</button>
    </form>
}

export default NewTodo;