// src/App.jsx

import { use, useState } from "react";

function App() {
  const [availableItems, setAvailableItems] = useState([
    {
      id: 1,
      name: "Black T shirt",
      price: 5
    },
    {
      id: 2,
      name: "Hanger Set",
      price: 8
    },
    {
      id: 3,
      name: "Thoub",
      price: 12
    },
    {
      id: 4,
      name: "Computer Bag",
      price: 20
    },
    {
      id: 5,
      name: "Couch",
      price: 50
    },
    {
      id: 6,
      name: "Gaming Chair",
      price: 70
    }
  ])
  const [shoppingCart,setShoppingCart]= useState([])
  const [availableBalance, setAvailableBalance]= useState(100)

  function handleAddItem(clickedItem) {
    console.log("clicked on", clickedItem);

    const filteredItems = availableItems.filter((oneItem) => {
      return clickedItem.id !== oneItem.id;
    });
    console.log(filteredItems)

    setAvailableItems(filteredItems);
    console.log(filteredItems);

    setShoppingCart([...shoppingCart, clickedItem]);

    setAvailableBalance(availableBalance - clickedItem.price)
  }

    function handleRestoreItem(clickedItem) {
          console.log("clicked on", clickedItem);
           const filteredItems = shoppingCart.filter((oneItem) => {
      return clickedItem.id !== oneItem.id;
    });
        setShoppingCart(filteredItems);
            console.log(filteredItems);
    setAvailableItems([...availableItems, clickedItem]);
        setAvailableBalance(availableBalance + clickedItem.price)
    }


  return (
    <div>
    <h1>Zaid's Closet</h1>
    <h2>Your Balance: {availableBalance}</h2>


<h2>Available Items</h2>
{availableItems.map((oneItem) => (
        <div key={oneItem.id}>
          <p>Name: {oneItem.name}</p>
            <button
            onClick={() => {
              handleAddItem(oneItem);
            }} 
          >
Add to Cart </button>
        </div>
      ))}

<h2>Shopping Cart</h2>
     {shoppingCart.map((oneItem) => (
        <div key={oneItem.id}>
          <p>Name: {oneItem.name}</p>
          <button
            onClick={() => {
              handleRestoreItem(oneItem);
            }}
          >
            Restore Item
          </button>
        </div>
      ))}
    </div>


  );
}

export default App