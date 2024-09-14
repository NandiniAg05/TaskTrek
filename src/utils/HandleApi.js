import axios from 'axios'

const baseUrl = "https://tasktrek-backend.onrender.com"

const getAllTodo = (setToDo) =>{
    axios
    .get(baseUrl)
    .then(({data})=> {
        console.log('data-->', data);
        setToDo(data)
    })
}

const addToDo =(text, setText, tim, setTim, setToDo)=>{
    axios
    .post(`${baseUrl}/save`, {text, tim})
    .then((data) => {
        console.log(data);
        setText("")
        setTim(null)
        getAllTodo(setToDo)
    })
    .catch((err) =>console.log(err))
}

const updateTodo =(toDoId, text, setToDo, setText,tim, setTim, setIsUpdating)=>{
    axios
    .post(`${baseUrl}/update`, {_id: toDoId, text, tim})
    .then((data) => {
        setText("")
        setTim(null)
        setIsUpdating(false)
        getAllTodo(setToDo)
    })
    .catch((err) =>console.log(err))
}

const deleteTodo =(_id, setToDo)=>{
    axios
    .post(`${baseUrl}/delete`, {_id})
    .then((data) => {
        getAllTodo(setToDo)
    })
    .catch((err) =>console.log(err))
}

export {getAllTodo, addToDo, updateTodo, deleteTodo}