import React from 'react';

function FoodCard({ imgurl, name }) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden w-72 hover:shadow-xl transition-shadow duration-300">
      <img src={imgurl} alt={name} className="w-full h-60 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <button className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition-colors duration-300">Order Now</button>
      </div>
    </div>
  );
}

export default FoodCard;
