import { FormikProvider, useFormik, Field } from "formik";
import React from "react";
import { object, string, date } from "yup";

const educationSchema = object({
  institution: string().required(),
  degree: string().required(),
  marks: string().required(),
  startDate: date().required(),
  endDate: date().required(),
  description: string().required(),
});
const EducationForm = () => {
  const formik = useFormik({
    initialValues: {
      institution: "",
      degree: "",
      marks: "",
      startDate: "",
      endDate: "",
      description: "",
    },
  });
  return (
    <div className="bg-white shadow-md pb-4 pt-0 ">
      <h1 className="bg-gray-900 text-white font-medium p-4">Add Education</h1>
      <FormikProvider value={formik}>
        <form onSubmit={formik.handleSubmit} className="p-4">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">
              Institute
            </label>
            <Field
              name="intitution"
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">
              Degree
            </label>
            <Field
              name="degree"
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
        </form>
      </FormikProvider>
    </div>
  );
};

export default EducationForm;
