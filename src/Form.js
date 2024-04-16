import { useState } from "react"

function Form({onAddItem}) {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);

    

    function handleSubmit(e){
        e.preventDefault();
        if (!name) return;

        const newItem = {name, quantity, isChecked: false, id: Date.now()};
        console.log(newItem);
        setName("");
        setQuantity(1);
        onAddItem(newItem);
    }

    return (
        <div className="form">
            <form onSubmit={handleSubmit}>
            <select value = {quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
                
                {/* <option value = "1">1</option>
                <option value = "2">2</option>
                <option value = "3">3</option>
                <option value = "4">4</option>
                <option value = "5">5</option> */}

                {Array.from({ length: 30 }, (_, n) => n + 1).map((num) =>(
                <option value={num}>{num}</option>
                ))}
            </select>  
            <input 
                type = "text" 
                placeholder = "Add an Item.."
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <button type="submit">Get this!</button>  
            </form>
        </div>
    );
}

export default Form

