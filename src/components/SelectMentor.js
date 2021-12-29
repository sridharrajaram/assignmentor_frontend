import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { url } from "./UrlSettings";

const mentorContext = createContext(null);

function SelectMentor() {
  
  const { setMentorData } = useContext(mentorContext);
  const navigate = useNavigate();
  const [mentors, setMentors] = useState([]);

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
              navigate.push("/selectStudents");
              setMentorData(mentor);
            }}
          >
            Select Mentor
          </button>
        </div>
      ))}
    </div>
  );
}

export default SelectMentor;
