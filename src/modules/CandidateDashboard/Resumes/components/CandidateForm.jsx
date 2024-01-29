import React from "react";
import { Field, FormikProvider, useFormik } from "formik";
import { object, string } from "yup";

const candidateSchema = object({
  name: string().max(20).required(),
  email: string().email({ minDomainSegments: 2 }).required(),
  region: string().max(100).required(),
  job_title: string().max(100).required(),
  location: string().max(100).required(),
  image: string().max(100).required(),
  category: string().max(100).required(),
  hourly_rate: string().max(100).required(),
  description: string().max(100).required(),
});

const CandidateForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      region: "",
      job_title: "",
      location: "",
      image: "",
      category: "",
      hourly_rate: "",
      description: "",
    },
    onSubmit: (values) => console.log(values),
    validationSchema: candidateSchema,
  });

  return (
    <div className="bg-white shadow-md pb-4 w-2/3 rounded-md">
      <h1 className="bg-gray-900 text-white font-medium p-4">Add Education</h1>
      <FormikProvider value={formik}>
        <form onSubmit={formik.handleSubmit} className="p-4">
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
            <label className="block text-sm font-medium text-gray-600">
              Upload Image
            </label>
            <input
              name="image"
              type="file"
              onChange={(event) =>
                formik.setFieldValue("image", event.currentTarget.files[0])
              }
              className="mt-1 p-2 w-full border rounded-md"
            />
            {formik.errors.image && formik.touched.image && (
              <div className="text-red-500 text-sm">{formik.errors.image}</div>
            )}
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
          {/* Add more fields as needed */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-md"
          >
            Save Changes
          </button>
        </form>
      </FormikProvider>
    </div>
  );
};

export default CandidateForm;
