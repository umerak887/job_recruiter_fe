import React from "react";

const Applications = () => {
  return (
    <div className="bg-white shadow-md m-10 mb-4">
      <h1 className="bg-gray-900 p-4 text-white font-semibold border-b border-white text-xl">
        Applications
      </h1>
      <table className="w-full">
        <thead className="">
          <tr className="font-semnold text-white bg-gray-900 text-xl">
            <td className="text-center p-2 ">Job Title</td>
            <td className="text-center p-2 ">Cover Letter</td>
            <td className="text-center p-2 ">CV</td>
            <td className="text-center p-2 ">Email</td>
            <td className="text-center p-2 ">Status</td>
          </tr>
        </thead>
        <tbody className="mt-2 p-10 ">
          <tr className="w-full h-10">
            <td className="text-center p-5">
              <div className=" w-1/2 m-auto">Web Developer</div>
            </td>
            <td className="text-center">
              <div className="w-1/2 m-auto bg-green-200 text-gray-600 text-sm p-1 rounded-md">
                Read Cover Letter
              </div>
            </td>
            <td className="text-center">
              <div className="w-1/2 m-auto bg-green-200 text-gray-600 text-sm p-1 rounded-md">
                View CV
              </div>
            </td>
            <td className="text-center">
              <div className="w-1/2 m-auto">test@gmail.com</div>
            </td>
            <td className="text-center">
              <div className="w-1/2 p-1 border border-green-400 rounded-md text-green-400 m-auto">
                Applied
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Applications;
