import { useState } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import {addTodo} from './store/todoSlice'
import InputFild from './components/InputFild';
import Todolist from './components/Todolist';

function App() {
  const [text, setText] = useState('')
  const dispatch = useDispatch();

  const addTask = () => { 
    dispatch(addTodo({ text }))
    setText('')
  }

  return (
    <div className='app'>
      <InputFild
        text={text}
        handleInput={setText}
        handleSubmit={addTask}
      />
      <Todolist />
    </div>
  );
}

export default App;
