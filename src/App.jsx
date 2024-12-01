import { useState } from "react";
import "./App.css";

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
      t;
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
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((item) => (
            <div
              key={item.id}
              className="bg-gray-700 rounded-lg p-4 flex flex-col items-center"
            >
              <img
                src={item.photo}
                alt={item.title}
                className="w-24 h-24 rounded-full mb-4"
              />
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-200">{item.category}</p>
              <p className="font-bold">${item.price}</p>
              <button
                onClick={() => moveToCart(item)}
                className="mt-4 bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded"
              >
                Add to Basket
              </button>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-4">Basket</h2>
          <table className="w-full text-left border-collapse border border-gray-600">
            <thead>
              <tr className="bg-gray-800">
                <th className="border border-gray-600 px-4 py-2">Title</th>
                <th className="border border-gray-600 px-4 py-2">Price</th>
                <th className="border border-gray-600 px-4 py-2">Count</th>
                <th className="border border-gray-600 px-4 py-2">Subtotal</th>
                <th className="border border-gray-600 px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {basket.map((item) => (
                <tr key={item.id}>
                  <td className="border border-gray-600 px-4 py-2">
                    {item.title}
                  </td>
                  <td className="border border-gray-600 px-4 py-2">
                    ${item.price}
                  </td>
                  <td className="border border-gray-600 px-4 py-2">
                    {item.count}
                  </td>
                  <td className="border border-gray-600 px-4 py-2">
                    ${(item.price * item.count).toFixed(2)}
                  </td>
                  <td className="border border-gray-600 px-4 py-2">
                    <button
                      onClick={() => quantityUp(item)}
                      className="bg-gray-500 hover:bg-gray-600 text-white py-1 px-2 rounded"
                    >
                      +
                    </button>
                    <button
                      onClick={() => quantityDown(item)}
                      className="bg-gray-500 hover:bg-gray-600 text-white py-1 px-2 rounded mx-2"
                    >
                      -
                    </button>
                    <button
                      onClick={() => clearFromBasket(item)}
                      className="bg-gray-500 hover:bg-gray-600 text-white py-1 px-2 rounded"
                    >
                      x
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
