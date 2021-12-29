import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import AddMentees from "./AddMentees.js";
import { url } from "./UrlSettings.js";

function SelectStudents({ mentorData }) {

  const [newMentees, setnewMentees] = useState([]);
  const navigate = useNavigate();
  const [nonMentees, setNonMentees] = useState([]);

  function getNonMentees() {
    fetch(`${url}/students`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((data) => data.filter((people) => !people.hasOwnProperty("mentor")))
      .then((mentorLess) => setNonMentees(mentorLess));
  }

  function assignNewMentees() {
    fetch(`${url}/assignStudents`, {
      method: "PUT",
      body: JSON.stringify({ mentor: mentorData, newMentees: newMentees }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((data) => data.json());
  }
  useEffect(() => {
    getNonMentees();
  }, []);
  
  return (
    <div className="container">
      <div className="heading">Students </div>
      {nonMentees.map((nonMentee) => (
        <AddMentees
          nonMentee={nonMentee}
          newMentees={newMentees}
          setnewMentees={setnewMentees}
        />
      ))}
      <button
        className="final-button"
        onClick={() => {
          assignNewMentees();
          navigate("/");
        }}
      >
        Assign Students
      </button>
    </div>
  );
}

export default SelectStudents;
