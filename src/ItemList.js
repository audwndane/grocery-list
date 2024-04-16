import Item from "./Item"

function ItemList({items, onDeleteItem, onCheckItem}) {
  // const item = [
  //   {id: 1, quantity: "1", name: "Milk", isChecked: false},
  //   {id: 2, quantity: "4", name: "Coffee", isChecked: false},
  //   {id: 3, quantity: "6", name: "Biscuits", isChecked: false}
  // ];

  console.log(items);

  return (
    <div id="Orderlist">
    <ul className="items">
      {items.map((i)=>(
        <Item itemObj={i} key={i.id} onDeleteItem={onDeleteItem} onCheckItem={onCheckItem}/>
      ))}
      {/* {item.map((item) => (
        <Item ItemList={item} key=(item.name) />
      ))} */}
    </ul>
    </div>
  )
}

export default ItemList;