import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";

const mentorContext = createContext(null);
function Mentees() {
  const navigate = useNavigate();
  const { setMentorData } = useContext(mentorContext);
  const [mentors, setMentors] = useState([]);
  function getMentors() {
    fetch("https://ranjith-assign-mentor.herokuapp.com/mentors", {
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
              setMentorData(mentor);
              navigate.push("/displayMentees");
            }}
          >
            Display Mentees
          </button>
        </div>
      ))}
    </div>
  );
}

export default Mentees;
