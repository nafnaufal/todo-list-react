import { useState } from "react";

export default function TodoForm(p) {
    const [newItem, setNewItem] = useState("");

    
    const handleSubmit = (e) => {
        e.preventDefault()
        
        if (newItem === "") return;
        
        p.addTodo(newItem);
        setNewItem("")
    }

    return <form onSubmit={handleSubmit} action="">
        <label htmlFor="addField">Add new</label>
        <input
            type="text"
            id="addField"
            value={newItem}
            onChange={e => setNewItem(e.target.value)}
        />
        <input type="submit" value="Add" />
    </form>
}