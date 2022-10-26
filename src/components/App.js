import React, { useState } from "react";
import ToDoItems from "./ToDoItems";

function App() {
  const [inputText, setInputText] = useState("");
  const [item, setItem] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }
  function addItem() {
    setItem((prevItem) => {
      return [...prevItem, inputText];
    });
    setInputText("");
  }
  function deleteItem(id) {
    setItem((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleChange} value={inputText} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {item.map((toDoItem, index) => (
            <ToDoItems
              key={index}
              id={index}
              text={toDoItem}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
export default App;
