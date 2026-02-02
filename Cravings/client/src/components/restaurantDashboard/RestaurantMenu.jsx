import React from 'react'
import { useState } from 'react';
import AddItemModal from './models/AddItemModal';

const RestaurantMenu = () => {
  
  const [isAddItemModalOpen ,setIsAddItemModalOpen] = useState(false);

  return (
    <>
    <div className='flex justify-between  shadow rounded-3xl p-6'>
    <h2 className='text-red-600 font-bold'>Menu</h2>
    <button className='bg-yellow-400 p-2 rounded-2xl text-amber-100'onClick={() => setIsAddItemModalOpen(true)} >Add item</button>
    </div>
    
    {isAddItemModalOpen && (
            <AddItemModal
              onClose={() => setIsAddItemModalOpen(false)}/>)}
    

    














    </>
  )
}

export default RestaurantMenu