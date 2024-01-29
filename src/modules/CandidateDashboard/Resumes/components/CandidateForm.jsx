import React, { useState } from "react";
import { Field, FormikProvider, useFormik } from "formik";
import { object, string } from "yup";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";

const candidateSchema = object({
  name: string().max(20).required(),
  email: string().email({ minDomainSegments: 2 }).required(),
  region: string().max(100).required(),
  job_title: string().max(100).required(),
  location: string().max(100).required(),
  category: string().max(100).required(),
  hourly_rate: string().max(100).required(),
  description: string().max(100).required(),
});

const CandidateForm = ({ addCandidate }) => {
  const [isOpen, setIsOpen] = useState(true);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      region: "",
      job_title: "",
      location: "",
      category: "",
      hourly_rate: "",
      description: "",
    },
    onSubmit: (values) => {
      addCandidate(values);
    },
    validationSchema: candidateSchema,
  });

  const { handleSubmit } = formik;

  return (
    <div className="bg-white shadow-md pb-4 rounded-md mb-4">
      <div className="bg-gray-900 text-white font-medium p-4 flex justify-between items-center">
        <h1>Create Candidate Profile</h1>
        <div onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <IoChevronUp /> : <IoChevronDown />}
        </div>
      </div>
      {isOpen && (
        <FormikProvider value={formik}>
          <form onSubmit={handleSubmit} className="p-4">
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-600">
                  Name
                </label>
                <Field
                  name="name"
                  className="mt-1 p-2 w-full border rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">
                  Job Title
                </label>
                <Field
                  name="job_title"
                  className="mt-1 p-2 w-full border rounded-md"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">
                Email
              </label>
              <Field
                name="email"
                type="email"
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-600">
                  Location
                </label>
                <Field
                  name="location"
                  className="mt-1 p-2 w-full border rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">
                  Region
                </label>
                <Field
                  name="region"
                  className="mt-1 p-2 w-full border rounded-md"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-600">
                  Category
                </label>
                <Field
                  name="category"
                  className="mt-1 p-2 w-full border rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">
                  Hourly rate
                </label>
                <Field
                  name="hourly_rate"
                  className="mt-1 p-2 w-full border rounded-md"
                />
              </div>
            </div>
            <div className="mb-4">
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-600"
              >
                Description
              </label>
              <Field
                as="textarea"
                id="description"
                name="description"
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>
            <div className="flex justify-end items-center">
              <button
                type="submit"
                className="bg-gray-900 p-2 rounded-md text-white font-semibold"
              >
                Submit
              </button>
            </div>
          </form>
        </FormikProvider>
      )}
    </div>
  );
};

export default CandidateForm;
