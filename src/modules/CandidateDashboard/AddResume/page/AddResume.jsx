import { Field, FormikProvider, useFormik } from "formik";
import React, { useEffect } from "react";
import { object, string } from "yup";

const resumeSchema = object({
  name: string().max(20).required(),
  email: string().email({ minDomainSegments: 2 }).required(),
  region: string().max(100).required(),
  job_title: string().max(100).required(),
  location: string().max(100).required(),
  image: string().max(100),
  category: string().max(100).required(),
  hourly_rate: string().max(100).required(),
  description: string().max(100).required(),
  //   skill: array().items(skillSchema),
  //   url: array().items(urlSchema),
  //   education: array().items(educationSchema),
  //   experience: array().items(experienceSchema),
});

const AddResume = () => {
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
    onSubmit: (val) => console.log(val),
    validationSchema: resumeSchema,
  });

  const { errors, touched } = formik;

  useEffect(() => {
    console.log(errors);
  }, [errors]);

  return (
    <div className="">
      <h1 className="text-center p-5 text-xl font-semibold bg-white shadow-xl">
        Create new Resume
      </h1>
      <div className="m-10">
        <FormikProvider value={formik}>
          <form onSubmit={formik.handleSubmit}>
            <div className="flex justify-start items-center gap-2">
              <label>Name</label>
              <Field
                className={`bg-white text-black p-2 rounded-md border border-gray-200 ${
                  errors.name && touched.name ? "border-red-500" : ""
                }`}
                name="name"
              />
            </div>
            <div className="flex justify-start items-center gap-2">
              <label>Email</label>
              <Field
                className={`bg-white text-black p-2 rounded-md border border-gray-200 ${
                  errors.email && touched.email ? "border-red-500" : ""
                }`}
                name="email"
              />
            </div>
            <div className="flex justify-start items-center gap-2">
              <label>Region</label>
              <Field
                className={`bg-white text-black p-2 rounded-md border border-gray-200 ${
                  errors.region && touched.region ? "border-red-500" : ""
                }`}
                name="region"
              />
            </div>
            <div className="flex justify-start items-center gap-2">
              <label>Job Title</label>
              <Field
                className={`bg-white text-black p-2 rounded-md border border-gray-200 ${
                  errors.job_title && touched.job_title ? "border-red-500" : ""
                }`}
                name="job_title"
              />
            </div>
            <div className="flex justify-start items-center gap-2">
              <label>Location</label>
              <Field
                className={`bg-white text-black p-2 rounded-md border border-gray-200 ${
                  errors.location && touched.location ? "border-red-500" : ""
                }`}
                name="location"
              />
            </div>
            <div className="flex justify-start items-center gap-2">
              <label>Image</label>
              <Field
                className={`bg-white text-black p-2 rounded-md border border-gray-200 ${
                  errors.image && touched.image ? "border-red-500" : ""
                }`}
                name="image"
              />
            </div>
            <div className="flex justify-start items-center gap-2">
              <label>Category</label>
              <Field
                className={`bg-white text-black p-2 rounded-md border border-gray-200 ${
                  errors.category && touched.category ? "border-red-500" : ""
                }`}
                name="category"
              />
            </div>
            <div className="flex justify-start items-center gap-2">
              <label>Hourly Rate</label>
              <Field
                className={`bg-white text-black p-2 rounded-md border border-gray-200 ${
                  errors.hourly_rate && touched.hourly_rate
                    ? "border-red-500"
                    : ""
                }`}
                name="hourly_rate"
              />
            </div>
            <div className="flex justify-start items-center gap-2">
              <label>Description</label>
              <Field
                className={`bg-white text-black p-2 rounded-md border border-gray-200 ${
                  errors.description && touched.description
                    ? "border-red-500"
                    : ""
                }`}
                name="description"
              />
            </div>
            <button type="submit" className="bg-gray-300 p-2 px-5 rounded-md ">
              Submit
            </button>
          </form>
        </FormikProvider>
      </div>
    </div>
  );
};

export default AddResume;
