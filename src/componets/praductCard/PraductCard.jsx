import React from "react";
import Data from "../../../db.json";

const PraductCard = () => {
  return (
    <div className="grid grid-cols-4 gap-5 p-3">
      {Data.products.map((item) => (
        <div
          key={item.id}
          className="border rounded-lg p-3 shadow hover:shadow-lg transition"
        >
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-40 object-cover rounded"
          />

          <h3 className="mt-2 font-semibold text-sm">{item.name}</h3>

          <p className="text-lg font-bold text-violet-600 mt-1">
            {item.price.toLocaleString()} so'm
          </p>

          <button className="w-full bg-violet-600 text-white py-2 rounded mt-2 hover:bg-violet-700">
            Sotib olish
          </button>
        </div>
      ))}
    </div>
  );
};

export default PraductCard;
