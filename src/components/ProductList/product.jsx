export const Product = ({ data, onMove }) => {
  return (
    <div
      key={data.id}
      className="bg-gray-700 rounded-lg p-4 flex flex-col items-center"
    >
      <img
        src={data.photo}
        alt={data.title}
        className="w-24 h-24 rounded-full mb-4"
      />
      <h3 className="text-lg font-semibold">{data.title}</h3>
      <p className="text-sm text-gray-200">{data.category}</p>
      <p className="font-bold">${data.price}</p>
      <button
        onClick={() => onMove(data)}
        className="mt-4 bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded"
      >
        Add to Basket
      </button>
    </div>
  );
};
