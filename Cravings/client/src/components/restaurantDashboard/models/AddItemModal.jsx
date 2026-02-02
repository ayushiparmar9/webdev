import React from 'react'
import { useAuth } from "../../../context/AuthContext";

const AddItemModal = ({onClose}) => {
    const[menuData , setMenuData] = React.useState({
       dishName:"" ,
       

    })
      
    
    
 return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
      <div className="bg-amber-200 w-full max-w-xl max-h-[85vh] overflow-y-auto p-6 shadow-2xl rounded-3xl">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-red-600">Add Item</h2>
          <button  onClick={onClose} className="text-xl">✕</button>
        </div>









        
        </div>
      </div>
    
  );
    
}

export default AddItemModal