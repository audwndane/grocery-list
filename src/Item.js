import ItemList from "./ItemList"

function Item({itemObj, onDeleteItem, onCheckItem}) {

  return (
    <div className="items">
      {/* <li className="lister">{itemList.quantity + " "+itemList.name}</li> */}
      <li className="lister">{itemObj.quantity + " "+ itemObj.name}</li>
      <button className="trash" onClick={()=>onDeleteItem(itemObj.id)}>Trash</button>
      <button className="check" onClick={()=>onCheckItem(itemObj.id)}>{ItemList.isChecked ? "checker" : <i className="faze"></i>}Check</button>
    </div>
  )
}

export default Item