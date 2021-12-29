import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { url } from "./UrlSettings";

function AddMentor({ studentData }) {

  const navigate = useNavigate();
  const [mentors, setMentors] = useState([]);
  const { email, mobileNo, name, pic } = studentData;
  
  function getMentors() {
    fetch(`${url}/mentors`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((data) => setMentors(data));
  }
  useEffect(() => {
    getMentors();
  }, []);
  function assignMentor(mentor) {
    fetch(`${url}/assignMentor`, {
      method: "PUT",
      body: JSON.stringify({
        student: { email: email, mobileNo: mobileNo, name: name, pic: pic },
        oldMentor: studentData.mentor,
        newMentor: mentor,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((data) => data.json());
  }
  return (
    <div className="container">
      <div className="heading">Mentors</div>
      {mentors.map((mentor) => (
        <div className="card">
          <img src={mentor.pic} alt="" />
          <div className="name">{mentor.name}</div>
          <div className="mobileNo">{mentor.mobileNo}</div>
          <div className="email">{mentor.email}</div>
          <button
            className="submit-button"
            onClick={() => {
              assignMentor(mentor);
              navigate("/");
            }}
          >
            Assign mentor
          </button>
        </div>
      ))}
    </div>
  );
}

export default AddMentor;
