import React from 'react'
import TodoItem from './TodoItem'

export default function Todolist({ todos, toggleTodoComplete, removeTodo }) {
    return (
        <ul>
            {
                    todos.map(todo => <TodoItem
                    key={todos.id} {...todo}
                    toggleTodoComplete={toggleTodoComplete}
                    removeTodo={removeTodo} />)

            }
        </ul>
    )
}
