import React from "react";
import { useFormik, FormikProvider, Form, Field } from "formik";
import { object, string } from "yup";
import axiosInstance from "../../../utils/axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const registrationSchema = object({
  name: string().required(),
  email: string().email().required(),
  password: string().required(),
  role: string().required(),
});

const RegistrationForm = () => {
  const navigate = useNavigate();
  const handleSubmit = async (values) => {
    try {
      const response = await axiosInstance.post("/auth/user/register", values);
      navigate("/auth/sign_in");
      toast.success("Registration completed successfuly");
      console.log(response);
    } catch (error) {
      toast.error(error);
    }
  };
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      role: "",
    },
    validationSchema: registrationSchema,
    onSubmit: handleSubmit,
  });

  const { errors, values, touched } = formik;

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
      <FormikProvider value={formik}>
        <Form className="bg-gray-800 w-96 shadow-md rounded-md p-8">
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-300"
            >
              Name
            </label>
            <Field
              type="text"
              id="name"
              name="name"
              className="mt-1 p-2 w-full border rounded-md bg-gray-700 text-white focus:outline-none focus:ring focus:border-blue-300"
            />
            {touched.name && errors.name && (
              <div className="text-red-500 text-sm mt-1">{errors.name}</div>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-300"
            >
              Email
            </label>
            <Field
              type="email"
              id="email"
              name="email"
              className="mt-1 p-2 w-full border rounded-md bg-gray-700 text-white focus:outline-none focus:ring focus:border-blue-300"
            />
            {touched.email && errors.email && (
              <div className="text-red-500 text-sm mt-1">{errors.email}</div>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-300"
            >
              Password
            </label>
            <Field
              type="password"
              id="password"
              name="password"
              className="mt-1 p-2 w-full border rounded-md bg-gray-700 text-white focus:outline-none focus:ring focus:border-blue-300"
            />
            {touched.password && errors.password && (
              <div className="text-red-500 text-sm mt-1">{errors.password}</div>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="role"
              className="block text-sm font-medium text-gray-300"
            >
              Role
            </label>
            <Field
              as="select"
              id="role"
              name="role"
              className="mt-1 p-2 w-full border rounded-md bg-gray-700 text-white focus:outline-none focus:ring focus:border-blue-300"
            >
              <option value="" disabled>
                Select Role
              </option>
              <option value="employer">Employer</option>
              <option value="candidate">Candidate</option>
            </Field>
            {touched.role && errors.role && (
              <div className="text-red-500 text-sm mt-1">{errors.role}</div>
            )}
          </div>

          <p className="text-sm text-center my-3">
            Already have an account?{" "}
            <span
              className="underline cursor-pointer"
              onClick={() => navigate("/auth/sign_in")}
            >
              Login
            </span>
          </p>
          <div className="flex justify-center items-center">
            <button
              type="submit"
              className="bg-green-500 text-white py-2 w-full px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:border-blue-300"
            >
              Register
            </button>
          </div>
        </Form>
      </FormikProvider>
    </div>
  );
};

export default RegistrationForm;
