import { number, object, string } from "yup";
import { ErrorMessage, Field, Form, FormikProvider, useFormik } from "formik";
import { useEffect } from "react";

let ContactFormSchema = object({
  name: string().required().min(6).max(25),
  email: string().email().required(),
  mobile: number().required(),
  subject: string().required(),
  message: string().required(),
});

const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      mobile: "",
      subject: "",
      message: "",
    },
    validationSchema: ContactFormSchema,
    onSubmit: (values) => console.log("This is login values", values),
  });
  const { touched, errors } = formik;

  useEffect(() => console.log("values", formik.values), [formik.values]);

  return (
    <div className="max-w-2xl mx-auto mt-8 p-4">
      <h1 className="text-3xl font-bold mb-4">Reach Us Quickly</h1>
      <p className="text-gray-700 mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in
        ullamcorper libero. Curabitur nec neque ac dui volutpat varius.
      </p>
      <FormikProvider value={formik}>
        <Form>
          <div className="flex flex-wrap -mx-2 mb-4">
            <div
              className={`w-full md:w-1/2 px-2 mb-4 ${
                touched.name && errors.name ? "has-error" : ""
              }`}
            >
              <Field
                name="name"
                placeholder="Name"
                className={`w-full p-2 border ${
                  touched.name && errors.name
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-500"
              />
            </div>
            <div
              className={`w-full md:w-1/2 px-2 mb-4 ${
                touched.email && errors.email ? "has-error" : ""
              }`}
            >
              <Field
                name="email"
                placeholder="Email"
                className={`w-full p-2 border ${
                  touched.email && errors.email
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-2 mb-4">
            <div
              className={`w-full md:w-1/2 px-2 mb-4 ${
                touched.mobile && errors.mobile ? "has-error" : ""
              }`}
            >
              <Field
                name="mobile"
                type="tel"
                placeholder="Mobile No"
                className={`w-full p-2 border ${
                  touched.mobile && errors.mobile
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
              />
              <ErrorMessage
                name="mobile"
                component="div"
                className="text-red-500"
              />
            </div>
            <div
              className={`w-full md:w-1/2 px-2 mb-4 ${
                touched.subject && errors.subject ? "has-error" : ""
              }`}
            >
              <Field
                name="subject"
                placeholder="Subject"
                className={`w-full p-2 border ${
                  touched.subject && errors.subject
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
              />
              <ErrorMessage
                name="subject"
                component="div"
                className="text-red-500"
              />
            </div>
          </div>
          <div
            className={`mb-4 ${
              touched.message && errors.message ? "has-error" : ""
            }`}
          >
            <Field
              as="textarea"
              name="message"
              placeholder="Type your message"
              className={`w-full p-2 border ${
                touched.message && errors.message
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
            />
            <ErrorMessage
              name="message"
              component="div"
              className="text-red-500"
            />
          </div>
          <button
            type="button"
            onClick={formik.handleSubmit}
            className="bg-primary-300 rounded-md text-white p-2"
          >
            Send Message
          </button>
        </Form>
      </FormikProvider>
    </div>
  );
};

export default ContactForm;
