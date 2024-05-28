import { useState } from "react"
import "./App.css"

export default function App(){
  const [newItem,setNewItem] = useState("")

  const [todos,setTodos] =useState([])


function handleSubmit(e){
  e.preventDefault()/*prevents page from refreshing*/

  setTodos(currentTodos => {
    return[
      ...currentTodos,
      {  id:crypto.randomUUID(),title: newItem ,
        completed:false},
    ]
  })

  setNewItem("")
}
function toggleTodo(id,completed){
  setTodos(currentTodos => {
    return currentTodos.map(todo => {
      if(todo.id === id){
        return{...todo ,completed}
      }
      return todo
    })
  })
}

function deleteTodo(id){
setTodos(currentTodos=>{
  return currentTodos.filter(todo =>  todo.id !== id)
})
}


  return(
    <>
    <form onSubmit={handleSubmit}>
<div className="form-row">

  <label htmlFor="new-item" >
    <input value = {newItem} 
    type="text" 
    id="new-item"
    onChange={e =>setNewItem(e.target.value)}
    
    />new item
  </label>
</div>
<button className="add-btn">Add</button>
    </form>

    <div className="item-list">
      <h2 className="header">TO DO LIST</h2>
      <ul>
        {todos.length === 0 && "no todos"}
        {todos.map(todo =>{
          return (
            <li key={todo.id}>
          <label htmlFor="item">
            <input 
            type="checkbox" 
            id="item"  
            checked={todo.completed} 
            onChange={e => toggleTodo(todo.id,e.target.checked)}
            />
            {todo.title}
          </label>
          <button 
          className="delete-btn"
          onClick={() => deleteTodo(todo.id)}
          >delete</button>
        </li>
          )
        })}
        

        
       
      </ul>
    </div>
    
    </>
  )
}