import React from "react";
import { useNavigate } from "react-router";
import { useFormik } from "formik";
import * as yup from "yup";

function CreateStudent() {
  const navigate = useNavigate();
  const addStudent = (student) => {
    fetch("https://ranjith-assign-mentor.herokuapp.com/createStudent", {
      method: "POST",
      body: JSON.stringify(student),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((data) => data.json());
  };
  const formik = useFormik({
    initialValues: {
      name: "",
      pic: "",
      mobile: "",
      email: "",
    },
    validationSchema: yup.object({
      name: yup
        .string()
        .min(3, "please enter longer Student name")
        .required("please provide Student name"),
      pic: yup
        .string()
        .min(3, "please enter longer image url")
        .required("please provide image url"),
      mobile: yup
        .number()
        .min(10, "please enter ten digit number")
        .required("please provide mobile number "),
      email: yup
        .string()
        .min(3, "please enter valid email")
        .required("please provide email id "),
    }),
    onSubmit: (student) => {
      addStudent(student);
      navigate.push("/Home");
    },
  });
  return (
    <div>
      <div className="heading">Create student</div>
      <form onSubmit={formik.handleSubmit}>
        <input
          className="name-input"
          placeholder="Student name..."
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        <br />
        {formik.touched.name && formik.errors.name ? (
          <p className="errors">{formik.errors.name}</p>
        ) : (
          ""
        )}
        <input
          className="name-input"
          placeholder="Student mobile..."
          name="mobile"
          onChange={formik.handleChange}
          value={formik.values.mobile}
        />
        <br />
        {formik.touched.mobile && formik.errors.mobile ? (
          <p className="errors">{formik.errors.mobile}</p>
        ) : (
          ""
        )}
        <input
          className="name-input"
          placeholder="Student email..."
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <br />
        {formik.touched.email && formik.errors.email ? (
          <p className="errors">{formik.errors.email}</p>
        ) : (
          ""
        )}
        <input
          className="name-input pic-input"
          placeholder="Student image..."
          name="pic"
          onChange={formik.handleChange}
          value={formik.values.pic}
        />
        <br />
        {formik.touched.pic && formik.errors.pic ? (
          <p className="errors">{formik.errors.pic}</p>
        ) : (
          ""
        )}
        <button className="final-button" type="submit">
          Add Student
        </button>
        <br />
      </form>
    </div>
  );
}

export default CreateStudent;