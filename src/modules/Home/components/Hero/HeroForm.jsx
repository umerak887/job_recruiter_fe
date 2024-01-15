import { Field, FormikProvider, useFormik } from "formik";
import React from "react";
import { object, string } from "yup";
import { CiSearch, CiLocationOn } from "react-icons/ci";

const searchSchema = object({
  job_title: string(),
  location: string(),
  category: string(),
});

const HeroForm = () => {
  const formik = useFormik({
    initialValues: {
      job_title: "",
      location: "",
      category: "",
    },
    validationSchema: searchSchema,
    onSubmit: (values) => console.log(values),
  });

  return (
    <div>
      <FormikProvider value={formik}>
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col md:flex-row md:items-center gap-2"
        >
          <div className="flex justify-between items-center border-b-2 md:border-b-0 md:border-r-2 border-slate-400">
            <CiSearch />
            <Field
              name="job_title"
              className="ml-5 py-1 outline-none"
              placeholder="Job Title"
            />
          </div>

          <div className="flex mt-3 md:mt-0 md:ml-5 justify-between items-center border-b-2 md:border-b-0 md:border-r-2 border-slate-400">
            <CiLocationOn />
            <Field
              name="location"
              className="ml-5 py-1 outline-none"
              placeholder="Location"
            />
          </div>

          <div className="flex mt-3 md:mt-0 md:ml-5 justify-between items-center">
            <Field
              name="category"
              className="ml-5 py-1 outline-none"
              placeholder="Category"
            />
          </div>
          <button
            type="submit"
            className="mt-3 md:mt-0 bg-slate-400 text-lg p-2 px-5 border-2 border-slate-400 rounded-md text-white font-medium opacity-80 hover:opacity-100"
          >
            Find Job
          </button>
        </form>
      </FormikProvider>
    </div>
  );
};

export default HeroForm;
