import React from "react";
import { FaBookmark } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";

const SingleBookmark = () => {
  return (
    <div className="flex justify-between hover:font-semibold items-center p-2 rounded-md my-2 hover:bg-gray-50">
      <div className="flex justify-normal items-center gap-x-5">
        <FaBookmark size={30} className="text-green-500" />
        <div className=" text-xs text-gray-600">
          <h1>Title</h1>
          <p>Note</p>
        </div>
      </div>
      <div>
        <MdOutlineDelete
          size={30}
          className="hover:text-red-600 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default SingleBookmark;
