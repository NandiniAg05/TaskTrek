import React from 'react'
import { BiEdit } from "react-icons/bi"
import { AiOutlineDelete } from "react-icons/ai"

const Todo = ({text, tim, updateMode, deleteTodo}) => {
  return (
    <div className="todo">
        <div className="text">{text}</div>
        <div className="date">{tim}</div>
        <div className="icons">
            <BiEdit className="icon" onClick={updateMode}/>
            <AiOutlineDelete className="icon delete" onClick={deleteTodo}/>
        </div>
    </div>
  )
}

export default Todo;