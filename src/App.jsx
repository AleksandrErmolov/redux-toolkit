import { useState } from 'react';
import './App.css';
import InputFild from './components/InputFild';
import Todolist from './components/Todolist';

function App() {

  const [todos, setTodos] = useState([])
  const [text, setText] = useState('')


  const addTodo = () => {
    if (text.trim().length) {
      setTodos([
        ...todos,
        {
          id: new Date().toISOString(),
          text,
          completed: false,
        }

      ])
      setText('')
    }
  }


  const removeTodo = (todoId) => {
    setTodos(todos.filter(todo => todo.id !== todoId))
  }

  const toggleTodoComplete = (todoId) => {
    setTodos(
      todos.map(todo => {
        if (todo.id !== todoId) {
          return todo
        } else {

          return {
            ...todo,
            completed: !todo.completed,
          }
        }
      })
    )
  }



  return (
    <div className='app'>
      <InputFild
        text={text}
        handleInput={setText}
        handleSubmit={addTodo}
      />
      <Todolist
        todos={todos}
        removeTodo={removeTodo}
        toggleTodoComplete={toggleTodoComplete} />
    </div>
  );
}

export default App;
