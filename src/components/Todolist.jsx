import React from 'react'
import { useSelector } from 'react-redux'
import TodoItem from './TodoItem'


export default function Todolist({ toggleTodoComplete, removeTodo }) {

    const todos = useSelector(state => state.todos.todos)


    return (
        <ul>
            {
                todos.map(todo => <TodoItem key={todos.id} {...todo} />)

            }
        </ul>
    )
}
