import React from "react";
import img from "../../../../assets/company_avatar.webp";

const UserProfile = () => {
  return (
    <div className="bg-white px-10 shadow-xl border-4 border-gray-900 rounded-md flex flex-col items-center justify-center gap-y-5 min-h-[460px]">
      <div>
        <img src={img} className="m-auto rounded-full" alt="" />
      </div>
      <div className="text-center">
        <h1>Umer Abdullah</h1>
        <p>umerak877@gmail.com</p>
      </div>
      <div className="text-center w-full ">
        <button className="bg-gray-900 w-full p-2 text-white font-medium">
          Edit User Profile
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
