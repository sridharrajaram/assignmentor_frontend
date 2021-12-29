import React from "react";
import { useNavigate } from "react-router";
import { useFormik } from "formik";
import * as yup from "yup";
import { url } from "./UrlSettings";

function CreateMentor() {

  const navigate = useNavigate();

  const addMentor = (mentor) => {
    fetch(`${url}/createMentor`, {
      method: "POST",
      body: JSON.stringify(mentor),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((data) => data.json())
      .then(() => navigate("/"));
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
        .min(3, "please enter longer Mentor name")
        .required("please provide Mentor name"),
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
    onSubmit: (mentor) => {
      addMentor(mentor);
      navigate("/");
    },
  });
  
  return (
    <div>
      <div className="heading">Create mentor</div>
      <form onSubmit={formik.handleSubmit}>
        <input
          className="name-input"
          placeholder="Mentor name..."
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
          placeholder="Mentor mobile..."
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
          placeholder="Mentor email..."
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
          placeholder="Mentor image..."
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
          Add Mentor
        </button>
        <br />
      </form>
    </div>
  );
}

export default CreateMentor;
