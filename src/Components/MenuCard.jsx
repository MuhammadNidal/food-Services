import React from 'react';

function MenuCard({ name, price, imgurl, description }) {
  return (
    <div className="flex justify-between items-center bg-white shadow-lg rounded-lg p-5 mb-6 w-full max-w-lg">
      <div>
        <h3 className="text-2xl font-bold mb-2">{name}</h3>
        <p className="text-gray-700 text-sm mb-2">Price: Rs {price}</p>
        <p className="text-gray-600 mb-4">{description ? description : "No description available"}</p>
        <button className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition duration-300">
          Order Now
        </button>
      </div>
      <img src={imgurl} alt={name} className="w-24 h-24 object-cover rounded-md" />
    </div>
  );
}

export default MenuCard;
