import { useState, useEffect } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

export default function App() {
  const [todoItem, setTodoItem] = useState(() => {
    const todoLocal = localStorage.getItem("TODO");

    if(todoLocal == null) return [];

    return JSON.parse(todoLocal);

  });

  useEffect(() =>{
    localStorage.setItem("TODO", JSON.stringify(todoItem))
  }, [todoItem])

  const addItem = (itemTitle) => {
    setTodoItem(currentTodoItem => {
      return [
        ...currentTodoItem, {
          id: crypto.randomUUID(),
          title: itemTitle,
          completed: false
        }
      ]
    })
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
  
  const deleteTodo = (id) => {
    setTodoItem(currentTodoItem => {
      return currentTodoItem.filter(item => item.id !== id);
    })

  }
  return (
    <>
      <TodoForm addTodo={addItem}/>
      <TodoList todos={todoItem} completedItem={completedItem} deleteTodo={deleteTodo} />
    </>
  )
}