import React, { useEffect, useState } from "react";
import { CiEdit } from "react-icons/ci";
import { FaCheck } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import axiosInstance from "../../../../utils/axios";

const CandidateResumes = () => {
  const [resumes, setResumes] = useState([]);

  const getAllResumes = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axiosInstance.get("/AllResume", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setResumes(response.data);
      console.log(response.data);
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    getAllResumes();
    console.log(resumes);
  }, []);

  return (
    <div className="bg-white shadow-md m-10 mb-4">
      <h1 className="bg-gray-900 p-4 text-white font-semibold border-b border-white text-xl">
        Resumes
      </h1>
      <table className="w-full">
        <thead className="">
          <tr className="font-semnold text-white bg-gray-900 text-xl">
            <td className="text-center p-2 ">Name</td>
            <td className="text-center p-2 ">Title</td>
            <td className="text-center p-2 ">Status</td>
            <td className="text-center p-2 ">Categories</td>
            <td className="text-center p-2 ">Date Posted</td>
            <td className="text-center p-2 ">Action</td>
          </tr>
        </thead>
        <tbody className="mt-2 p-10 ">
          {resumes.map((ele, index) => (
            <tr key={index} className="w-full h-10">
              <td className="text-center p-5">
                <div className=" w-1/2 m-auto">{ele.name}</div>
              </td>
              <td className="text-center">
                <div className="w-1/2 m-auto">{ele.job_title}</div>
              </td>
              <td className="text-center">
                <div className="w-1/2 m-auto bg-green-200 text-gray-600 text-sm p-1 rounded-md">
                  {ele.status ? "Enable" : "Disable"}
                </div>
              </td>
              <td className="text-center">
                <div className="w-1/2 m-auto">IT</div>
              </td>
              <td className="text-center">
                <div className="w-1/2 p-1 border text-gray-800 bg-green-500 rounded-md m-auto">
                  {ele.createdAt}
                </div>
              </td>

              <td className="text-center">
                <div className="w-1/2 m-auto flex gap-x-4 text-center items-center">
                  <div>
                    <CiEdit
                      size={25}
                      className="cursor-pointer hover:text-blue-800 font-bold"
                    />
                  </div>
                  <div>
                    <FaCheck
                      size={25}
                      className="cursor-pointer hover:text-green-800 font-bold"
                    />
                  </div>
                  <div>
                    <MdDelete
                      size={25}
                      className="cursor-pointer hover:text-red-800 font-bold"
                    />
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CandidateResumes;
