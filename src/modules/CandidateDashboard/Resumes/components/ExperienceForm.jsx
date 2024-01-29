import { FormikProvider, useFormik } from "formik";
import React from "react";
import { date, object, string } from "yup";

const experienceSchema = object({
  title: string().required(),
  company: string().required(),
  description: string(),
  startDate: date().required(),
  endDate: date().required(),
});
const ExperienceForm = () => {
  const formik = useFormik({
    initialValues: {
      title: "",
      company: "",
      description: "",
      startDate: "",
      endDate: "",
    },
    validationSchema: experienceSchema,
    onSubmit: (values) => console.log(values),
  });

  return (
    <div className="bg-white shadow-md pb-4 mt-1 pt-0 ">
      <h1 className="bg-gray-900 text-white font-medium p-4">Add Experience</h1>
      <FormikProvider value={formik}>
        <form onSubmit={formik.handleSubmit} className="p-4"></form>
      </FormikProvider>
    </div>
  );
};

export default ExperienceForm;
