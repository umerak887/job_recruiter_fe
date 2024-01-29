import { FormikProvider, useFormik, Field } from "formik";
import React, { useState } from "react";
import { object, string } from "yup";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";

const urlSchema = object({
  urlname: string().required(),
  urllink: string()
    .matches(
      /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
      "Enter correct url!"
    )
    .required(),
});
const UrlsForm = ({ addURL }) => {
  const [isOpen, setIsOpen] = useState(true);
  const formik = useFormik({
    initialValues: {
      urlname: "",
      urllink: "",
    },
    validationSchema: urlSchema,
    onSubmit: (values) => {
      addURL(values);
      console.log(values);
    },
  });
  return (
    <div className="bg-white shadow-md pb-4  mt-1">
      <div className="bg-gray-900 text-white font-medium p-4 flex justify-between items-center">
        <h1>Add URL</h1>
        <div onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <IoChevronUp /> : <IoChevronDown />}
        </div>
      </div>
      {isOpen && (
        <FormikProvider value={formik}>
          <form onSubmit={formik.handleSubmit} className="p-4">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">
                URL Name
              </label>
              <Field
                name="urlname"
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">
                URL Link
              </label>
              <Field
                name="urllink"
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>
            <div className="flex justify-end items-center m-4">
              <button
                type="submit"
                className="bg-gray-900 p-2 rounded-md text-white font-semibold"
              >
                Add URL
              </button>
            </div>
          </form>
        </FormikProvider>
      )}
    </div>
  );
};

export default UrlsForm;

// // Import necessary dependencies
// import React from "react";
// import { useFormik, FormikProvider, Field } from "formik";
// import * as Yup from "yup";

// // Define the validation schema
// const urlSchema = Yup.object().shape({
//   urlname: Yup.string().required("URL Name is required"),
//   urllink: Yup.string()
//     .matches(
//       /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
//       "Enter correct URL"
//     )
//     .required("URL Link is required"),
// });

// // Define the form component
// function UrlForm() {
//   // Initialize useFormik hook
//   const formik = useFormik({
//     initialValues: {
//       urlname: "",
//       urllink: "",
//     },
//     validationSchema: urlSchema,
//     onSubmit: (values) => {
//       // Handle form submission
//       console.log(values);
//     },
//   });

//   return (
//     <FormikProvider value={formik}>
//       <form onSubmit={formik.handleSubmit}>
//         <div>
//           <label htmlFor="urlname">URL Name</label>
//           <Field id="urlname" name="urlname" type="text" />
//           {formik.errors.urlname && formik.touched.urlname && (
//             <div>{formik.errors.urlname}</div>
//           )}
//         </div>
//         <div>
//           <label htmlFor="urllink">URL Link</label>
//           <Field id="urllink" name="urllink" type="text" />
//           {formik.errors.urllink && formik.touched.urllink && (
//             <div>{formik.errors.urllink}</div>
//           )}
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//     </FormikProvider>
//   );
// }

// export default UrlForm;
