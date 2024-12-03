import { BasketItem } from "./basket-item";
export const Basket = ({ items, onUp, onDown, onClear }) => {
  return (
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
          {items.map((elm) => (
            <BasketItem
              key={elm.id}
              product={elm}
              onUp={onUp}
              onDown={onDown}
              onClear={onClear}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};
