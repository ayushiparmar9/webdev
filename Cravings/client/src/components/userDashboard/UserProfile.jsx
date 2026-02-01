import React, { useEffect } from 'react'
import { useAuth } from '../../context/AuthContext'
import EditProfileModal from './modals/EditProfileModal';
import { useState} from 'react';
import UserImage from "../../assets/userImage.jpg";
import { FaCamera } from "react-icons/fa";
import api from "../../config/Api";
import toast from "react-hot-toast";
import ResetPasswordModal from "./modals/ResetPasswordModel.jsx";



const UserProfile = () => {

const [isEditProfileModalOpen ,setIsEditProfileModalOpen] = useState(false);
 const [isResetPasswordModalOpen, setIsResetPasswordModalOpen] =
    useState(false);
  const { user } = useAuth();
  const [preview, setPreview] = useState("");

  const changePhoto = async (file) => {
    const form_Data = new FormData();
form_Data.append("image", file);
    // form_Data.append("imageURL", preview);


     try {
      const res = await api.patch("/user/changePhoto", form_Data);

      toast.success(res.data.message);
    } catch (error) {
      toast.error(error?.response?.data?.message || "Unknown Error");
    }
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    //file converted into url as image tag accepts url
    const newPhotoURL = URL.createObjectURL(file);
    //console.log(newPhotoURL);
    setPreview(newPhotoURL);
    changePhoto(file);
  };

return (
    <>
      <div className="bg-(--color-primary)/10 rounded-lg shadow-md p-6 md:p-8 h-full">
        <div className="flex justify-between border p-3 rounded-3xl items-center border-gray-300 bg-white">
          <div className="flex gap-5 items-center">
            <div className="relative">
              <div className=" border rounded-full w-36 h-36 overflow-hidden">
                <img
                  src={preview || user.photo?.url || UserImage}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-2 left-[75%] border bg-white p-2 rounded-full group flex gap-3">
                <label
                  htmlFor="imageUpload"
                  className="text-(--color-primary) group-hover:text-(--color-secondary)"
                >
                  <FaCamera />
                </label>
                <input
                  type="file"
                  id="imageUpload"
                  className="hidden"
                  accept="image/*"
                  onChange={handlePhotoChange}
                />
              </div>
            </div>
            <div>
              <div className="text-3xl text-(--color-primary) font-bold">
                {user.fullName}
              </div>
              <div className="text-gray-600 text-lg font-semibold">
                {user.email}
              </div>
              <div className="text-gray-600 text-lg font-semibold">
                {user.mobileNumber}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <button className="px-4 py-2 rounded bg-(--color-secondary) text-white" onClick={()=>setIsEditProfileModalOpen(true)}>
              Edit 
            </button>
            <button className="px-4 py-2 rounded bg-(--color-secondary) text-white" onClick={() => setIsResetPasswordModalOpen(true)}>
              Reset password
            </button>
          </div>
        </div>
      </div>
 

  {isEditProfileModalOpen&&(<EditProfileModal onClose ={()=>setIsEditProfileModalOpen(false)}/>)} 
    {isResetPasswordModalOpen && (
        <ResetPasswordModal
          onClose={() => setIsResetPasswordModalOpen(false)}/>)}

   
   </>
  )
}

export default UserProfile