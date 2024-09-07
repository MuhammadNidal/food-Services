import React from 'react';
import FoodCard from '../Components/FoodCard'; // Ensure FoodCard is imported
import MenuCard from '../Components/MenuCard';

function Home() {
  const foodCard = [
    {
      id: 1,
      imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOx2rBVEQkLWb_BpX_acdazuC6iyD8iBlzlg&s",
      name: "Small Pizza",
    },
    {
      id: 2,
      imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSApr3p-OdEY7TqNUph5vJHok6v0DqqA5Oy-g&s",
      name: "Medium Pizza",
    },
    {
      id: 3,  // Changed id from 2 to 3 to make it unique
      imgurl: "https://res.cloudinary.com/purnesh/image/upload/f_auto/v1568979417/chicago-pizzaaaaa.jpg",
      name: "Large Pizza",
    }
  ];

  const menuCard = [
    {
      id: 1,
      name: "Small Pizza",
      price: 300,
      imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOx2rBVEQkLWb_BpX_acdazuC6iyD8iBlzlg&s",
      description: "A small pizza perfect for one person.",
    },
    {
      id: 2,
      name: "Medium Pizza",
      price: 500,
      imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSApr3p-OdEY7TqNUph5vJHok6v0DqqA5Oy-g&s",
      description: "A medium pizza for two people.",
    },
    {
      id: 3,
      name: "Large Pizza",
      price: 700,
      imgurl: "https://res.cloudinary.com/purnesh/image/upload/f_auto/v1568979417/chicago-pizzaaaaa.jpg",
      description: "A large pizza perfect for sharing.",
    },
    {
      id: 4,
      name: "Extra Large Pizza",
      price: 900,
      imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRtt9X5GB9FWEAId8pqIqR3G0IwD4ZFeu6Gg&s",
      description: "An extra large pizza for the whole family.",
    },
  ];

  return (
    <div>
       <section className='relative'>
        <img
          src="https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141352.jpg"
          alt="Delicious Food"
          className='h-[50vh] w-full object-cover' 
        />
        <div className='absolute inset-0 flex items-center justify-center'>
          <div className='flex gap-2'>
            <input
              type="text"
              placeholder='Search for the Taste of Food'
              className='px-4 py-2 w-[35vw] focus:outline-none border-gray-400 rounded-lg'
            />
            <button className='py-2 px-4 bg-pink-500 text-white rounded-md hover:bg-pink-600 transition duration-300'>
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Food Cards */}
      <section className="flex justify-center gap-6 p-6 mt-5">
        {foodCard.map((food) => (
          <FoodCard key={food.id} imgurl={food.imgurl} name={food.name} />
        ))}
      </section>

      {/* Menu Cards */}
      <section className="p-6 mt-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {menuCard.map((menuItem) => (
            <MenuCard
              key={menuItem.id}
              name={menuItem.name}
              price={menuItem.price}
              imgurl={menuItem.imgurl}
              description={menuItem.description}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
