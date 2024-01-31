import { Field, FormikProvider, useFormik } from "formik";
import React, { useState } from "react";
import { date, object, string } from "yup";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";

const experienceSchema = object({
  title: string().required(),
  company: string().required(),
  description: string(),
  startDate: date().required(),
  endDate: date().required(),
});
const ExperienceForm = ({ addExperience }) => {
  const [isOpen, setIsOpen] = useState(true);
  const formik = useFormik({
    initialValues: {
      title: "",
      company: "",
      description: "",
      startDate: "",
      endDate: "",
    },
    validationSchema: experienceSchema,
    onSubmit: (values, { resetForm }) => {
      try {
        addExperience(values);
        resetForm();
      } catch (error) {}
    },
  });

  return (
    <div className="bg-white shadow-md pb-4 mt-1 pt-0 ">
      <div className="bg-gray-900 text-white font-medium p-4 flex justify-between items-center">
        <h1>Add Experience</h1>
        <div onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <IoChevronUp /> : <IoChevronDown />}
        </div>
      </div>
      {isOpen && (
        <FormikProvider value={formik}>
          <form onSubmit={formik.handleSubmit} className="p-4">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">
                Job Title
              </label>
              <Field
                name="title"
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">
                Company Name
              </label>
              <Field
                name="company"
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">
                Start Date
              </label>
              <Field
                name="startDate"
                type="date"
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">
                End Date
              </label>
              <Field
                name="endDate"
                type="date"
                className="mt-1 p-2 w-full border rounded-md"
              />
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
            <div className="flex justify-end items-center m-4">
              <button
                type="submit"
                className="bg-gray-900 p-2 rounded-md text-white font-semibold"
              >
                Add Experience
              </button>
            </div>
          </form>
        </FormikProvider>
      )}
    </div>
  );
};

export default ExperienceForm;
