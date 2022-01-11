import React from 'react'

export default function InputFild({text, handleInput, handleSubmit}) {
    return (
        <div>
            <label>
                <input type="text" value={text} onChange={(e) => handleInput(e.target.value)} />
                <button onClick={handleSubmit}>Add todo</button>
            </label>
        </div>
    )
}
 