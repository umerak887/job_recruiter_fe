import React from "react";

const ResumeData = () => {
  return (
    <div className="bg-white p-5 shadow-md rounded-md mt-3">
      <div className="p-2 flex flex-col justify-start items-start gap-10">
        {/* Education */}
        <div className="ml-4">
          <div className="flex justify-normal items-center gap-x-3 -mb-2">
            <div className="h-2 w-2 rounded-full bg-blue-300"></div>
            <h1 className="text-lg font-bold text-gray-800">Education</h1>
          </div>
          <div className="h-full flex justify-normal items-start mt-2">
            <div className="ml-5"></div>
            <div className="ml-3 mt-1">
              <h1 className="font-semibold text-lg">Cui, Abottabad</h1>
              <div className="flex justify-normal items-center gap-x-1 text-sm ml-2">
                <p>BS Software Engineering,</p>
                <p>CGPA 3.67</p>
              </div>
            </div>
          </div>
        </div>
        {/* Experience */}
        <div className="ml-4">
          <div className="flex justify-normal items-center gap-x-3 -mb-2">
            <div className="h-2 w-2 rounded-full bg-blue-300"></div>
            <h1 className="text-lg font-bold text-gray-800">Experience</h1>
          </div>
          <div className="h-full flex justify-normal items-start mt-2 pr-10">
            <div className="ml-5"></div>
            <div className="ml-3 mt-1">
              <div className=" flex justify-between items-center lg:gap-96 gap-52">
                <h1 className="font-semibold text-lg ">
                  WEB DEVELOPER | PETSAAL
                </h1>
                <i>
                  <p className="text-sm ">(2023-08-01 to 2023-11-01)</p>
                </i>
              </div>
              <div className="flex justify-normal items-center gap-x-1 text-sm ml-2">
                <p className="text-justify text-sm">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Magnam dolorem distinctio officia, ipsa, facere inventore,
                  accusantium animi harum a consequatur culpa corrupti ducimus
                  architecto rem molestiae? Quam ipsa vel corporis.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* URLs */}
        <div className="ml-4">
          <div className="flex justify-normal items-center gap-x-3 -mb-2">
            <div className="h-2 w-2 rounded-full bg-blue-300"></div>
            <h1 className="text-lg font-bold text-gray-800">URL</h1>
          </div>
          <div className="h-full flex justify-normal items-start mt-2">
            <div className="ml-5"></div>
            <div className="ml-3 mt-1">
              <div className="flex justify-normal items-center gap-x-1">
                <h1 className="font-semibold text-lg">Google:</h1>
                <i className=" underline">
                  <p className="text-sm">https://www.google.com</p>
                </i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeData;
