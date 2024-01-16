import { Field, Form, Formik, useFormik, FormikProvider } from "formik";
import React, { useEffect } from "react";
import { array, object, string } from "yup";

const filterSchema = object({
  company_name: string(),
  category: string(),
  company_size: string(),
  avg_salary: string(),
  revenue: string(),
});

const FilterSearch = () => {
  const categories = ["category 1", "category 2", "category 3"];
  const compnaySize = ["size1", "size2", "size3"];
  const avgSalary = ["12k", "13k", "15k"];
  const revenueArray = ["1m", "2m", "3m"];

  const formik = useFormik({
    initialValues: {
      company_name: "",
      category: "",
      company_size: "",
      avg_salary: "",
      revenue: "",
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
                name="company_name"
                className="bg-gray-300 px-5 py-2 w-full rounded-md text-sm text-gray-800 outline-none"
                placeholder="Company name"
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
                name="company_size"
                className="bg-gray-300 px-5 py-2 w-full rounded-md text-sm text-gray-800 outline-none"
              >
                <option value="">Company size</option>
                {compnaySize.map((ele, index) => (
                  <option key={index} value={ele}>
                    {ele}
                  </option>
                ))}
              </Field>
              <Field
                as="select"
                name="avg_salary"
                className="bg-gray-300 px-5 py-2 w-full rounded-md text-sm text-gray-800 outline-none"
              >
                <option value="">AVG salary</option>
                {avgSalary.map((ele, index) => (
                  <option key={index} value={ele}>
                    {ele}
                  </option>
                ))}
              </Field>
              <Field
                as="select"
                name="revenue"
                className="bg-gray-300 px-5 py-2 w-full rounded-md text-sm text-gray-800 outline-none"
              >
                <option value="">Revenue</option>
                {revenueArray.map((ele, index) => (
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
