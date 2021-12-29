import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { url } from "./UrlSettings";



function SelectStudent({ setStudentData }) {

  const navigate = useNavigate();
  
  const [students, setStudents] = useState([]);

  function getStudents() {
    fetch(`${url}/students`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((data) => setStudents(data));
  }

  useEffect(() => {
    getStudents();
  }, []);

  return (
    <div className="container">
      <div className="heading">Students</div>
      {students.map((student) => (
        <div className="card">
          <img src={student.pic} alt="" />
          <div className="name">{student.name}</div>
          <div className="mobileNo">{student.mobileNo}</div>
          <div className="email">{student.email}</div>
          <button
            className="submit-button"
            onClick={() => {
              setStudentData(student);
              navigate("/addMentor");
            }}
          >
            Select student
          </button>
        </div>
      ))}
    </div>
  );
}

export default SelectStudent;
