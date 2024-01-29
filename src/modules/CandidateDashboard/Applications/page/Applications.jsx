import React from "react";

const Applications = () => {
  const tableData = [
    {
      jobTitle: "test",
      coverLetter: "test",
      cv: "hgfds",
      email: "test@gmail.com",
      status: "Applied",
    },
  ];
  return (
    <div className="bg-white shadow-xl m-10 rounded-lg overflow-hidden">
      <table className="w-full table-auto">
        <thead className="bg-gray-900 text-white">
          <tr>
            <th className="py-2 px-4">All Bookmarks</th>
          </tr>
        </thead>
        <tbody className="bg-gray-100 text-gray-800 ">
          {tableData.map((ele, index) => (
            <tr key={index} className="">
              <td className="py-2 px-4 text-center">{ele.jobTitle}</td>
              <td className="py-2 px-4 text-center">{ele.coverLetter}</td>
              <td className="py-2 px-4 text-center">{ele.cv}</td>
              <td className="py-2 px-4 text-center">{ele.email}</td>
              <td className=" text-center bg-green-400 ">{ele.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Applications;
