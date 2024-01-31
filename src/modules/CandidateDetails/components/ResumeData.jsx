import React, { useEffect, useState } from "react";

const ResumeData = ({ education, experience, urls }) => {
  return (
    <div className="bg-white p-6 shadow-md rounded-md mt-6">
      <div className="space-y-6">
        {/* Education */}
        <div>
          <div className="flex items-center mb-2">
            <div className="h-2 w-2 rounded-full bg-blue-300"></div>
            <h2 className="ml-2 text-lg font-bold text-gray-800">Education</h2>
          </div>
          {education &&
            education.map((ele, index) => (
              <div key={index} className="ml-8">
                <h3 className="font-semibold text-lg">{ele.institution}</h3>
                <p className="text-sm text-gray-600">
                  {ele.degree}, {ele.marks}
                </p>
              </div>
            ))}
        </div>
        {/* Experience */}
        <div>
          <div className="flex items-center mb-2">
            <div className="h-2 w-2 rounded-full bg-blue-300"></div>
            <h2 className="ml-2 text-lg font-bold text-gray-800">Experience</h2>
          </div>

          {experience &&
            experience.map((ele, index) => (
              <div key={index} className="ml-8">
                <div className="flex items-center justify-between gap-x-4">
                  <h3 className="font-semibold text-lg">
                    {ele.title} | {ele.company}
                  </h3>
                  <p className="text-sm text-gray-600">
                    (2023-08-01 to 2023-11-01)
                  </p>
                </div>
                <p className="text-sm text-gray-600">{ele.description}</p>
              </div>
            ))}
        </div>
        {/* URLs */}
        <div>
          <div className="flex items-center mb-2">
            <div className="h-2 w-2 rounded-full bg-blue-300"></div>
            <h2 className="ml-2 text-lg font-bold text-gray-800">URL</h2>
          </div>
          {urls &&
            urls.map((ele, index) => (
              <div key={index} className="ml-8">
                <div className="flex items-center gap-x-1">
                  <h3 className="font-semibold text-lg">{ele.urlTitle}:</h3>
                  <a
                    href="https://www.google.com"
                    className="underline text-sm text-blue-600"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {ele.url}
                  </a>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ResumeData;
