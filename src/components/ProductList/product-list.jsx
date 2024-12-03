import { Product } from "./product";
export const ProductList = ({ items, onMove }) => {
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {items.map((item) => (
          <Product key={item.id} data={item} onMove={onMove} />
        ))}
      </div>
    </div>
  );
};
