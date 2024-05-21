import "./App.css"

export default function App() {
  return(
    <>
    <form className="new-item-form">
      <div className="form-row">

        <label htmlFor="item">New item</label>
        <input type="text" id="item" />

      </div>
    </form>
    <h1 className="header">Todo list</h1>
    <ul className="list">
      <li>
        <label>
          <input type="checkbox"/>
          item 1
        </label>
        <button className="delete-btn">delete</button>
      </li>
    </ul>
    </>
  )
  
}