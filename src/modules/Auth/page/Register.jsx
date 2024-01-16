import React from "react";
import logo from "../../../assets/jobxl.png";
import { string, object } from "yup";
import { Field, FormikProvider, useFormik } from "formik";

const regSchema = object({
  first_name: string().required(),
  last_name: string().required(),
  email: string().email().required(),
  password: string().required(),
  role: string().required(),
});

const Register = () => {
  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      role: "",
    },
    validationSchema: regSchema,
    onSubmit: (values) => console.log(values),
  });

  const { errors, values } = formik;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <FormikProvider value={formik}>
          <form onSubmit={formik.handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="first_name"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                First Name
              </label>
              <Field
                type="text"
                id="first_name"
                name="first_name"
                className={`w-full px-3 py-2 border ${
                  errors.first_name ? "border-red-500" : "border-gray-300"
                } rounded`}
              />
              {errors.first_name && (
                <p className="text-red-500 text-xs mt-1">{errors.first_name}</p>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="last_name"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Last Name
              </label>
              <Field
                type="text"
                id="last_name"
                name="last_name"
                className={`w-full px-3 py-2 border ${
                  errors.last_name ? "border-red-500" : "border-gray-300"
                } rounded`}
              />
              {errors.last_name && (
                <p className="text-red-500 text-xs mt-1">{errors.last_name}</p>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="role"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Role
              </label>
              <Field
                type="text"
                id="role"
                name="role"
                className={`w-full px-3 py-2 border ${
                  errors.role ? "border-red-500" : "border-gray-300"
                } rounded`}
              />
              {errors.role && (
                <p className="text-red-500 text-xs mt-1">{errors.role}</p>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Email
              </label>
              <Field
                type="email"
                id="email"
                name="email"
                className={`w-full px-3 py-2 border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } rounded`}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Password
              </label>
              <Field
                type="password"
                id="password"
                name="password"
                className={`w-full px-3 py-2 border ${
                  errors.password ? "border-red-500" : "border-gray-300"
                } rounded`}
              />
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">{errors.password}</p>
              )}
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-700 transition-all duration-300 ease-in-out"
            >
              Sign Up
            </button>
          </form>
        </FormikProvider>
      </div>
    </div>
  );
};

export default Register;
