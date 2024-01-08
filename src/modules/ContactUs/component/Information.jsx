import React from "react";

const Information = () => {
  return (
    <div>
      <div className="max-w-2xl mx-auto mt-8 border-l-4 border-blue-500 pl-4 mb-4">
        <div>
          <h2 className="text-2xl font-bold mb-4">Address</h2>
          <p>
            158 Raleigh St, Houston,<br></br>Yk 5896, UK
          </p>
        </div>
      </div>
      <hr className="border-t-2 border-gray-300 my-4" />
      <div className="max-w-2xl mx-auto mt-8 border-l-4 border-green-500 pl-4 mb-4">
        <div className="mt-4">
          <h2 className="text-2xl font-bold mb-4">Phones</h2>
          <p>
            (406) 555-0120 (Toll-Free) <br />
            (406) 555-0120
          </p>
        </div>
      </div>
      <hr className="border-t-2 border-gray-300 my-4" />
      <div className="max-w-2xl mx-auto mt-8 border-l-4 border-red-500 pl-4">
        <div className="mt-4">
          <h2 className="text-2xl font-bold mb-4">Email</h2>
          <p>
            Support87@Gmail.Com <br />
            Info@Yourmail.Com
          </p>
        </div>
      </div>
    </div>
  );
};

export default Information;
