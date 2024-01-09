import React from "react";
import image from "../../../../assets/user_profile.jpg";

const ReviewCard = () => {
  return (
    <div className=" w-full flex flex-col items-center justify-center gap-5 p-5  rounded-md">
      <img src={image} alt="profile image" className="w-36 h-36 rounded-full" />
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-2xl font-semibold">Jhon Doe</h1>
        <p className="text-xl text-primary-300">Web Developer</p>
      </div>
      <div className="text-center text-xl">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga sit
          eveniet est debitis voluptatum, tenetur quibusdam. Reprehenderit,
          delectus expedita. Facere sunt, ducimus est fuga magni amet tempore
          hic officia inventore.
        </p>
      </div>
    </div>
  );
};

export default ReviewCard;
