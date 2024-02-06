import { useEffect, useState } from 'react'
import './App.css'
import { AiOutlineDelete } from 'react-icons/ai';
import { BsCheckLg } from 'react-icons/bs';
import React from 'react';


function App() {

  const handleAddTodo = () =>{
    let newTodoItem = {
      title:newTitle,
      description: newDescription
    }

    let updatedTodoArray = [...Todos]
    updatedTodoArray.push(newTodoItem)
    setTodos(updatedTodoArray)

    localStorage.setItem('todolist',JSON.stringify(updatedTodoArray))
  }

  const [isCompleteScreen, setisCompleteScreen] = useState(false)
  const[Todos,setTodos] = useState([])
  const[newTitle,setNewTitle] = useState("")
  const[newDescription,setNewDescription] = useState("")

  const handleDeleteTodo = (index)=>{
    let reducedTodo = [...Todos];
    reducedTodo.splice(index); //removes item from certain index
    localStorage.setItem('todolist',JSPM.stringify(reducedTodo))

    setTodos(reducedTodo)
  }

  /*useEffect(()=>{
    let savedTodo = JASON.parse(localStorage.getItem('todolist'));
    if (savedTodo){
      setTodos(savedTodo);
    }
  },[])*/

  return (
    <>
      <h1>This is your to do list!</h1>

      <div className="todo-wrapper">
        <div className="todo-input">
          <div className='todo-input-item' >
            <label>Title</label>
            <input type="text" placeholder='Add your tasks' value={newTitle} onChange={(e)=>setNewTitle(e.target.value)} />
          </div>
          <div className='todo-input-item' >
            <label>Description</label>
            <input type="text" placeholder='Description'value={newDescription} onChange={(e)=>setNewDescription(e.target.value)} />
          </div>
          <div className='todo-input-item' >
            <button type='button' onClick={handleAddTodo}  className='primary-btn' >Add</button>
          </div>
        </div>

        <div className="btn-area">
          <button className={`sec-btn ${isCompleteScreen === false && 'active'}`} onClick={() => setisCompleteScreen(false)}>Todo</button>
          <button className={`sec-btn ${isCompleteScreen === true && 'active'}`} onClick={() => setisCompleteScreen(true)}>Completed</button>
        </div>

        <div className='todo-list'>

          {Todos.map((item,index)=>{
            return(
              <div className='todo-list-item' key={index} >
              <h3>{item.title}</h3>
              <p>{item.description}</p>
  
              <div>
                <AiOutlineDelete
                  title='Delete?'
                  className='trash-icon'  
                  onClick={()=>handleDeleteTodo(index)}/>
                <BsCheckLg
                  title='Completed' className='check-icon' />
              </div>
              
            </div>
            )
          })}

        </div>

      </div>

    </>
  )
}

export default App
