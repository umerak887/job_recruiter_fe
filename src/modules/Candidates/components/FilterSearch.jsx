import { Field, Form, Formik, useFormik, FormikProvider } from "formik";
import React, { useEffect } from "react";
import { array, object, string } from "yup";

const filterSchema = object({
  service: string(),
  category: string(),
  skills: array().of(string()),
});

const FilterSearch = () => {
  const categories = ["category 1", "category 2", "category 3"];
  const skillsArray = ["skill1", "skill2", "skill3"];
  const formik = useFormik({
    initialValues: {
      service: "",
      category: "",
      skills: [""],
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
            <div className="flex flex-col justify-center items-center py-4  gap-2 ">
              <Field
                name="service"
                className="bg-gray-300 px-5 py-2 w-full rounded-md text-sm text-gray-800 outline-none"
                placeholder="Search by Service"
              />
              <Field
                as="select"
                name="category"
                className="bg-gray-300 px-5 py-2 w-full rounded-md text-sm text-gray-800 outline-none"
              >
                <option value="">Select Category</option>
                {categories.map((ele, index) => (
                  <option key={index} value={ele}>
                    {ele}
                  </option>
                ))}
              </Field>
              <Field
                as="select"
                name="skills"
                className="bg-gray-300 px-5 py-2 w-full rounded-md text-sm text-gray-800 outline-none"
              >
                <option value="">Select Skills</option>
                {skillsArray.map((ele, index) => (
                  <option key={index} value={ele}>
                    {ele}
                  </option>
                ))}
              </Field>
            </div>
          </Form>
        </FormikProvider>
      </div>
    </div>
  );
};

export default FilterSearch;
