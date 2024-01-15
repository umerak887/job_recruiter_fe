import { Field, Form, Formik, useFormik, FormikProvider } from "formik";
import React, { useEffect } from "react";
import { array, object, string } from "yup";

const filterSchema = object({
  job_title: string(),
  location: string(),
  category: string(),
  type: array().of(string()),
  experience: array().of(string()),
});

const FilterSearch = () => {
  const categories = ["category 1", "category 2", "category 3"];

  const jobType = [
    {
      name: "Contract base",
      count: 10,
    },
    {
      name: "Freelance",
      count: 1,
    },
    {
      name: "Full time",
      count: 4,
    },
    {
      name: "Internship",
      count: 7,
    },
    {
      name: "Part time",
      count: 5,
    },
    {
      name: "Remote",
      count: 9,
    },
    {
      name: "Temporary",
      count: 4,
    },
  ];

  const experience = [
    {
      name: "+ years",
      count: 12,
    },
    { name: "3+ years", count: 10 },
  ];

  const formik = useFormik({
    initialValues: {
      job_title: "",
      location: "",
      category: "",
      type: [],
      experience: [],
    },
    validationSchema: filterSchema,
    onSubmit: (values) => console.log(values),
  });

  const { values, errors } = formik;

  useEffect(() => {
    console.log(formik.values);
  }, [formik.values]);

  return (
    <div className="bg-white border border-gray-200 shadow-xl rounded-md py-2 px-4 w-72">
      <div className="border-b border-gray-200">
        <h1 className="p-2 px-4 font-semibold">Search Filter</h1>
      </div>

      <div className="px-4">
        <FormikProvider value={formik}>
          <Form>
            <div className="flex flex-col justify-center items-center py-4  gap-2 border-b border-gray-300">
              <Field
                name="job_title"
                className="bg-gray-300 px-5 py-2 w-full rounded-md text-sm text-gray-800 outline-none"
                placeholder="Job title"
              />

              <Field
                name="location"
                className="bg-gray-300 px-5 py-2 w-full rounded-md text-sm text-gray-800 outline-none"
                placeholder="Location"
              />
              <Field
                as="select"
                name="category" // Corrected the name attribute
                className="bg-gray-300 px-5 py-2 w-full rounded-md text-sm text-gray-800 outline-none"
              >
                <option value="">Select Category</option>
                {categories.map((ele, index) => (
                  <option key={index} value={ele}>
                    {ele}
                  </option>
                ))}
              </Field>
            </div>
            <div className="border-b py-2 border-gray-300">
              <div className="">
                <h1 className="font-semibold px-3">Job Type</h1>
              </div>
              <div className="py-2">
                {jobType.map((ele, index) => (
                  <div key={index} className="">
                    <label className="flex justify-start items-center">
                      <Field
                        name="type"
                        type="checkbox"
                        value={ele.name}
                        className="mx-2"
                      />
                      <table>
                        <tbody className="flex justify-between items-center">
                          <tr>
                            <td className="border-black px-1 w-28">
                              {ele.name}
                            </td>
                            <td className="border-black px-1 text-right w-10">
                              {ele.count}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <div className="py-2 ">
              <div className="">
                <h1 className="font-semibold px-3">Experience</h1>
              </div>
              <div className="py-2">
                {experience.map((ele, index) => (
                  <div key={index} className="">
                    <label className="flex justify-start items-center">
                      <Field
                        name="experience"
                        type="checkbox"
                        value={ele.name}
                        className="mx-2"
                      />
                      <table>
                        <tbody className="flex justify-between items-center">
                          <tr>
                            <td className="border-black px-1 w-28">
                              {ele.name}
                            </td>
                            <td className="border-black px-1 text-right w-10">
                              {ele.count}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </Form>
        </FormikProvider>
      </div>
    </div>
  );
};

export default FilterSearch;
