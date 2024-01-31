import React from "react";
import SingleBookmark from "../components/SingleBookmark";

const Bookmark = () => {
  return (
    <div className="flex-col justify-start m-10 bg-white shadow-xl items-start">
      <h1 className="p-2 bg-gray-900 w-full font-semibold text-white text-xl rounded-t-md">
        Bookmarks
      </h1>
      <div className="bg-white p-2 px-10 min-h-10">
        <SingleBookmark />
        <SingleBookmark />
        <SingleBookmark />
      </div>
    </div>
  );
};

export default Bookmark;
