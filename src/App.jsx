import { useState } from "react";
import "./App.css";
import { ProductList } from "./components/ProductList/product-list";
import { Basket } from "./components/Basket/basket";

function App() {
  const [basket, setBasket] = useState([]);
  const [products] = useState([
    {
      id: 1,
      title: "Wireless Headphones",
      price: 49.99,
      category: "Electronics",
      photo: "https://via.placeholder.com/100",
    },
    {
      id: 2,
      title: "Yoga Mat",
      price: 19.99,
      category: "Fitness",
      photo: "https://via.placeholder.com/100",
    },
    {
      id: 3,
      title: "Desk Lamp",
      price: 29.99,
      category: "Home Decor",
      photo: "https://via.placeholder.com/100",
    },
    {
      id: 4,
      title: "Running Shoes",
      price: 59.99,
      category: "Footwear",
      photo: "https://via.placeholder.com/100",
    },
    {
      id: 5,
      title: "Bluetooth Speaker",
      price: 39.99,
      category: "Electronics",
      photo: "https://via.placeholder.com/100",
    },
    {
      id: 6,
      title: "Cooking Utensil Set",
      price: 24.99,
      category: "Kitchen",
      photo: "https://via.placeholder.com/100",
    },
    {
      id: 7,
      title: "Notebook",
      price: 4.99,
      category: "Stationery",
      photo: "https://via.placeholder.com/100",
    },
    {
      id: 8,
      title: "Gaming Mouse",
      price: 34.99,
      category: "Gaming",
      photo: "https://via.placeholder.com/100",
    },
    {
      id: 9,
      title: "Sunglasses",
      price: 14.99,
      category: "Accessories",
      photo: "https://via.placeholder.com/100",
    },
    {
      id: 10,
      title: "Portable Charger",
      price: 25.99,
      category: "Electronics",
      photo: "https://via.placeholder.com/100",
    },
  ]);
  const moveToCart = (product) => {
    const found = basket.find((item) => item.id === product.id);
    if (found) {
      found.count++;
      setBasket([...basket]);
    } else {
      setBasket([...basket, { ...product, count: 1 }]);
    }
  };
  const quantityUp = (product) => {
    setBasket(
      basket.map((item) =>
        item.id != product.id ? item : { ...item, count: item.count + 1 }
      )
    );
  };
  const quantityDown = (product) => {
    if (product.count === 1) {
      clearFromBasket(product);
    } else {
      setBasket(
        basket.map((item) =>
          item.id === product.id ? { ...item, count: item.count - 1 } : item
        )
      );
    }
  };

  const clearFromBasket = (product) => {
    setBasket(basket.filter((item) => item.id != product.id));
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <h1 className="text-3xl font-bold text-center py-6">Online Shop</h1>
      <div className="container mx-auto px-4">
        <ProductList items={products} onMove={moveToCart} />
        <Basket
          items={basket}
          onUp={quantityUp}
          onDown={quantityDown}
          onClear={clearFromBasket}
        />
      </div>
    </div>
  );
}

export default App;
