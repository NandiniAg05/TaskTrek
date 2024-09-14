import React, { useEffect, useState } from 'react';
import Todo from './todo';
import { addToDo, getAllTodo, updateTodo, deleteTodo } from '../utils/HandleApi';

const Task =() =>{ 
    function getDate() {
        const today = new Date();
        const month = today.getMonth() + 1;
        const year = today.getFullYear();
        const date = today.getDate();
        return `${month}/${date}/${year}`;
    }
    function getTime() {
        const today = new Date();
        const hours = today.getHours();
        const minutes = today.getMinutes();
        const second = today.getSeconds();
        return `${hours}:${minutes}:${second}`;
    }

    const [toDo, setToDo] = useState([])
    const [text, setText] =useState("")
    const [tim, setTim] =useState(null)
    const [isUpdating, setIsUpdating] =useState(false)
    const [toDoId, setToDoId] = useState("")
    const [currentDate, setCurrentDate] = useState(getDate());
    const [currentTime, setCurrentTime] = useState(getTime());

    useEffect (() => {
        getAllTodo(setToDo)
    }, [])

    const updateMode =(_id, text, tim)=>{
        setIsUpdating(true)
        setText(text)
        setTim(tim)
        setToDoId(_id)
    }
    
    return(
        <div className="container">
            <div className="top">
                <div className="inputF">
                    <button className="add"
                    onClick={isUpdating ?
                    ()=>updateTodo(toDoId, text, setToDo, setText, tim, setTim, setIsUpdating)
                    : ()=>addToDo(text, setText, tim, setTim, setToDo)}>
                        {isUpdating ? "Update" : "Add Task"}
                        </button>
                    <input type="text" name="" id="" value={text} onChange={(e) =>setText(e.target.value)}/>
                    {/* <input type="date" name="" id="" value={tim} onChange={(e) =>setTim(e.target.value)}/> */}
                </div>

                <div className="profile">
                    <p>Have a nice day</p>
                    <img src="" alt="" className="profile-pic"/>
                </div>
            </div>

            <div className="content">
                <div className="left-side">
                    <div className="achievements">
                        <p className="achieve">Achievements of the week</p>
                        <div className="circles">
                            <div className="info">
                                <p>Created</p>
                                <div className="circle">
                                    <p className="number">113</p>
                                    <p className="task">Tasks</p>
                                </div>
                            </div>
                            <div className="info">
                                <p>Completed</p>
                                <div className="circle">
                                    <p className="number">100</p>
                                    <p className="task">Tasks</p>
                                </div>
                            </div>
                            <div className="info">
                                <p>Deleted</p>
                                <div className="circle">
                                    <p className="number">24</p>
                                    <p className="task">Tasks</p>
                                </div>
                            </div>
                        </div>
                    </div>
                     
                     <div className="list">
                        <p className="achieve">Active Tasks</p>
                        {toDo.map((item) => 
                        <Todo key={item._id} 
                        text={item.text} 
                        tim={item.tim}
                        updateMode ={() => updateMode(item._id, item.text, item.tim)}
                        deleteTodo ={() =>deleteTodo(item._id, setToDo)}/>)}
                        
                     </div>
                </div>

                <div className="right-side">
                    <div className="achievements right">
                        <p className="achieve">Tic tic tic</p>
                        <div className="today">
                            <div className="time">
                                <p>Current Time</p>
                                <p className='timeb'>{currentTime}</p>
                            </div>
                            <div className="time">
                                <p>And today we have</p>
                                <p className='timeb'>{currentDate}</p>
                            </div>
                        </div>
                    </div>

                    <div className="achievements right">
                        <p className="achieve">Observations</p>
                        <p className='texta'>You create the most tasks on monday</p>
                        <p className='texta'>You complete the most tasks on Tuesday</p>
                    </div>

                    <div className="achievements right">
                        <p className="achieve">Fact of the day</p>
                        <p className='texta'>A person who wakes up at 6am, according to statistics, finishes all taks at 18:00pm.</p>
                    </div>

                    <div className="achievements right">
                        <p className="achieve">Progress Chart</p>
                        <p className='texta'>You create the most tasks on monday</p>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Task;