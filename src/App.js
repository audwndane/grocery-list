import './App.css';
import Header from './Header.js';
import Form from './Form.js';
import ItemList from './ItemList';
import { useState } from "react";

function App() {
  const [items, setItems] = useState([])

  const [sortBy, setSortBy] = useState("name");
  let sortedItems;
  if (sortBy === "input") sortedItems = items;
  if (sortBy === "name")
    sortedItems = items.slice().sort((a, b) => a.name.localeCompare(b.name));
  if (sortBy === "checked") items.slice().sort((a, b) => Number(b.number));
  
  function handleAddItems(item){
    setItems(items => [...items, item])
}
function handleDelete(id){
setItems((items) => items.filter((item) => item.id !== id))
}
function handleCheck(id){
  setItems((items) => items.map((item) => item.id === id ? {...item, isChecked: !item.isChecked } : item ));
} 
function handleClearList(){
  const confirmed = window.confirm("Are you sure you want to Clear Items?");
  if(confirmed){
    setItems([]);
  } 
}

  return (
    <div>
    <Header />
    <Form onAddItem={handleAddItems} />
    <ItemList items={items} onDeleteItem={handleDelete} onCheckItem={handleCheck}/>
     <button onClick={handleClearList}>Clear</button>
      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        <option value="input">Input</option>
        <option value="Name">Name</option>
        <option value="checked">Status order</option>
      </select>
    </div>
  )
}

export default App;