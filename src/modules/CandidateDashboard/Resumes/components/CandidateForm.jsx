import React, { useState } from "react";
import { Field, FormikProvider, useFormik } from "formik";
import { object, string } from "yup";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";
import { toast } from "react-toastify";

const candidateSchema = object({
  name: string().max(20).required(),
  email: string().email({ minDomainSegments: 2 }).required(),
  region: string().max(100).required(),
  job_title: string().max(100).required(),
  location: string().max(100).required(),
  category: string().max(100).required(),
  hourly_rate: string().max(100).required(),
  description: string().max(100).required(),
});

const CandidateForm = ({ addCandidate }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [cvUrl, setCvUrl] = useState("");
  const [imageUrl, setImageURL] = useState("");

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      region: "",
      job_title: "",
      location: "",
      category: "",
      hourly_rate: "",
      description: "",
    },
    onSubmit: (values) => {
      try {
        addCandidate({ ...values, image: imageUrl, cv: cvUrl });
        console.log(localStorage.getItem("token"));
        toast.success("Changes Saved");
      } catch (error) {
        toast.error("Something went wrong");
      }
    },
    validationSchema: candidateSchema,
  });

  const handleImageUpload = async (e) => {
    setIsLoading(true);
    try {
      const file = e.target.files[0];
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "job_recruiter");
      const response = await fetch(
        "https://api.cloudinary.com/v1_1/dseyjydkj/image/upload",
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await response.json();
      setImageURL(data.secure_url);
      setIsLoading(false);
      toast.success("Image file selected");
    } catch (error) {
      toast.error(error.message);
      setIsLoading(false);
    }
  };

  const handleCvUpload = async (e) => {
    const formData = new FormData();
    formData.append("file", e.target.files[0]);
    formData.append("upload_preset", "job_recruiter");

    const response = await fetch(
      "https://api.cloudinary.com/v1_1/dseyjydkj/raw/upload",
      {
        method: "POST",
        body: formData,
      }
    );
    const data = await response.json();
    setCvUrl(data.secure_url);
    console.log(cvUrl);
  };

  const { handleSubmit } = formik;
  const { errors, touched, values } = formik;

  return (
    <div className="bg-white shadow-md pb-4 rounded-md mb-4">
      <div className="bg-gray-900 text-white font-medium p-4 flex justify-between items-center">
        <h1>Create Candidate Profile</h1>
        <div onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <IoChevronUp /> : <IoChevronDown />}
        </div>
      </div>
      {isOpen && (
        <FormikProvider value={formik}>
          <form onSubmit={handleSubmit} className="p-4">
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-600">
                  Name
                </label>
                <Field
                  name="name"
                  className="mt-1 p-2 w-full border rounded-md"
                />
                {touched.name && errors.name && (
                  <div className="text-red-500 text-sm mt-1">{errors.name}</div>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">
                  Job Title
                </label>
                <Field
                  name="job_title"
                  className="mt-1 p-2 w-full border rounded-md"
                />
                {touched.job_title && errors.job_title && (
                  <div className="text-red-500 text-sm mt-1">
                    {errors.job_title}
                  </div>
                )}
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
              {touched.email && errors.email && (
                <div className="text-red-500 text-sm mt-1">{errors.email}</div>
              )}
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
                {touched.location && errors.location && (
                  <div className="text-red-500 text-sm mt-1">
                    {errors.location}
                  </div>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">
                  Region
                </label>
                <Field
                  name="region"
                  className="mt-1 p-2 w-full border rounded-md"
                />
                {touched.region && errors.region && (
                  <div className="text-red-500 text-sm mt-1">
                    {errors.region}
                  </div>
                )}
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
                {touched.category && errors.category && (
                  <div className="text-red-500 text-sm mt-1">
                    {errors.category}
                  </div>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">
                  Hourly rate
                </label>
                <Field
                  name="hourly_rate"
                  className="mt-1 p-2 w-full border rounded-md"
                />
                {touched.hourly_rate && errors.hourly_rate && (
                  <div className="text-red-500 text-sm mt-1">
                    {errors.hourly_rate}
                  </div>
                )}
              </div>
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
              {touched.description && errors.description && (
                <div className="text-red-500 text-sm mt-1">
                  {errors.description}
                </div>
              )}
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-600"
                >
                  Upload Image
                </label>
                <input
                  type="file"
                  accept="image/*"
                  className="mt-1 p-2 w-full border rounded-md"
                  onChange={handleImageUpload}
                />
              </div>
              <div>
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-600"
                >
                  Upload CV
                </label>
                <input
                  type="file"
                  className="mt-1 p-2 w-full border rounded-md"
                  onChange={handleCvUpload}
                />
              </div>
            </div>

            <div className="flex justify-end items-center">
              <button
                type="submit"
                className={`${
                  isLoading ? " bg-gray-700" : "bg-gray-900 "
                }p-2 rounded-md text-white font-semibold`}
                disabled={isLoading}
              >
                Submit
              </button>
            </div>
          </form>
        </FormikProvider>
      )}
    </div>
  );
};

export default CandidateForm;
