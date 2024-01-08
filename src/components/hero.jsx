import React from 'react';
import { useFormik } from 'formik';
import { FaBriefcase, FaBuilding, FaFileAlt } from 'react-icons/fa';

const HeroSection = () => {
  const formik = useFormik({
    initialValues: {
      jobTitle: '',
      location: '',
      category: 'category1',
    },
    onSubmit: (values) => {
      // Handle the form submission logic here
      console.log('Form submitted with values:', values);
    },
  });

  return (
    <section className="bg-primary-100 text-text-100 py-16 text-center">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-4">Find Your Dream Job</h1>
        <p className="text-lg mb-8">Explore exciting opportunities and take the next step in your career.</p>

        <div className="max-w-3xl mx-auto relative flex flex-col items-center">
          <form onSubmit={formik.handleSubmit} className="flex items-center bg-bg-200 rounded-md p-4 mb-8">
            <input
              type="text"
              placeholder="Job Title"
              className="flex-grow px-4 py-2 border border-bg-200 rounded-l-md focus:outline-none"
              {...formik.getFieldProps('jobTitle')}
            />
            <input
              type="text"
              placeholder="Location"
              className="px-4 py-2 border border-bg-200 focus:outline-none"
              {...formik.getFieldProps('location')}
            />
            <select
              className="px-4 py-2 border border-bg-200 focus:outline-none rounded-r-md"
              {...formik.getFieldProps('category')}
            >
              <option value="category1">Category 1</option>
              <option value="category2">Category 2</option>
              <option value="category3">Category 3</option>
            </select>
            <button
              type="submit"
              className="bg-accent-100 text-white px-6 py-2 rounded-md ml-4 focus:outline-none hover:bg-accent-200 active:bg-accent-200"
            >
              Search
            </button>
          </form>

          {/* Square Sections for Job, Company, and Resumes Count */}
          <div className="flex w-full justify-between">
            <div className="bg-bg-200 p-4 rounded-md text-center flex-1 max-w-[calc(33%-0.5rem)]">
              <FaBriefcase size={32} className="text-2xl mb-2 mx-auto" />
              <p className="text-lg font-bold">100 Jobs</p>
            </div>

            <div className="bg-bg-200 p-4 rounded-md text-center flex-1 max-w-[calc(33%-0.5rem)]">
              <FaBuilding size={32} className="text-2xl mb-2 mx-auto" />
              <p className="text-lg font-bold">50 Companies</p>
            </div>

            <div className="bg-bg-200 p-4 rounded-md text-center flex-1 max-w-[calc(33%-0.5rem)]">
              <FaFileAlt size={32} className="text-2xl mb-2 mx-auto" />
              <p className="text-lg font-bold">75 Resumes</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
