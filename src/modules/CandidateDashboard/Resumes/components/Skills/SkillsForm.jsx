import { FormikProvider, useFormik, Field } from "formik";
import React, { useState } from "react";
import { object, string } from "yup";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";

const skillsSchema = object({
  name: string().required(),
});
const SkillsForm = ({ addSkill }) => {
  const [isOpen, setIsOpen] = useState(true);

  const formik = useFormik({
    initialValues: {
      name: "",
    },
    validationSchema: skillsSchema,
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      addSkill(values);
      resetForm();
    },
  });

  return (
    <div className="bg-white shadow-md pb-4 mt-1 mb-4">
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
                Skill
              </label>
              <Field
                name="name"
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>
            <div className="flex justify-end items-center m-4">
              <button
                type="submit"
                className="bg-gray-900 p-2 rounded-md text-white font-semibold"
              >
                Add Skill
              </button>
            </div>
          </form>
        </FormikProvider>
      )}
    </div>
  );
};

export default SkillsForm;
