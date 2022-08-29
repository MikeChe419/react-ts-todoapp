import React, {useState} from 'react'
import { Navbar } from './components/NavBar';
import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';
import { ITodo } from './interfaces';

const App: React.FC = () => {
    const [todos, setTodos] = useState<ITodo[]>([])


    //Создаем дело
    const addHandler = (title:string) => {
        const newTodo = {
            title: title,
            id: Date.now(),
            completed: false,
        }
        // setTodos([newTodo, ...todos])
        setTodos(prev => [newTodo, ...prev])
    }

    //обработка статуса выполнения дела
    const toggleHandler = (id: number) => {
       setTodos(prev => prev.map(todo => {
        if (todo.id === id) {
            todo.completed = !todo.completed
        }
        return todo  
       })) 
    }

    // Удаление дела
    const removeHandler = (id: number) => {
        setTodos(prev => prev.filter(todo => todo.id !== id))
    }

    return  (<>
    <Navbar />
    <div className='container'>
        <TodoForm onAdd={addHandler}/>

        <TodoList todos={todos} onToggle={toggleHandler} onRemove={removeHandler}/>
    </div>
    </>
    )
}

export default App;