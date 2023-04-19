export default function TodoList({ todos, deleteTodo, completedItem }) {
    return <>
        <h1>To-Do List</h1>
        <ul>
            {todos.length == 0 && "List kosong"}
            {todos.map(item => {
                return <li key={item.id}>
                    <input type="checkbox"
                        id="i1"
                        checked={item.completed}
                        onChange={(e) => completedItem(item.id, e.target.checked)}
                    />
                    {item.title}
                    <button onClick={() => deleteTodo(item.id)}>Delete</button>
                </li>
            })}
        </ul>
    </>
}