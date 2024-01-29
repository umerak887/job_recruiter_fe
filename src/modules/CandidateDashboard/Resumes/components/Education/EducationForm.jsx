import { FormikProvider, useFormik, Field, Form } from "formik";
import React, { useState } from "react";
import { object, string, date } from "yup";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";

const educationSchema = object({
  institution: string().required(),
  degree: string().required(),
  marks: string().required(),
  startDate: string().required(),
  endDate: string().required(),
  description: string().required(),
});

const EducationForm = ({ addEducation, onClose }) => {
  const [isOpen, setIsOpen] = useState(true);

  const formik = useFormik({
    initialValues: {
      institution: "",
      degree: "",
      marks: "",
      startDate: "",
      endDate: "",
      description: "",
    },
    onSubmit: (values) => {
      addEducation(values);
    },
    validationSchema: educationSchema,
  });

  return (
    <div className="bg-white shadow-md pb-4 pt-0 mb-2">
      <div className="flex justify-between items-center bg-gray-900 text-white font-medium p-4">
        <h1 className="">Add Education</h1>
        <div onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <IoChevronUp /> : <IoChevronDown />}
        </div>
      </div>
      {isOpen && (
        <FormikProvider value={formik}>
          <Form className="p-4">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">
                Institute
              </label>
              <Field
                name="institution"
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">
                Degree
              </label>
              <Field
                name="degree"
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">
                Marks
              </label>
              <Field
                name="marks"
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">
                Start Date
              </label>
              <Field
                name="startDate"
                type="date"
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">
                End Date
              </label>
              <Field
                name="endDate"
                type="date"
                className="mt-1 p-2 w-full border rounded-md"
              />
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
            </div>
            <div className="flex justify-end items-center m-4">
              <button
                type="submit"
                className="bg-gray-900 p-2 rounded-md text-white font-semibold"
              >
                Submit
              </button>
            </div>
          </Form>
        </FormikProvider>
      )}
    </div>
  );
};

export default EducationForm;

// import React, { useState } from "react";
// import { object, string, date } from "yup";
// import { IoChevronDown, IoChevronUp } from "react-icons/io5";
// import { Field, FormikProvider, useFormik } from "formik";

// const educationSchema = object({
//   institution: string().required(),
//   degree: string().required(),
//   marks: string().required(),
//   startDate: string().required(),
//   endDate: string().required(),
//   description: string().required(),
// });
// const EducationForm = () => {
//   const formik = useFormik({
//     initialValues: {
//       institution: "",
//       degree: "",
//       marks: "",
//       startDate: "",
//       endDate: "",
//       description: "",
//     },
//     onSubmit: (values) => console.log(values),
//     validationSchema: educationSchema,
//   });

//   return (
//     <div>
//       <FormikProvider value={formik}>
//         <form onSubmit={formik.handleSubmit}>
//           <div>
//             <label>Intitution</label>
//             <Field
//               name="institution"
//               type="text"
//               className="p-2 border border-gray-500 "
//             />
//           </div>

//           <div>
//             <label>Degree</label>
//             <Field
//               name="degree"
//               type="text"
//               className="p-2 border border-gray-500 "
//             />
//           </div>

//           <div>
//             <label>Marks</label>
//             <Field
//               name="marks"
//               type="text"
//               className="p-2 border border-gray-500 "
//             />
//           </div>

//           <div>
//             <label>Start date</label>
//             <Field
//               name="startDate"
//               type="date"
//               className="p-2 border border-gray-500 "
//             />
//           </div>

//           <div>
//             <label>End date</label>
//             <Field
//               name="endDate"
//               type="date"
//               className="p-2 border border-gray-500 "
//             />
//           </div>

//           <div>
//             <label>Description</label>
//             <Field
//               as="textarea"
//               id="description"
//               name="description"
//               className="mt-1 p-2 w-full border rounded-md"
//             />
//           </div>
//           <button type="submit">Submit</button>
//         </form>
//       </FormikProvider>
//     </div>
//   );
// };

// export default EducationForm;
