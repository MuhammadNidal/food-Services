import React from 'react'

function Navbar() {
  return (
    <div>
       <div className='flex justify-between px-5 p-2'>
        <div className='flex justify-center items-center'>
            <img src="https://www.chicago.gov/content/dam/city/ofinterest/bus/food/foodservices.mainimage.jpg" alt="" className='w-[60px]' />
            <h2 className='font-bold text-gray-600 text-lg ml-2'>Food Services </h2>
        </div>
       <div className='flex gap-x-5 justify-center items-center'>
       <h2 className='hover:text-pink-500'>Home</h2>
<h2 className='hover:text-pink-500'>About</h2>
<h2 className='hover:text-pink-500'>Food</h2>
<h2 className='hover:text-pink-500'>Contact</h2>

        </div> 

       </div>
    </div>
  )
}

export default Navbar
