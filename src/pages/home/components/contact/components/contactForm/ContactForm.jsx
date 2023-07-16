import { useFormik } from "formik";
import {
  FlexColumn,
  FlexRow,
} from "../../../../../../shared/styles/sharedStyles";
import { ContactFormContainer, ContactTitle, Error } from "./ContactForm.style";
import { validationSchema } from "./validationSchema";
import CustomButton from "../../../../../../shared/components/customButton/CustomButton";

const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phoneNumber: "",
      message: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      // console.log(JSON.stringify(values, null, 2));
      resetForm();
    },
  });

  return (
    <ContactFormContainer>
      <FlexColumn
        width={"100%"}
        justifycontent={"center"}
        margin={"0px 0px 24px 0px"}
      >
        <ContactTitle>GET IN TOUCH</ContactTitle>
      </FlexColumn>
      <FlexColumn alignitems={"flex-start"} width={"100%"}>
        <form onSubmit={formik.handleSubmit}>
          <FlexColumn alignitems={"flex-start"} gap={"30px"} width={"100%"}>
            <FlexColumn alignitems={"flex-start"} gap={"4px"} width={"100%"}>
              <label htmlFor="name">
                Name<span>*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
              />
              {formik.errors.name && formik.touched.name ? (
                <Error>{formik.errors.name}</Error>
              ) : null}
            </FlexColumn>

            <FlexColumn alignitems={"flex-start"} gap={"4px"} width={"100%"}>
              <label htmlFor="email">
                Email<span>*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.errors.email && formik.touched.email ? (
                <Error>{formik.errors.email}</Error>
              ) : null}
            </FlexColumn>

            <FlexColumn alignitems={"flex-start"} gap={"4px"} width={"100%"}>
              <label htmlFor="phoneNumber">
                Phone No.<span>*</span>
              </label>
              <input
                id="phoneNumber"
                name="phoneNumber"
                type="text"
                placeholder="Enter your phone no"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phoneNumber}
              />
              {formik.errors.phoneNumber && formik.touched.phoneNumber ? (
                <Error>{formik.errors.phoneNumber}</Error>
              ) : null}
            </FlexColumn>

            <FlexColumn alignitems={"flex-start"} gap={"4px"} width={"100%"}>
              <label htmlFor="message">
                Message<span>*</span>
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Enter your message"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.message}
              />
              {formik.errors.message && formik.touched.message ? (
                <Error>{formik.errors.message}</Error>
              ) : null}
            </FlexColumn>

            <FlexRow width={"100%"} justifycontent={"center"}>
              <CustomButton
                type="submit"
                disabled={
                  !formik.isValid || formik.isSubmitting || !formik.dirty
                }
              >
                Hire Me!
              </CustomButton>
            </FlexRow>
          </FlexColumn>
        </form>
      </FlexColumn>
    </ContactFormContainer>
  );
};

export default ContactForm;
