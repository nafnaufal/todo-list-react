import { useState } from "react";

export default function App() {
  const [newItem, setNewItem] = useState("");
  const [todoItem, setTodoItem] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault()

    setTodoItem(currentTodoItem => {
      return [
        ...currentTodoItem, {
          id: crypto.randomUUID(),
          title: newItem,
          completed: false
        }
      ]
    })
    setNewItem("")
  }
  const completedItem = (id, checked) => {
    setTodoItem(currentTodoItem => {
      return currentTodoItem.map(item => {
        if (item.id === id) {
          return { ...item, completed:checked }
        }
        return item
      })
    })

  }
  
  const deletTodo = (id) => {
    setTodoItem(currentTodoItem => {
      return currentTodoItem.filter(item => item.id !== id);
    })

  }
  return (
    <>
      <form onSubmit={handleSubmit} action="">
        <label htmlFor="addField">Add new</label>
        <input
          type="text"
          id="addField"
          value={newItem}
          onChange={e => setNewItem(e.target.value)}
        />
        <input type="submit" value="Add" />
      </form>
      <h1>To-Do List</h1>
      <ul>
        {todoItem.length == 0 && "List kosong"}
        {todoItem.map(item => {
          return <li key={item.id}>
            <input type="checkbox"
              id="i1"
              checked={item.completed}
              onChange={(e) => completedItem(item.id, e.target.checked)}
            />
            {item.title}
            <button onClick={() => deletTodo(item.id)}>Delete</button>
          </li>
        })}
      </ul>
    </>
  )
}