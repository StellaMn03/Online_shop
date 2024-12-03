export const BasketItem = ({ product, onUp, onDown, onClear }) => {
  return (
    <tr key={product.id}>
      <td className="border border-gray-600 px-4 py-2">{product.title}</td>
      <td className="border border-gray-600 px-4 py-2">${product.price}</td>
      <td className="border border-gray-600 px-4 py-2">{product.count}</td>
      <td className="border border-gray-600 px-4 py-2">
        ${(product.price * product.count).toFixed(2)}
      </td>
      <td className="border border-gray-600 px-4 py-2">
        <button
          onClick={() => onUp(product)}
          className="bg-gray-500 hover:bg-gray-600 text-white py-1 px-2 rounded"
        >
          +
        </button>
        <button
          onClick={() => onDown(product)}
          className="bg-gray-500 hover:bg-gray-600 text-white py-1 px-2 rounded mx-2"
        >
          -
        </button>
        <button
          onClick={() => onClear(product)}
          className="bg-gray-500 hover:bg-gray-600 text-white py-1 px-2 rounded"
        >
          x
        </button>
      </td>
    </tr>
  );
};
